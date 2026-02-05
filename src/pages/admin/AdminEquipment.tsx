 import { useState } from "react";
 import { Plus, Pencil, Trash2, X, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";
 import { useSupabaseData } from "@/hooks/useSupabaseData";

interface EquipmentItem {
  id: string;
   name: string;
   description?: string;
   image_url?: string;
   display_order?: number;
   created_at?: string;
   updated_at?: string;
}

const AdminEquipment = () => {
   const { data: equipment, loading, create, update, remove } = useSupabaseData<EquipmentItem>("equipment");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EquipmentItem | null>(null);
   const [formData, setFormData] = useState({ name: "", description: "", image_url: "" });
   const [saving, setSaving] = useState(false);

  const openAddModal = () => {
    setEditingItem(null);
     setFormData({ name: "", description: "", image_url: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (item: EquipmentItem) => {
    setEditingItem(item);
     setFormData({ name: item.name, description: item.description || "", image_url: item.image_url || "" });
    setIsModalOpen(true);
  };

   const handleSave = async () => {
     if (!formData.name) return;
     setSaving(true);
     try {
       if (editingItem) {
         await update(editingItem.id, { name: formData.name, description: formData.description, image_url: formData.image_url });
       } else {
         await create({ name: formData.name, description: formData.description, image_url: formData.image_url });
       }
       setIsModalOpen(false);
     } catch (err) {
       // Error handled by hook
     } finally {
       setSaving(false);
     }
   };

   const handleDelete = async (id: string) => {
     if (confirm("Are you sure you want to delete this item?")) {
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
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Equipment
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage equipment categories on the home page
            </p>
          </div>
          <Button onClick={openAddModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Equipment
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-muted relative">
                <img
                   src={item.image_url || "/placeholder.svg"}
                   alt={item.name}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => openEditModal(item)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-foreground">
                   {item.name}
                </h3>
                 {item.description && (
                   <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
                 )}
              </div>
            </div>
          ))}
           {equipment.length === 0 && (
             <div className="col-span-full text-center py-12 text-muted-foreground">
               No equipment found. Click "Add Equipment" to create one.
             </div>
           )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
             <div className="bg-card border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-display text-xl font-bold">
                  {editingItem ? "Edit Equipment" : "Add Equipment"}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                >
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
                     placeholder="Enter equipment name"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium mb-2">Description</label>
                   <textarea
                     value={formData.description}
                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                     className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                     placeholder="Enter description (optional)"
                   />
                 </div>
                 <div>
                  <label className="block text-sm font-medium mb-2">Upload Image</label>
                   <FileUploader
                     folder="equipment"
                     onUpload={(url) => setFormData({ ...formData, image_url: url })}
                     onFileSelected={(_, preview) => setFormData({ ...formData, image_url: preview })}
                   />
                </div>
                 {formData.image_url && (
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img
                       src={formData.image_url}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2 p-4 border-t border-border">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
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

export default AdminEquipment;
