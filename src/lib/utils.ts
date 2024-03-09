import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@supabase/supabase-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl) throw new Error("Supabase URL not found.");
if (!supabaseAnonKey) throw new Error("Supabase Anon key not found.");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      // options: {
      //     // redirectTo: getURL() // function to get your URL
      // }
  })
}

export async function signOut() {
    const signOut = await supabase.auth.signOut()
}