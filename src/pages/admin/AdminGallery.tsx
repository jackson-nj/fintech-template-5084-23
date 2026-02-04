import { useState } from "react";
import { Plus, Trash2, X, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUploader from "@/components/admin/FileUploader";
import AdminLayout from "@/components/admin/AdminLayout";

interface GalleryItem {
  id: string;
  alt: string;
  src: string;
}

const initialGallery: GalleryItem[] = [
  { id: "1", alt: "Project 1", src: "/assets/gallery/project1.jpg" },
  { id: "2", alt: "Project 2", src: "/assets/gallery/project2.jpg" },
  { id: "3", alt: "Project 3", src: "/assets/gallery/project3.jpg" },
  { id: "4", alt: "Project 4", src: "/assets/gallery/project4.jpg" },
  { id: "5", alt: "Project 5", src: "/assets/gallery/project5.jpg" },
  { id: "6", alt: "Project 6", src: "/assets/gallery/project6.jpg" },
  { id: "7", alt: "Project 7", src: "/assets/gallery/project7.jpg" },
  { id: "8", alt: "Project 8", src: "/assets/gallery/project8.jpg" },
  { id: "9", alt: "Project 10", src: "/assets/gallery/project10.jpg" },
  { id: "10", alt: "Project 11", src: "/assets/gallery/project11.jpg" },
  { id: "11", alt: "Project 12", src: "/assets/gallery/project12.jpg" },
  { id: "12", alt: "Project 13", src: "/assets/gallery/project13.jpg" },
  { id: "13", alt: "Project 14", src: "/assets/gallery/project14.jpg" },
  { id: "14", alt: "Project A", src: "/assets/gallery/projectA.jpg" },
  { id: "15", alt: "Project C", src: "/assets/gallery/projectC.jpg" },
  { id: "16", alt: "Project D", src: "/assets/gallery/projectD.jpg" },
  { id: "17", alt: "Project E", src: "/assets/gallery/projectE.jpg" },
  { id: "18", alt: "Project F", src: "/assets/gallery/projectF.jpg" },
  { id: "19", alt: "Project G", src: "/assets/gallery/projectG.jpg" },
  { id: "20", alt: "Project H", src: "/assets/gallery/projectH.jpg" },
  { id: "21", alt: "Project I", src: "/assets/gallery/projectI.jpg" },
];

const AdminGallery = () => {
  const [items, setItems] = useState<GalleryItem[]>(initialGallery);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ alt: "", src: "" });

  const openAddModal = () => {
    setFormData({ alt: "", src: "" });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!formData.src) return;

    setItems([
      ...items,
      {
        id: Date.now().toString(),
        alt: formData.alt || "Project Image",
        src: formData.src,
      },
    ]);
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Gallery
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage project gallery images
            </p>
          </div>
          <Button onClick={openAddModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Image
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-muted rounded-lg overflow-hidden relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
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
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-lg w-full max-w-md">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-display text-xl font-bold">Add Image</h2>
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
                    placeholder="Enter image description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Image URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.src}
                      onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                      className="flex-1 border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter image URL"
                    />
                    <FileUploader folder="gallery" onUpload={(url) => setFormData({ ...formData, src: url })} />
                  </div>
                </div>
                {formData.src && (
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img src={formData.src} alt="Preview" className="w-full h-full object-cover" />
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

export default AdminGallery;
