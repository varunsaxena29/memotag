import { createClient } from "@supabase/supabase-js";
console.log(process.env.SUPABASE_URL)

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // use service role key server-side only

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
