-- Create a function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, username)
  values (
    new.id, 
    new.email, 
    coalesce(
      new.raw_user_meta_data->>'username', 
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      'Recrue' -- Fallback default
    )
  );
  return new;
end;
$$ language plpgsql security definer;
