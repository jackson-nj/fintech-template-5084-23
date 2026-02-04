import { useState } from "react";
import backhoeloaderImg from "../../assets/hire/backhoeloader.png";
import bulldozerImg from "../../assets/hire/bulldozer.png";
import craneImg from "../../assets/hire/CRANE TRUCKS.png";
import excavatorImg from "../../assets/hire/excavator.png";
import forkliftsImg from "../../assets/hire/forlifts.png";
import frontloaderImg from "../../assets/hire/frontloader.jpg";
import graderImg from "../../assets/hire/grader.png";
import lowbedImg from "../../assets/hire/lowbedtrailer.png";
import rockbreakerImg from "../../assets/hire/rock breaker.png";
import rollerImg from "../../assets/hire/rollercompactor.png";
import tippersImg from "../../assets/hire/tippers.png";
import waterbowserImg from "../../assets/hire/waterbowser.png";
import { Plus, Pencil, Trash2, X, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";

interface HireItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const initialHire: HireItem[] = [
  { id: "1", name: "Backhoe Loader", description: "Versatile machine for digging, loading, and material handling.", image: backhoeloaderImg },
  { id: "2", name: "Bulldozer", description: "Powerful earthmoving equipment for grading and clearing land.", image: bulldozerImg },
  { id: "3", name: "Crane Trucks", description: "Mobile cranes for lifting and transporting heavy loads.", image: craneImg },
  { id: "4", name: "Excavator", description: "Heavy-duty digging machine for excavation and demolition.", image: excavatorImg },
  { id: "5", name: "Forklifts", description: "Industrial trucks for lifting and moving materials.", image: forkliftsImg },
  { id: "6", name: "Front Loader", description: "Wheel loader for scooping and transporting bulk materials.", image: frontloaderImg },
  { id: "7", name: "Grader", description: "Precision machine for leveling and grading surfaces.", image: graderImg },
  { id: "8", name: "Lowbed Trailer", description: "Heavy-haul trailer for transporting oversized equipment.", image: lowbedImg },
  { id: "9", name: "Rock Breaker", description: "Hydraulic attachment for breaking rocks and concrete.", image: rockbreakerImg },
  { id: "10", name: "Roller Compactor", description: "Compaction equipment for soil, gravel, and asphalt.", image: rollerImg },
  { id: "11", name: "Tippers", description: "Dump trucks for hauling and unloading bulk materials.", image: tippersImg },
  { id: "12", name: "Water Bowser", description: "Water tanker for dust suppression and site watering.", image: waterbowserImg },
];

const AdminHire = () => {
  const [items, setItems] = useState<HireItem[]>(initialHire);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<HireItem | null>(null);
  const [formData, setFormData] = useState({ name: "", description: "", image: "" });

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({ name: "", description: "", image: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (item: HireItem) => {
    setEditingItem(item);
    setFormData({ name: item.name, description: item.description, image: item.image });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!formData.name) return;

    if (editingItem) {
      setItems(
        items.map((item) =>
          item.id === editingItem.id
            ? { ...item, ...formData }
            : item
        )
      );
    } else {
      setItems([
        ...items,
        {
          id: Date.now().toString(),
          ...formData,
          image: formData.image || "/placeholder.svg",
        },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Equipment for Hire
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage equipment available for hire
            </p>
          </div>
          <Button onClick={openAddModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Equipment
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-muted relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4"
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
                <h3 className="font-display font-bold text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-lg w-full max-w-md">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-display text-xl font-bold">
                  {editingItem ? "Edit Equipment" : "Add Equipment"}
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
                    placeholder="Enter equipment name"
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
                  <div className="flex gap-2">
                    <FileUploader
                      folder="hire"
                      onUpload={(url) => setFormData({ ...formData, image: url })}
                      onFileSelected={(file, preview) => setFormData({ ...formData, image: preview })}
                    />
                  </div>
                </div>
                {formData.image && (
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img src={formData.image} alt="Preview" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2 p-4 border-t border-border">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
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

export default AdminHire;
