import { createClient } from "@supabase/supabase-js";
import supabase from "../../db.js";

export const LoginWithGoogle = async () => {
  const { user, session, error } = await supabase.auth.signInWithOAuth(
    "google"
  );
  if (error) {
    console.log(error);
  } else {
    console.log("User:", user);
    console.log("Session:", session);
  }
};

// export const Logout = async () => {
//   const { error } = await supabase.auth.signOut();
// };
