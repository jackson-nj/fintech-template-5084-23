import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  folder: string; // e.g. 'equipment', 'gallery'
  onUpload: (url: string) => void;
  bucket?: string;
}

const FileUploader: React.FC<Props> = ({ folder, onUpload, bucket = "heavy-hire-hub" }) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => fileRef.current?.click();

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const filePath = `${folder}/${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const { data, error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(filePath);
      onUpload(publicData.publicUrl);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Upload failed", err);
      alert("Upload failed. Check console for details.");
    } finally {
      setLoading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input ref={fileRef} type="file" className="hidden" onChange={handleFile} accept="image/*" />
      <Button variant="outline" size="icon" onClick={handleClick} disabled={loading}>
        <Upload className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default FileUploader;
