import { RealtimeClient, SupabaseClient, createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();
class Supabase {

  private supabaseUrl: string | undefined = process.env.APP_SUPABASE_URL
  private supabaseKey: string | undefined = process.env.APP_SUPABASE_KEY
  private supabaseInstance: SupabaseClient | undefined


  supa(userJwt?: string) {

    if (userJwt) {
      this.supabaseInstance = createClient(
        this.supabaseUrl ? this.supabaseUrl : "",
        this.supabaseKey ? this.supabaseKey : "",
        {
          global: {
            headers: {
              Authorization_Header: `bearer ${userJwt}`
            }
          }
        }
      );
      return this.supabaseInstance;
    } else {
      this.supabaseInstance = createClient(
        this.supabaseUrl ? this.supabaseUrl : "",
        this.supabaseKey ? this.supabaseKey : ""
      );
      return this.supabaseInstance;
    }
  }
}

RealtimeClient

export default new Supabase();
