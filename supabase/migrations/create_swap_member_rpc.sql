create or replace function swap_squad_member(p_user_id uuid, p_target_id uuid)
returns void
language plpgsql
security definer
as $$
declare
  v_squad_id uuid;
  v_new_member_id uuid;
begin
  -- 1. Get the squad ID of the requester
  select squad_id into v_squad_id
  from squad_members
  where user_id = p_user_id;

  if v_squad_id is null then
    raise exception 'User is not in a squad';
  end if;

  -- 2. Remove the target member from the squad
  -- (Only if they are actually in it, to be safe)
  delete from squad_members
  where squad_id = v_squad_id and user_id = p_target_id;

  -- 3. Find a replacement member
  -- Criteria:
  -- - Not the user triggering the swap
  -- - Not the user just removed (unless we want to allow immediate return? No, prompt implies rotation)
  -- - Has a video URL set
  -- - NOT currently in this squad
  -- - (Optional) Not in ANY squad? Ideally yes to fill squads, but maybe we allow multi-squad?
  --   Let's assume for now we want users who are NOT in a squad, or at least not in THIS one.
  --   To ensure "fresh blood", let's prioritize users NOT in any squad.
  
  select id into v_new_member_id
  from profiles p
  where p.id != p_user_id
    and p.id != p_target_id
    and p.current_video_url is not null
    and p.current_video_url != ''
    and not exists (
      select 1 from squad_members sm where sm.user_id = p.id
    )
  limit 1;

  -- If no "free" agent found, look for anyone not in THIS squad (stealing/sharing?)
  -- For now, let's stick to free agents to avoid complexity.
  
  -- 4. Add the new member if found
  if v_new_member_id is not null then
    insert into squad_members (squad_id, user_id)
    values (v_squad_id, v_new_member_id);
  end if;

end;
$$;