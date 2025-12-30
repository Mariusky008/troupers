-- Enable RLS
ALTER TABLE daily_supports ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to be safe
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON daily_supports;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON daily_supports;

-- Create comprehensive policies
-- 1. VIEW: Users can see supports they GAVE or RECEIVED
CREATE POLICY "Enable read access for involved users" 
ON daily_supports FOR SELECT 
TO authenticated 
USING (auth.uid() = supporter_id OR auth.uid() = target_user_id);

-- 2. INSERT: Users can insert their own support actions
CREATE POLICY "Enable insert for authenticated users" 
ON daily_supports FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = supporter_id);
