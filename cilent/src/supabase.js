import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://myiikjtkbyxpvjescdwv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15aWlranRrYnl4cHZqZXNjZHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMyODgyMTIsImV4cCI6MTk2ODg2NDIxMn0.tJvFmo9engd9PDq9h7d_4pAW7HA4jkTQqe5w3Ez5VP8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)