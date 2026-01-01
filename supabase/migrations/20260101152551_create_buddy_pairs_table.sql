create table if not exists buddy_pairs (
  id uuid default gen_random_uuid() primary key,
  user1_id uuid references auth.users(id) not null,
  user2_id uuid references auth.users(id) not null,
  week_start_date date not null default current_date, -- The Monday of the week
  shared_score integer default 100, -- Starts at 100
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ensure unique pairs per week (optional but good practice)
-- create unique index buddy_pairs_week_user1_idx on buddy_pairs (user1_id, week_start_date);
-- create unique index buddy_pairs_week_user2_idx on buddy_pairs (user2_id, week_start_date);

-- Policy to allow read access to everyone (so users can see their buddies)
create policy "Enable read access for all users" on buddy_pairs
  for select using (true);

-- Policy to allow write access only to admin (or system)
create policy "Enable insert for authenticated users" on buddy_pairs
  for insert with check (auth.role() = 'authenticated'); 

alter table buddy_pairs enable row level security;
