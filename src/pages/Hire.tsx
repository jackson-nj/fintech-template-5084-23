 import { useState, useEffect } from "react";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { Phone, Loader2 } from "lucide-react";
 import { supabase } from "@/integrations/supabase/client";
 
 // Fallback images
 import backhoeloader from "@/assets/hire/backhoeloader.png";
 import bulldozer from "@/assets/hire/bulldozer.png";
 import craneTrucks from "@/assets/hire/CRANE TRUCKS.png";
 import excavator from "@/assets/hire/excavator.png";
 import forklifts from "@/assets/hire/forlifts.png";
 import frontloader from "@/assets/hire/frontloader.jpg";
 import grader from "@/assets/hire/grader.png";
 import lowbedtrailer from "@/assets/hire/lowbedtrailer.png";
 import rockbreaker from "@/assets/hire/rock breaker.png";
 import rollercompactor from "@/assets/hire/rollercompactor.png";
 import tippers from "@/assets/hire/tippers.png";
 import waterbowser from "@/assets/hire/waterbowser.png";
 
 interface HireItem {
   id: string;
   name: string;
   description?: string;
   image_url?: string;
 }
 
 const fallbackEquipment = [
   { id: "1", name: "Backhoe Loader", image_url: backhoeloader, description: "Versatile machine for digging, loading, and material handling." },
   { id: "2", name: "Bulldozer", image_url: bulldozer, description: "Powerful earthmoving equipment for grading and clearing land." },
   { id: "3", name: "Crane Trucks", image_url: craneTrucks, description: "Mobile cranes for lifting and transporting heavy loads." },
   { id: "4", name: "Excavator", image_url: excavator, description: "Heavy-duty digging machine for excavation and demolition." },
   { id: "5", name: "Forklifts", image_url: forklifts, description: "Industrial trucks for lifting and moving materials." },
   { id: "6", name: "Front Loader", image_url: frontloader, description: "Wheel loader for scooping and transporting bulk materials." },
   { id: "7", name: "Grader", image_url: grader, description: "Precision machine for leveling and grading surfaces." },
   { id: "8", name: "Lowbed Trailer", image_url: lowbedtrailer, description: "Heavy-haul trailer for transporting oversized equipment." },
   { id: "9", name: "Rock Breaker", image_url: rockbreaker, description: "Hydraulic attachment for breaking rocks and concrete." },
   { id: "10", name: "Roller Compactor", image_url: rollercompactor, description: "Compaction equipment for soil, gravel, and asphalt." },
   { id: "11", name: "Tippers", image_url: tippers, description: "Dump trucks for hauling and unloading bulk materials." },
   { id: "12", name: "Water Bowser", image_url: waterbowser, description: "Water tanker for dust suppression and site watering." },
 ];

const Hire = () => {
   const [equipment, setEquipment] = useState<HireItem[]>([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchEquipment = async () => {
       try {
         const { data, error } = await supabase
           .from("hire")
           .select("*")
           .order("created_at", { ascending: false });
 
         if (error) throw error;
         setEquipment(data && data.length > 0 ? data : fallbackEquipment);
       } catch (err) {
         console.error("Error fetching hire data:", err);
         setEquipment(fallbackEquipment);
       } finally {
         setLoading(false);
       }
     };
 
     fetchEquipment();
   }, []);
 
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end justify-center pb-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest">
            Equipment Hire
          </h1>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 lg:py-28 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Fleet
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              AVAILABLE <span className="text-primary">EQUIPMENT</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From excavators to water bowsers, we have the right equipment for every job. 
              All machines are regularly serviced and maintained to ensure optimal performance.
            </p>
          </div>

           {loading ? (
             <div className="flex items-center justify-center py-20">
               <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
           ) : (
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
               {equipment.map((item) => (
              <div
                   key={item.id}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-zinc-100 flex items-center justify-center">
                  <img
                       src={item.image_url || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                       {item.description || ""}
                  </p>
                  <a 
                    href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded text-sm font-medium gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
           )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Need Equipment for Your Project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your requirements. We offer competitive rates, 
            flexible hire terms, and delivery across the region.
          </p>
          <a
            href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-charcoal hover:text-white font-bold px-8 py-3 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer rounded-none text-lg"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hire;
