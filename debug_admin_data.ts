import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkData() {
  console.log("--- PROFILES (Recrues) ---");
  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .select('*');

  if (profilesError) console.error(profilesError);
  else console.table(profiles);

  console.log("\n--- PRE-REGISTRATIONS (Pré-inscriptions) ---");
  const { data: preregs, error: preregsError } = await supabase
    .from('pre_registrations')
    .select('*');

  if (preregsError) console.error(preregsError);
  else console.table(preregs);
}

checkData();
