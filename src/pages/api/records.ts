import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from("records")
    .select("*")
    .order("year", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch records" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
