-- Consolidate ALL users into a single squad "Escouade Alpha"
-- This ensures everyone sees each other in the early stage.

DO $$
DECLARE
    target_squad_id UUID;
BEGIN
    -- 1. Find or Create "Escouade Alpha"
    SELECT id INTO target_squad_id FROM squads WHERE name = 'Escouade Alpha' LIMIT 1;
    
    IF target_squad_id IS NULL THEN
        INSERT INTO squads (name) VALUES ('Escouade Alpha') RETURNING id INTO target_squad_id;
    END IF;

    -- 2. Move ALL existing memberships to this squad
    -- (This effectively merges everyone into one group)
    UPDATE squad_members
    SET squad_id = target_squad_id
    WHERE squad_id != target_squad_id;

    -- 3. Ensure any stragglers (orphans) are also added
    -- (Insert if not exists)
    INSERT INTO squad_members (squad_id, user_id)
    SELECT target_squad_id, p.id
    FROM profiles p
    WHERE NOT EXISTS (
        SELECT 1 FROM squad_members sm WHERE sm.user_id = p.id
    );

    -- 4. Clean up empty squads (optional, prevents confusion)
    DELETE FROM squads 
    WHERE id != target_squad_id 
    AND id NOT IN (SELECT DISTINCT squad_id FROM squad_members);
    
    RAISE NOTICE 'Consolidated all users into squad % (Escouade Alpha)', target_squad_id;
END $$;
