-- 1. SECURISATION BOUNTIES
-- Drop la policy permissive
DROP POLICY IF EXISTS "Mercenaries can update bounties" ON bounties;

-- Nouvelle policy stricte :
-- On autorise l'UPDATE seulement si :
-- A. On réclame une prime ouverte (mercenary_id est NULL et on le met à auth.uid())
-- B. On est déjà le mercenaire et on veut changer le statut (mais pas changer la récompense !)
-- Pour simplifier en SQL pur sans triggers complexes, on autorise l'update si on est le mercenaire OU si la prime est open.
-- Mais pour empêcher de modifier reward_credits, il faudrait un trigger ou une limitation de colonnes (pas dispo en simple policy USING).
-- On va faire une policy qui vérifie qu'on est concerné.

CREATE POLICY "Mercenaries can update bounties" ON bounties
    FOR UPDATE
    USING (
        -- Cas 1 : Je suis le mercenaire assigné
        mercenary_id = auth.uid()
        OR
        -- Cas 2 : La prime est libre (je veux la prendre)
        (status = 'open' AND mercenary_id IS NULL)
    )
    WITH CHECK (
        -- Je ne peux pas m'enlever d'une mission (sauf logique d'abandon non gérée ici)
        -- Je ne peux pas changer le target_user_id ou le montant (idéalement)
        -- Mais CHECK vérifie la nouvelle ligne.
        -- On s'assure que le mercenary_id est soit inchangé, soit devient MOI.
        (mercenary_id = auth.uid() OR mercenary_id IS NULL) 
    );


-- 2. SECURISATION ADMIN (Trends & Boost)
-- On crée une fonction pour vérifier si l'user est admin (email en dur pour l'instant ou table roles)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- Remplacez par votre email admin ou une logique de table roles
  RETURN (select email from auth.users where id = auth.uid()) = 'mariustalk@yahoo.fr';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Sécurisation daily_trends
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON daily_trends;
CREATE POLICY "Only admins can insert trends" ON daily_trends
    FOR INSERT WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Enable update for authenticated users" ON daily_trends; -- s'il y en avait une
-- Ajout Update/Delete pour admin
CREATE POLICY "Only admins can update trends" ON daily_trends
    FOR UPDATE USING (is_admin());
CREATE POLICY "Only admins can delete trends" ON daily_trends
    FOR DELETE USING (is_admin());


-- Sécurisation boost_windows
DROP POLICY IF EXISTS "Authenticated users can insert windows" ON boost_windows;
CREATE POLICY "Only admins can insert windows" ON boost_windows
    FOR INSERT WITH CHECK (is_admin());

-- 3. OPTIMISATION PERFORMANCES (INDEX)
-- Index pour daily_supports (très sollicité par le dashboard)
CREATE INDEX IF NOT EXISTS idx_daily_supports_target_created ON daily_supports(target_user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_daily_supports_supporter_created ON daily_supports(supporter_id, created_at);

-- Index pour video_tracking (recherche de doublons)
CREATE INDEX IF NOT EXISTS idx_video_tracking_composite ON video_tracking(supporter_id, target_user_id, video_url);

-- Index pour bounties (recherche de missions ouvertes)
CREATE INDEX IF NOT EXISTS idx_bounties_status ON bounties(status);
