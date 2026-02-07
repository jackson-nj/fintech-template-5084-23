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
  { id: "6", name: "About Image A", image_url: new URL("../assets/services/about us1.jpg", import.meta.url).href },
  { id: "7", name: "About Image B", image_url: new URL("../assets/services/about us2.jpg", import.meta.url).href },
  { id: "8", name: "About Image C", image_url: new URL("../assets/services/about us3.jpg", import.meta.url).href },
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
      } catch {
        setEquipment(fallbackEquipment);
      } finally {
        setLoading(false);
      }
    };
    fetchEquipment();
  }, []);

  return (
    <section className="py-14 lg:py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            PROJECT <span className="text-primary">GALLERY</span>
          </h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-7 w-7 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {equipment.map((item, index) => (
              <div
                key={item.id}
                data-animate="fade-up"
                data-animate-delay={`${index * 80}ms`}
                className="group relative aspect-[4/3] overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image_url || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-display text-xs font-bold text-white">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
