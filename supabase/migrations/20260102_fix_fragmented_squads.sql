-- 1. Update join_squad to support 50 members instead of 30
CREATE OR REPLACE FUNCTION join_squad(p_user_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    target_squad_id UUID;
    target_squad_name TEXT;
    squad_number INT;
    member_count INT;
    existing_squad_id UUID;
BEGIN
    -- 1. Check if user is already in a squad
    SELECT squad_id INTO existing_squad_id FROM squad_members WHERE user_id = p_user_id LIMIT 1;
    
    IF existing_squad_id IS NOT NULL THEN
        SELECT name INTO target_squad_name FROM squads WHERE id = existing_squad_id;
        RETURN jsonb_build_object(
            'success', true, 
            'squad_id', existing_squad_id, 
            'squad_name', target_squad_name,
            'message', 'Already in a squad'
        );
    END IF;

    -- 2. Find the first squad with < 50 members (UPDATED FROM 30)
    -- We order by created_at ASC to fill oldest squads first (Alpha, then Beta...)
    SELECT s.id, s.name
    INTO target_squad_id, target_squad_name
    FROM squads s
    LEFT JOIN squad_members sm ON s.id = sm.squad_id
    GROUP BY s.id, s.name, s.created_at
    HAVING COUNT(sm.id) < 50
    ORDER BY s.created_at ASC
    LIMIT 1;

    -- 3. If no suitable squad found, create a new one
    IF target_squad_id IS NULL THEN
        SELECT COUNT(*) INTO squad_number FROM squads;
        target_squad_name := 'Escouade ' || (squad_number + 1);
        INSERT INTO squads (name) VALUES (target_squad_name) RETURNING id INTO target_squad_id;
    END IF;

    -- 4. Add user to the squad
    INSERT INTO squad_members (squad_id, user_id) VALUES (target_squad_id, p_user_id);

    RETURN jsonb_build_object(
        'success', true, 
        'squad_id', target_squad_id, 
        'squad_name', target_squad_name,
        'message', 'Joined squad successfully'
    );
END;
$$;

-- 2. Consolidate ALL users into a single squad "Escouade Alpha"
-- This fixes the issue where users are split into different squads
DO $$
DECLARE
    target_squad_id UUID;
BEGIN
    -- Find or Create "Escouade Alpha"
    SELECT id INTO target_squad_id FROM squads WHERE name = 'Escouade Alpha' LIMIT 1;
    
    IF target_squad_id IS NULL THEN
        INSERT INTO squads (name) VALUES ('Escouade Alpha') RETURNING id INTO target_squad_id;
    END IF;

    -- Move ALL existing memberships to this squad
    UPDATE squad_members
    SET squad_id = target_squad_id
    WHERE squad_id != target_squad_id;

    -- Ensure any stragglers (orphans) are also added
    INSERT INTO squad_members (squad_id, user_id)
    SELECT target_squad_id, p.id
    FROM profiles p
    WHERE NOT EXISTS (
        SELECT 1 FROM squad_members sm WHERE sm.user_id = p.id
    );

    -- Clean up empty squads
    DELETE FROM squads 
    WHERE id != target_squad_id 
    AND id NOT IN (SELECT DISTINCT squad_id FROM squad_members);
END $$;
