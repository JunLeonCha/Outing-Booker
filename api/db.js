import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.APP_SUPABASE_URL,
  process.env.APP_SUPABASE_KEY
);

export default supabase;
