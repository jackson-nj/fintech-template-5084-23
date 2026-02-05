import { useState } from "react";
import backhoeImg from "../../assets/equipment/backhoeloader.jpg";
import rollerImg from "../../assets/equipment/rollercompactor.png";
import lowbedImg from "../../assets/equipment/lowbedtrailer.jpg";
import frontloaderImg from "../../assets/equipment/frontloader.jpg";
import excavatorImg from "../../assets/equipment/excavator.png";
import graderImg from "../../assets/equipment/grader.png";
import bulldozerImg from "../../assets/equipment/bulldozer.png";
import rockbreakerImg from "../../assets/equipment/rockbreaker.jpg";
import { Plus, Pencil, Trash2, X, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";

interface EquipmentItem {
  id: string;
  title: string;
  image: string;
}

const initialEquipment: EquipmentItem[] = [
  { id: "1", title: "Backhoe Loader", image: backhoeImg },
  { id: "2", title: "Roller Compactor", image: rollerImg },
  { id: "3", title: "Low Bed Trailer", image: lowbedImg },
  { id: "4", title: "Front Loader", image: frontloaderImg },
  { id: "5", title: "Excavator", image: excavatorImg },
  { id: "6", title: "Grader", image: graderImg },
  { id: "7", title: "Bulldozer", image: bulldozerImg },
  { id: "8", title: "Rock Breaker", image: rockbreakerImg },
];

const AdminEquipment = () => {
  const [equipment, setEquipment] = useState<EquipmentItem[]>(initialEquipment);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EquipmentItem | null>(null);
  const [formData, setFormData] = useState({ title: "", image: "" });

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({ title: "", image: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (item: EquipmentItem) => {
    setEditingItem(item);
    setFormData({ title: item.title, image: item.image });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!formData.title) return;

    if (editingItem) {
      setEquipment(
        equipment.map((item) =>
          item.id === editingItem.id
            ? { ...item, title: formData.title, image: formData.image }
            : item
        )
      );
    } else {
      setEquipment([
        ...equipment,
        {
          id: Date.now().toString(),
          title: formData.title,
          image: formData.image || "/placeholder.svg",
        },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setEquipment(equipment.filter((item) => item.id !== id));
    }
  };

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
                  src={item.image}
                  alt={item.title}
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
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-lg w-full max-w-md">
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
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter equipment title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Image</label>
                  <div className="flex gap-2">
                    <FileUploader
                      folder="equipment"
                      onUpload={(url) => setFormData({ ...formData, image: url })}
                      onFileSelected={(file, preview) => setFormData({ ...formData, image: preview })}
                    />
                  </div>
                </div>
                {formData.image && (
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img
                      src={formData.image}
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
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save
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
