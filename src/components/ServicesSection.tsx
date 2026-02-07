import { useState, useEffect } from "react";
 import { Loader2 } from "lucide-react";
 import { supabase } from "@/integrations/supabase/client";
import equipmentHireImg from "@/assets/services/construction1.jpg";
import wetHireImg from "@/assets/services/mopani.jpg";
import dryHireImg from "@/assets/services/card3.jpg";
import deliveryImg from "@/assets/services/Barrick-Gold-Mine.png";
 
 interface ServiceItem {
   id: string;
   title: string;
   description?: string;
   image_url?: string;
 }
 
const fallbackServices: ServiceItem[] = [
  {
    id: "1",
    title: "Mechanical Engineering",
    description:
      "Welding, fabrication, boiler making, hydraulics, and industrial maintenance delivered by skilled technicians.",
    image_url: equipmentHireImg,
  },
  {
    id: "2",
    title: "Construction Works",
    description:
      "Civil works, installations, roads and drainage delivered with safety and quality at the forefront.",
    image_url: deliveryImg,
  },
  {
    id: "3",
    title: "Supplies & Logistics",
    description:
      "Procurement, transport, warehousing and logistics support to ensure your project runs smoothly.",
    image_url: dryHireImg,
  },
];

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchServices = async () => {
       try {
         const { data, error } = await supabase
           .from("services")
           .select("*")
           .order("created_at", { ascending: false });
 
         if (error) throw error;
         setServices(data && data.length > 0 ? data : fallbackServices);
       } catch (err) {
         console.error("Error fetching services:", err);
         setServices(fallbackServices);
       } finally {
         setLoading(false);
       }
     };
 
     fetchServices();
   }, []);

  // Animation handled globally in `main.tsx` via `initAutoAnimate()`
  // Cards below provide `data-animate` and `data-animate-delay` attributes.
 
  const getDescription = (service: ServiceItem) => {
    if (service.description && service.description.trim().length > 0) return service.description;
    const fallback = fallbackServices.find((f) => f.title.toLowerCase() === (service.title || "").toLowerCase());
    if (fallback && fallback.description) return fallback.description;
    return "Description coming soon.";
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            HIRE <span className="text-primary">SERVICES</span>
          </h2>
        </div>

         {loading ? (
           <div className="flex items-center justify-center py-20">
             <Loader2 className="h-8 w-8 animate-spin text-primary" />
           </div>
         ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-animate="fade-up"
              data-animate-delay={`${index * 120}ms`}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image on top */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                  src={service.image_url || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content below image */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-0">
                  {getDescription(service)}
                </p>
              </div>
            </div>
          ))}
        </div>
         )}
      </div>
    </section>
  );
};

export default ServicesSection;
