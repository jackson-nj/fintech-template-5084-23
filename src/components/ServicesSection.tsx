 import { useState, useEffect } from "react";
 import { Loader2 } from "lucide-react";
 import { supabase } from "@/integrations/supabase/client";
 import equipmentHireImg from "@/assets/services/equipment hire.jpg";
 import wetHireImg from "@/assets/services/wet hire.jpg";
 import dryHireImg from "@/assets/services/dry hire.jpg";
 import deliveryImg from "@/assets/services/delivery.jpg";
 
 interface ServiceItem {
   id: string;
   title: string;
   description?: string;
   image_url?: string;
 }
 
const fallbackServices: ServiceItem[] = [
  {
    id: "1",
    title: "Equipment Hire",
    description:
      "Access to a full range of heavy machinery for construction, earthworks, and site preparation. Available for short-term or project-based hire.",
    image_url: equipmentHireImg,
  },
  {
    id: "2",
    title: "Delivery",
    description:
      "Transport of machinery to and from your site using low-bed trailers. Timely, safe delivery so equipment arrives ready for work.",
    image_url: deliveryImg,
  },
  {
    id: "3",
    title: "Dry Hire",
    description:
      "Equipment supplied without an operator for clients who have their own certified team. Flexible hire periods and well-maintained machines.",
    image_url: dryHireImg,
  },
  {
    id: "4",
    title: "Wet Hire",
    description:
      "Equipment provided with experienced, certified operators. Ideal for projects that require skilled handling and efficient execution.",
    image_url: wetHireImg,
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
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
                 key={service.id}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Image */}
              <div className="relative h-48 lg:h-auto lg:w-1/2 overflow-hidden bg-gray-50 flex-shrink-0">
                <img
                     src={service.image_url || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center lg:w-1/2">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
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
