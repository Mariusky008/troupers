-- 1. Table des Vagues Quotidiennes (Le Planning)
CREATE TABLE IF NOT EXISTS daily_waves (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    squad_id UUID NOT NULL REFERENCES squads(id),
    creator_id UUID NOT NULL REFERENCES auth.users(id),
    scheduled_date DATE NOT NULL,
    start_time TIME NOT NULL, -- Début de la fenêtre critique (ex: 18:00)
    end_time TIME NOT NULL,   -- Fin de la fenêtre (ex: 20:00)
    wave_type TEXT NOT NULL CHECK (wave_type IN ('core', 'noise')), -- 'core' = Signal Fort, 'noise' = Signal Faible/Naturel
    status TEXT DEFAULT 'pending', -- pending, active, completed
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour requêtes rapides
CREATE INDEX IF NOT EXISTS idx_waves_date ON daily_waves(scheduled_date);
CREATE INDEX IF NOT EXISTS idx_waves_squad ON daily_waves(squad_id);

-- 2. Mise à jour des Membres pour la File d'Attente
ALTER TABLE squad_members 
ADD COLUMN IF NOT EXISTS last_wave_date TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS queue_priority INT DEFAULT 0, -- Plus le chiffre est haut, plus on est prioritaire
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active'; -- active, demoted, suspended
