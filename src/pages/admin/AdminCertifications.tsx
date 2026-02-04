import { useState } from "react";
import cert1 from "../../assets/certifications/National Pension Scheme Authority.png";
import cert2 from "../../assets/certifications/pacra.png";
import cert3 from "../../assets/certifications/Workers' Compensation Fund Control Board.png";
import cert4 from "../../assets/certifications/zambia revenue authority.png";
import cert5 from "../../assets/certifications/Zambian Public Procurement Authority.png";
import { Plus, Pencil, Trash2, X, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";

interface CertificationItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const initialCertifications: CertificationItem[] = [
  { id: "1", name: "National Pension Scheme Authority (NAPSA)", description: "Registered and compliant with NAPSA, ensuring all our employees are covered under the national pension scheme.", image: cert1 },
  { id: "2", name: "Patents and Companies Registration Agency (PACRA)", description: "Officially registered company with PACRA, operating as a legitimate business entity in Zambia.", image: cert2 },
  { id: "3", name: "Workers' Compensation Fund Control Board (WCFCB)", description: "Certified with WCFCB, providing workers' compensation coverage for all our employees.", image: cert3 },
  { id: "4", name: "Zambia Revenue Authority (ZRA)", description: "Tax compliant and registered with ZRA, meeting all our fiscal obligations to the government.", image: cert4 },
  { id: "5", name: "Zambia Public Procurement Authority (ZPPA)", description: "Registered supplier with ZPPA, qualified to participate in public procurement and government contracts.", image: cert5 },
];

const AdminCertifications = () => {
  const [items, setItems] = useState<CertificationItem[]>(initialCertifications);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CertificationItem | null>(null);
  const [formData, setFormData] = useState({ name: "", description: "", image: "" });

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({ name: "", description: "", image: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (item: CertificationItem) => {
    setEditingItem(item);
    setFormData({ name: item.name, description: item.description, image: item.image });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!formData.name) return;

    if (editingItem) {
      setItems(
        items.map((item) =>
          item.id === editingItem.id ? { ...item, ...formData } : item
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
    if (confirm("Are you sure you want to delete this certification?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

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
                  src={item.image}
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
                <h3 className="font-display font-bold text-foreground text-sm">{item.name}</h3>
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-lg w-full max-w-md">
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
                      folder="certifications"
                      onUpload={(url) => setFormData({ ...formData, image: url })}
                      onFileSelected={(file, preview) => setFormData({ ...formData, image: preview })}
                    />
                  </div>
                </div>
                {formData.image && (
                  <div className="h-24 bg-muted rounded-md overflow-hidden flex items-center justify-center">
                    <img src={formData.image} alt="Preview" className="max-h-full max-w-full object-contain" />
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

export default AdminCertifications;
