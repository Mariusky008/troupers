-- Enable RLS on squads table
alter table squads enable row level security;

-- Policy to allow any authenticated user to READ squads
-- (Needed to find available squads to join)
create policy "Allow authenticated users to select squads"
  on squads for select
  using (auth.role() = 'authenticated');

-- Policy to allow any authenticated user to INSERT a new squad
-- (Needed when all squads are full and a new one must be created)
create policy "Allow authenticated users to insert squads"
  on squads for insert
  with check (auth.role() = 'authenticated');

-- Enable RLS on squad_members table
alter table squad_members enable row level security;

-- Policy to allow users to read members of their squad (or all squads for logic)
create policy "Allow authenticated users to select squad_members"
  on squad_members for select
  using (auth.role() = 'authenticated');

-- Policy to allow users to JOIN a squad (insert themselves)
create policy "Allow authenticated users to insert themselves into squad_members"
  on squad_members for insert
  with check (auth.uid() = user_id);
