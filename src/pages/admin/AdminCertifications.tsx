 import { useState } from "react";
 import { Plus, Pencil, Trash2, X, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";
 import { useSupabaseData } from "@/hooks/useSupabaseData";

interface CertificationItem {
  id: string;
  name: string;
   image_url: string;
   display_order?: number;
   created_at?: string;
}

const AdminCertifications = () => {
   const { data: items, loading, create, update, remove } = useSupabaseData<CertificationItem>("certifications");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CertificationItem | null>(null);
   const [formData, setFormData] = useState({ name: "", image_url: "" });
   const [saving, setSaving] = useState(false);

  const openAddModal = () => {
    setEditingItem(null);
     setFormData({ name: "", image_url: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (item: CertificationItem) => {
    setEditingItem(item);
     setFormData({ name: item.name, image_url: item.image_url || "" });
    setIsModalOpen(true);
  };

   const handleSave = async () => {
    if (!formData.name) return;
     setSaving(true);
     try {
       if (editingItem) {
         await update(editingItem.id, { name: formData.name, image_url: formData.image_url });
       } else {
         await create({ name: formData.name, image_url: formData.image_url || "/placeholder.svg" });
       }
       setIsModalOpen(false);
     } catch (err) {
       // Error handled by hook
     } finally {
       setSaving(false);
    }
  };

   const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this certification?")) {
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
              Certifications
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage company certifications and credentials
            </p>
          </div>
          <Button onClick={openAddModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Certification
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="h-32 bg-muted relative flex items-center justify-center p-4">
                <img
                   src={item.image_url || "/placeholder.svg"}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <Button variant="secondary" size="icon" onClick={() => openEditModal(item)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                 <h3 className="font-display font-bold text-foreground text-sm line-clamp-2">{item.name}</h3>
              </div>
            </div>
          ))}
           {items.length === 0 && (
             <div className="col-span-full text-center py-12 text-muted-foreground">
               No certifications found. Click "Add Certification" to create one.
             </div>
           )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
             <div className="bg-card border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-display text-xl font-bold">
                  {editingItem ? "Edit Certification" : "Add Certification"}
                </h2>
                <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter certification name"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium mb-2">Upload Image</label>
                   <FileUploader
                     folder="certifications"
                     onUpload={(url) => setFormData({ ...formData, image_url: url })}
                     onFileSelected={(_, preview) => setFormData({ ...formData, image_url: preview })}
                  />
                </div>
                 {formData.image_url && (
                  <div className="h-24 bg-muted rounded-md overflow-hidden flex items-center justify-center">
                     <img src={formData.image_url} alt="Preview" className="max-h-full max-w-full object-contain" />
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

export default AdminCertifications;
