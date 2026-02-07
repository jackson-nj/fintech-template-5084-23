import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import equipmentHireImg from "@/assets/services/construction1.jpg";
import dryHireImg from "@/assets/services/card3.jpg";
import deliveryImg from "@/assets/services/Barrick-Gold-Mine.png";

interface ServiceItem {
  id: string;
  title: string;
  description?: string | null;
  image_url?: string | null;
}

const fallbackServices: ServiceItem[] = [
  {
    id: "1",
    title: "Mechanical Engineering",
    description: "Welding, fabrication, boiler making, hydraulics, and industrial maintenance delivered by skilled technicians.",
    image_url: equipmentHireImg,
  },
  {
    id: "2",
    title: "Construction Works",
    description: "Civil works, installations, roads and drainage delivered with safety and quality at the forefront.",
    image_url: deliveryImg,
  },
  {
    id: "3",
    title: "Supplies & Logistics",
    description: "Procurement, transport, warehousing and logistics support to ensure your project runs smoothly.",
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
      } catch {
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const getDescription = (service: ServiceItem) => {
    if (service.description?.trim()) return service.description;
    const fb = fallbackServices.find((f) => f.title.toLowerCase() === service.title?.toLowerCase());
    return fb?.description || "Description coming soon.";
  };

  return (
    <section id="services" className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-7 w-7 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-animate="fade-up"
                data-animate-delay={`${index * 100}ms`}
                className="bg-card border border-border overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-muted">
                  <img
                    src={service.image_url || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
