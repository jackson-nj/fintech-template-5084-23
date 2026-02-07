 import { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import { Loader2 } from "lucide-react";
 import { supabase } from "@/integrations/supabase/client";
 
interface EquipmentItem {
  id: string;
  name: string;
  image_url?: string | null;
}

const fallbackEquipment = [
  { id: "1", name: "Barrick Mine", image_url: new URL("../assets/services/Barrick-Gold-Mine.png", import.meta.url).href },
  { id: "2", name: "Kansashi Site", image_url: new URL("../assets/services/kansashi.jpg", import.meta.url).href },
  { id: "3", name: "Konkola Plant", image_url: new URL("../assets/services/konkola.avif", import.meta.url).href },
  { id: "4", name: "Mopani Works", image_url: new URL("../assets/services/mopani.jpg", import.meta.url).href },
  { id: "5", name: "Neelkanth Lime", image_url: new URL("../assets/services/Neelkanth-lime-1.png", import.meta.url).href },
  { id: "6", name: "Mining Ops", image_url: new URL("../assets/services/84f18f05b6fa96f541dbec904c673f05.jpg", import.meta.url).href },
  { id: "7", name: "About Image A", image_url: new URL("../assets/services/about us1.jpg", import.meta.url).href },
  { id: "8", name: "About Image B", image_url: new URL("../assets/services/about us2.jpg", import.meta.url).href },
];
 
 const EquipmentSection = () => {
   const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchEquipment = async () => {
       try {
         const { data, error } = await supabase
           .from("equipment")
           .select("*")
           .order("created_at", { ascending: false })
           .limit(8);
 
         if (error) throw error;
         setEquipment(data && data.length > 0 ? data : fallbackEquipment);
       } catch (err) {
         console.error("Error fetching equipment:", err);
         setEquipment(fallbackEquipment);
       } finally {
         setLoading(false);
       }
     };
 
     fetchEquipment();
   }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-2">
            SERVICES <span className="text-primary">OFFERED</span>
          </h2>
          <div className="text-sm text-muted-foreground mb-4">Target: Mining Operations</div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Browse our core service offerings focused on industrial mining, construction and mechanical projects.
          </p>
        </div>

         {loading ? (
           <div className="flex items-center justify-center py-20">
             <Loader2 className="h-8 w-8 animate-spin text-primary" />
           </div>
         ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <a
                key={item.id}
                href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20Please%20advise%20on%20availability%20and%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-2 border-gray-100 hover:border-primary overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg shadow-sm"
              >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={item.image_url || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Title / Hire Button */}
              <div className="p-4 text-center bg-gray-50/50 border-t border-gray-100 group-hover:bg-primary transition-colors duration-300 overflow-hidden">
                <div className="relative h-6">
                  <span className="font-display text-base font-bold text-foreground absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full">
                       {item.name}
                  </span>
                  <span className="font-display text-sm font-bold text-black absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                    Hire Now
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
         )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-primary text-black font-bold px-10 py-4 text-sm uppercase tracking-wider hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
