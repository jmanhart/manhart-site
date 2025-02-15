import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

async function testSupabaseConnection() {
  console.log("Testing Supabase connection...");

  const { data, error } = await supabase.from("records").select("*").limit(1);

  if (error) {
    console.error("❌ Supabase connection failed:", error);
  } else {
    console.log("✅ Supabase connection successful! Sample data:", data);
  }
}

// Run the test
testSupabaseConnection();
