-- Fix orphaned users by assigning them to squads immediately

DO $$
DECLARE
    orphan_user RECORD;
    target_squad_id UUID;
    squad_member_count INT;
    new_squad_name TEXT;
    squad_number INT;
BEGIN
    -- Loop through all users in profiles who are NOT in squad_members
    FOR orphan_user IN 
        SELECT p.id 
        FROM profiles p 
        LEFT JOIN squad_members sm ON p.id = sm.user_id 
        WHERE sm.id IS NULL
    LOOP
        -- 1. Try to find an existing squad with < 30 members
        SELECT s.id 
        INTO target_squad_id
        FROM squads s
        LEFT JOIN squad_members sm ON s.id = sm.squad_id
        GROUP BY s.id
        HAVING COUNT(sm.id) < 30
        ORDER BY s.created_at ASC
        LIMIT 1;

        -- 2. If no squad found, create a new one
        IF target_squad_id IS NULL THEN
            -- Generate a name (e.g. "Escouade 2", "Escouade 3"...)
            SELECT COUNT(*) INTO squad_number FROM squads;
            new_squad_name := 'Escouade ' || (squad_number + 1);
            
            INSERT INTO squads (name) VALUES (new_squad_name) RETURNING id INTO target_squad_id;
        END IF;

        -- 3. Insert the user into the squad
        INSERT INTO squad_members (squad_id, user_id) VALUES (target_squad_id, orphan_user.id);
        
        RAISE NOTICE 'Assigned user % to squad %', orphan_user.id, target_squad_id;
    END LOOP;
END $$;
