 import { useState, useEffect } from "react";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
import { X, Loader2, CheckCircle } from "lucide-react";
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

type GalleryItemType = "image" | "video";

interface SelectedItem {
  src: string;
  type: GalleryItemType;
  alt?: string;
  name?: string;
  description?: string;
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
  const [selectedImage, setSelectedImage] = useState<SelectedItem | null>(null);
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

          {/* Project Experience */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-primary font-semibold uppercase tracking-wider text-sm">Project Experience</h3>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3">Selected Projects & Experience</h2>
              <p className="text-muted-foreground mt-3">A selection of notable projects and collaborations demonstrating our field experience.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-border flex gap-4 items-start">
                <div className="text-primary mt-1"><CheckCircle className="h-6 w-6" /></div>
                <div>
                  <div className="font-semibold">Road works in Kafue and Lusaka</div>
                  <div className="text-sm text-muted-foreground">with Sanyati Civil Engineering & Constructions Ltd (South Africa)</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-border flex gap-4 items-start">
                <div className="text-primary mt-1"><CheckCircle className="h-6 w-6" /></div>
                <div>
                  <div className="font-semibold">Township road projects in Lusaka</div>
                  <div className="text-sm text-muted-foreground">with Lone Rock Constructions Company and Plinth Technical Works</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-border flex gap-4 items-start">
                <div className="text-primary mt-1"><CheckCircle className="h-6 w-6" /></div>
                <div>
                  <div className="font-semibold">Construction projects in Ndola</div>
                  <div className="text-sm text-muted-foreground">with WBHO (South Africa)</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-border flex gap-4 items-start">
                <div className="text-primary mt-1"><CheckCircle className="h-6 w-6" /></div>
                <div>
                  <div className="font-semibold">Fish ponds and dam construction</div>
                  <div className="text-sm text-muted-foreground">in Lusaka and Chipata</div>
                </div>
              </div>
            </div>
          </div>

           {loading ? (
             <div className="flex items-center justify-center py-20">
               <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
           ) : (
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
               {galleryImages.map((image) => {
                const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src) || /youtube|vimeo/.test(src);
                const type: GalleryItemType = isVideo(image.src) ? "video" : "image";
                return (
                  <div
                    key={image.id}
                    className="group cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage({ src: image.src, type, alt: image.alt, name: (image as any).name, description: (image as any).description })}
                  >
                    <div className="relative overflow-hidden aspect-square">
                      {type === "image" ? (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black">
                          <video
                            src={image.src}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
           )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close gallery preview"
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="bg-white rounded-lg overflow-hidden max-w-6xl w-full flex flex-col md:flex-row shadow-xl">
            <div className="md:w-2/3 w-full bg-black flex items-center justify-center">
              {selectedImage.type === "image" ? (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt || "Project image"}
                  className="w-full h-full object-cover max-h-[80vh]"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <video
                  src={selectedImage.src}
                  controls
                  className="w-full h-full object-cover max-h-[80vh] bg-black"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
            <div className="md:w-1/3 w-full p-6 bg-white">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{selectedImage.name || selectedImage.alt}</h3>
              {selectedImage.description && (
                <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              )}
              <div className="mt-4">
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">View Details</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
