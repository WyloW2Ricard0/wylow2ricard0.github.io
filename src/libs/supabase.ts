import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('⚠️ Supabase credentials are not configured. Auth will not work.');
  console.warn('📝 Please configure .env with:');
  console.warn('   SUPABASE_URL=your-supabase-url');
  console.warn('   SUPABASE_ANON_KEY=your-anon-key');
  // Create a dummy client to avoid crashes
  supabase = createClient('https://dummy.supabase.co', 'dummy-key');
} else {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export { supabase };
