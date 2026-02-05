 import React, { useRef, useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Upload, Loader2 } from "lucide-react";
 import { supabase } from "@/integrations/supabase/client";
 
 interface Props {
   folder: string;
   onUpload: (url: string) => void;
   onFileSelected?: (file: File, previewUrl: string) => void;
   bucket?: string;
 }
 
 const FileUploader: React.FC<Props> = ({ folder, onUpload, onFileSelected, bucket = "heavy-hire-hub" }) => {
   const fileRef = useRef<HTMLInputElement | null>(null);
   const [loading, setLoading] = useState(false);
 
   const handleClick = () => fileRef.current?.click();
 
   const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
     if (!file) return;
     
     // Show instant preview
     const previewUrl = URL.createObjectURL(file);
     if (onFileSelected) {
       onFileSelected(file, previewUrl);
     }
     
     setLoading(true);
     try {
       const filePath = `${folder}/${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
       const { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file, { upsert: true });
       if (uploadError) throw uploadError;
       const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(filePath);
       onUpload(publicData.publicUrl);
     } catch (err) {
       console.error("Upload failed", err);
       alert("Upload failed. Check console for details.");
     } finally {
       setLoading(false);
       if (fileRef.current) fileRef.current.value = "";
     }
   };
 
   return (
     <div className="flex items-center gap-2">
       <input ref={fileRef} type="file" className="hidden" onChange={handleFile} accept="image/*,video/*" />
       <Button variant="outline" onClick={handleClick} disabled={loading} className="gap-2">
         {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
         {loading ? "Uploading..." : "Choose File"}
       </Button>
     </div>
   );
 };
 
 export default FileUploader;
