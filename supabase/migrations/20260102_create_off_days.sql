-- Create Table for Off Days
CREATE TABLE IF NOT EXISTS user_off_days (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    off_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, off_date)
);

-- RLS
ALTER TABLE user_off_days ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own off days" ON user_off_days
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own off days" ON user_off_days
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own off days" ON user_off_days
    FOR DELETE USING (auth.uid() = user_id);

-- Add index for faster lookup during cron jobs
CREATE INDEX IF NOT EXISTS idx_off_days_date ON user_off_days(off_date);
