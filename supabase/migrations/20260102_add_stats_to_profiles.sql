-- Add stats columns to profiles table
alter table profiles 
add column if not exists total_likes integer default 0,
add column if not exists total_followers_gained integer default 0,
add column if not exists total_shares integer default 0,
add column if not exists total_saves integer default 0;
