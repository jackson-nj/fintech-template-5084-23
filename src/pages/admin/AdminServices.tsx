 import { useState } from "react";
 import { Pencil, Trash2, X, Save, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";
 import { useSupabaseData } from "@/hooks/useSupabaseData";

interface ServiceItem {
  id: string;
  title: string;
   description?: string;
   image_url?: string;
   display_order?: number;
   created_at?: string;
   updated_at?: string;
}

const AdminServices = () => {
   const { data: items, loading, create, update, remove } = useSupabaseData<ServiceItem>("services");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ServiceItem | null>(null);
   const [formData, setFormData] = useState({ title: "", description: "", image_url: "" });
   const [saving, setSaving] = useState(false);

  const openAddModal = () => {
    setEditingItem(null);
     setFormData({ title: "", description: "", image_url: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (item: ServiceItem) => {
    setEditingItem(item);
     setFormData({ title: item.title, description: item.description || "", image_url: item.image_url || "" });
    setIsModalOpen(true);
  };

   const handleSave = async () => {
    if (!formData.title) return;
     setSaving(true);
     try {
       if (editingItem) {
         await update(editingItem.id, { title: formData.title, description: formData.description, image_url: formData.image_url });
       } else {
         await create({ title: formData.title, description: formData.description, image_url: formData.image_url });
       }
       setIsModalOpen(false);
     } catch (err) {
       // Error handled by hook
     } finally {
       setSaving(false);
    }
  };

   const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
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
              Services
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage services displayed on the website
            </p>
          </div>
          <Button onClick={openAddModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Service
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="h-48 bg-muted relative">
                <img
                   src={item.image_url || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-contain"
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
                <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                 {item.description && (
                   <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                 )}
              </div>
            </div>
          ))}
           {items.length === 0 && (
             <div className="col-span-full text-center py-12 text-muted-foreground">
               No services found. Click "Add Service" to create one.
             </div>
           )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
             <div className="bg-card border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-display text-xl font-bold">
                  {editingItem ? "Edit Service" : "Add Service"}
                </h2>
                <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter service title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Image</label>
                   <FileUploader
                     folder="services"
                     onUpload={(url) => setFormData({ ...formData, image_url: url })}
                     onFileSelected={(_, preview) => setFormData({ ...formData, image_url: preview })}
                   />
                </div>
                 {formData.image_url && (
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                     <img src={formData.image_url} alt="Preview" className="w-full h-full object-contain" />
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

export default AdminServices;
