import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.supabaseUrl || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.supabaseAnonKey || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
