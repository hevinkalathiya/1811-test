import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
  const supabase = createClientComponentClient();
  const { data } = await supabase.auth.getSession();

  // @ts-ignore
  return data?.session?.user?.identities[0]?.identity_data ?? [];
};
