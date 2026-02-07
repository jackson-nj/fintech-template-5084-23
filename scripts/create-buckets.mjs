import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function ensureBucket(name) {
  try {
    const { data, error } = await supabase.storage.createBucket(name, { public: true });
    if (error) {
      // If bucket already exists, Supabase may return a 409 or message indicating it exists
      if (error.status === 409 || /already exists/i.test(error.message || "")) {
        console.log(`Bucket '${name}' already exists.`);
        return;
      }
      throw error;
    }
    console.log(`Created bucket '${name}'.`);
    return data;
  } catch (err) {
    console.error(`Failed to create bucket '${name}':`, err.message || err);
    throw err;
  }
}

(async () => {
  try {
    const buckets = ["services", "projects"];
    for (const b of buckets) {
      await ensureBucket(b);
    }
    console.log("Done.");
    process.exit(0);
  } catch (err) {
    console.error("Error creating buckets:", err);
    process.exit(1);
  }
})();
