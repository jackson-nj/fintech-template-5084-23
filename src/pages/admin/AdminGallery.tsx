 import { useState } from "react";
 import { Plus, Trash2, X, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";
 import { useSupabaseData } from "@/hooks/useSupabaseData";

interface GalleryItem {
  id: string;
  alt: string;
  src: string;
   display_order?: number;
   created_at?: string;
}

const AdminGallery = () => {
   const { data: items, loading, create, remove } = useSupabaseData<GalleryItem>("gallery");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ alt: "", src: "" });
   const [saving, setSaving] = useState(false);

  const openAddModal = () => {
    setFormData({ alt: "", src: "" });
    setIsModalOpen(true);
  };

   const handleSave = async () => {
    if (!formData.src) return;
     setSaving(true);
     try {
       await create({ alt: formData.alt || "Project Image", src: formData.src });
       setIsModalOpen(false);
     } catch (err) {
       // Error handled by hook
     } finally {
       setSaving(false);
     }
  };

   const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
       await remove(id);
    }
  };

   if (loading) {
     return (
       <AdminLayout>
         <div className="flex items-center justify-center h-64">
           <Loader2 className="h-8 w-8 animate-spin text-primary" />
         </div>
       </AdminLayout>
     );
   }
 
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Gallery
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage project gallery media (images & videos)
            </p>
          </div>
          <Button onClick={openAddModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Media
          </Button>
        </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map((item) => {
            const isVideo = /\.(mp4|webm|ogg)$/i.test(item.src) || /youtube|vimeo/.test(item.src);
            return (
              <div
                key={item.id}
                className="aspect-square bg-muted rounded-lg overflow-hidden relative group"
              >
                {isVideo ? (
                  <video src={item.src} className="w-full h-full object-cover" muted playsInline />
                ) : (
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.alt}
                </div>
              </div>
            );
          })}
           {items.length === 0 && (
             <div className="col-span-full text-center py-12 text-muted-foreground">
               No media found. Click "Add Media" to upload one.
             </div>
           )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
             <div className="bg-card border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-display text-xl font-bold">Add Media</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Alt Text</label>
                  <input
                    type="text"
                    value={formData.alt}
                    onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter media description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Media (image or video)</label>
                   <FileUploader
                     folder="gallery"
                     onUpload={(url) => setFormData({ ...formData, src: url })}
                     onFileSelected={(_, preview) => setFormData({ ...formData, src: preview })}
                   />
                </div>
                {formData.src && (
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    {/\.(mp4|webm|ogg)$/i.test(formData.src) || /youtube|vimeo/.test(formData.src) ? (
                      <video src={formData.src} controls className="w-full h-full object-cover" />
                    ) : (
                      <img src={formData.src} alt="Preview" className="w-full h-full object-cover" />
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2 p-4 border-t border-border">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                 <Button onClick={handleSave} className="gap-2" disabled={saving}>
                   {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                   {saving ? "Saving..." : "Save"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;
