-- Fonction RPC pour nettoyer les utilisateurs fantômes depuis l'admin
CREATE OR REPLACE FUNCTION clean_ghost_users()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER -- Exécuté avec les droits admin
AS $$
DECLARE
    deleted_profiles_count INT;
    deleted_members_count INT;
BEGIN
    -- 1. Supprimer les membres d'escouade orphelins
    DELETE FROM public.squad_members
    WHERE user_id NOT IN (SELECT id FROM auth.users);
    GET DIAGNOSTICS deleted_members_count = ROW_COUNT;

    -- 2. Supprimer les profils orphelins
    DELETE FROM public.profiles
    WHERE id NOT IN (SELECT id FROM auth.users);
    GET DIAGNOSTICS deleted_profiles_count = ROW_COUNT;

    RETURN json_build_object(
        'success', true,
        'deleted_profiles', deleted_profiles_count,
        'deleted_members', deleted_members_count,
        'message', format('Nettoyage terminé : %s profils et %s membres supprimés.', deleted_profiles_count, deleted_members_count)
    );
END;
$$;
