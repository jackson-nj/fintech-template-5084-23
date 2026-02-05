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
   { id: "1", title: "Equipments for Hire", description: "Excavators, bulldozers, graders, loaders, rollers, dump trucks, cranes.", image_url: equipmentHireImg },
   { id: "2", title: "Wet Hire (Equipment + Operator)", description: "Certified, experienced operators supplied with machinery.", image_url: wetHireImg },
   { id: "3", title: "Equipment Delivery", description: "Reliable delivery and pickup services to your project site.", image_url: deliveryImg },
   { id: "4", title: "Dry Hire (Equipment Only)", description: "Well-maintained machines for experienced contractors.", image_url: dryHireImg },
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
              className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden bg-gray-50">
                <img
                     src={service.image_url || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-grow">
                     {service.description || ""}
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
