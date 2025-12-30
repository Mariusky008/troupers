-- Enable RLS
ALTER TABLE squad_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to be safe
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON squad_messages;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON squad_messages;

-- Create comprehensive policies
-- 1. VIEW: Allow authenticated users to view all messages (Filtering is done in the query)
CREATE POLICY "Enable read access for authenticated users" 
ON squad_messages FOR SELECT 
TO authenticated 
USING (true);

-- 2. INSERT: Users can insert if they are authenticated and user_id matches
CREATE POLICY "Enable insert for authenticated users" 
ON squad_messages FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);
