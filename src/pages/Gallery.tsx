 import { useState, useEffect } from "react";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { X, Loader2 } from "lucide-react";
 import { supabase } from "@/integrations/supabase/client";
 
 // Fallback gallery images
 import project1 from "@/assets/gallery/project1.jpg";
 import project2 from "@/assets/gallery/project2.jpg";
 import project3 from "@/assets/gallery/project3.jpg";
 import project4 from "@/assets/gallery/project4.jpg";
 import project5 from "@/assets/gallery/project5.jpg";
 import project6 from "@/assets/gallery/project6.jpg";
 import project7 from "@/assets/gallery/project7.jpg";
 import project8 from "@/assets/gallery/project8.jpg";
 import project10 from "@/assets/gallery/project10.jpg";
 import project11 from "@/assets/gallery/project11.jpg";
 import project12 from "@/assets/gallery/project12.jpg";
 import project13 from "@/assets/gallery/project13.jpg";
 import project14 from "@/assets/gallery/project14.jpg";
 import projectA from "@/assets/gallery/projectA.jpg";
 import projectC from "@/assets/gallery/projectC.jpg";
 import projectD from "@/assets/gallery/projectD.jpg";
 import projectE from "@/assets/gallery/projectE.jpg";
 import projectF from "@/assets/gallery/projectF.jpg";
 import projectG from "@/assets/gallery/projectG.jpg";
 import projectH from "@/assets/gallery/projectH.jpg";
 import projectI from "@/assets/gallery/projectI.jpg";
 
 interface GalleryImage {
   id: string;
   src: string;
   alt: string;
 }
 
 const fallbackGallery: GalleryImage[] = [
   { id: "1", src: project1, alt: "Project 1" },
   { id: "2", src: project2, alt: "Project 2" },
   { id: "3", src: project3, alt: "Project 3" },
   { id: "4", src: project4, alt: "Project 4" },
   { id: "5", src: project5, alt: "Project 5" },
   { id: "6", src: project6, alt: "Project 6" },
   { id: "7", src: project7, alt: "Project 7" },
   { id: "8", src: project8, alt: "Project 8" },
   { id: "9", src: project10, alt: "Project 10" },
   { id: "10", src: project11, alt: "Project 11" },
   { id: "11", src: project12, alt: "Project 12" },
   { id: "12", src: project13, alt: "Project 13" },
   { id: "13", src: project14, alt: "Project 14" },
   { id: "14", src: projectA, alt: "Project A" },
   { id: "15", src: projectC, alt: "Project C" },
   { id: "16", src: projectD, alt: "Project D" },
   { id: "17", src: projectE, alt: "Project E" },
   { id: "18", src: projectF, alt: "Project F" },
   { id: "19", src: projectG, alt: "Project G" },
   { id: "20", src: projectH, alt: "Project H" },
   { id: "21", src: projectI, alt: "Project I" },
 ];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchGallery = async () => {
       try {
         const { data, error } = await supabase
           .from("gallery")
           .select("*")
           .order("created_at", { ascending: false });
 
         if (error) throw error;
         setGalleryImages(data && data.length > 0 ? data : fallbackGallery);
       } catch (err) {
         console.error("Error fetching gallery:", err);
         setGalleryImages(fallbackGallery);
       } finally {
         setLoading(false);
       }
     };
 
     fetchGallery();
   }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end justify-center pb-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              PROJECT <span className="text-primary">GALLERY</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of completed projects showcasing our equipment and expertise in action.
            </p>
          </div>

           {loading ? (
             <div className="flex items-center justify-center py-20">
               <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
           ) : (
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
               {galleryImages.map((image) => (
              <div
                   key={image.id}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
           )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close gallery preview"
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
