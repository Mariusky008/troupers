-- Nettoyage des profils orphelins (Fantômes)
-- Supprime les profils qui n'ont plus de correspondance dans auth.users

DELETE FROM public.squad_members
WHERE user_id NOT IN (SELECT id FROM auth.users);

DELETE FROM public.profiles
WHERE id NOT IN (SELECT id FROM auth.users);

-- Vérification (Optionnel)
-- SELECT * FROM public.profiles WHERE id NOT IN (SELECT id FROM auth.users);
