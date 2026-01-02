-- Add stats columns to profiles table
alter table profiles 
add column if not exists total_likes integer default 0,
add column if not exists total_followers_gained integer default 0,
add column if not exists total_comments integer default 0,
add column if not exists total_saves integer default 0;

-- Optional: If total_shares exists from previous migration, rename it or drop it
do $$
begin
  if exists (select 1 from information_schema.columns where table_name = 'profiles' and column_name = 'total_shares') then
    alter table profiles rename column total_shares to total_comments;
  end if;
end $$;
