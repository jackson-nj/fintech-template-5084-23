import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const bucket = "heavy-hire-hub";
const folders = ["equipment", "services", "hire", "gallery", "certifications"];

async function ensureBucket() {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const exists = buckets?.some((b) => b.name === bucket);
    if (!exists) {
      console.log(`Creating bucket: ${bucket}`);
      await supabase.storage.createBucket(bucket, { public: true });
    } else {
      console.log(`Bucket ${bucket} already exists`);
    }
  } catch (err) {
    console.error("Failed to ensure bucket:", err);
    process.exit(1);
  }
}

async function uploadFolder(folderName) {
  const localDir = path.resolve(process.cwd(), "src/assets", folderName);
  if (!fs.existsSync(localDir)) {
    console.warn(`Folder not found, skipping: ${localDir}`);
    return [];
  }

  const files = fs.readdirSync(localDir).filter((f) => !f.startsWith("."));
  const results = [];

  for (const fileName of files) {
    const filePath = path.join(localDir, fileName);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    const remotePath = `${folderName}/${Date.now()}-${fileName.replace(/\s+/g, "_")}`;
    console.log(`Uploading ${filePath} -> ${bucket}/${remotePath}`);
    const file = fs.createReadStream(filePath);
    const { data, error } = await supabase.storage.from(bucket).upload(remotePath, file, { upsert: true });
    if (error) {
      console.error("Upload error:", error);
      continue;
    }
    const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(remotePath);
    results.push({ local: filePath, remote: remotePath, publicUrl: publicData.publicUrl });
  }

  return results;
}

async function main() {
  await ensureBucket();
  const seed = {};
  for (const f of folders) {
    const res = await uploadFolder(f);
    seed[f] = res;
  }

  const outPath = path.resolve(process.cwd(), "supabase-seed-output.json");
  fs.writeFileSync(outPath, JSON.stringify(seed, null, 2));
  console.log(`Wrote seed output to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
