import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single instance of the Supabase client
let supabaseInstance = null;

const supabaseClient = (supabaseAccessToken) => {
  // If the client already exists, return it
  if (supabaseInstance) {
    return supabaseInstance;
  }

  // Create a new instance if none exists yet
  supabaseInstance = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });

  return supabaseInstance;
};

export default supabaseClient;
