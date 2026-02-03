import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import excavatorImg from "@/assets/excavator.jpg";
import loaderImg from "@/assets/loader.jpg";
import graderImg from "@/assets/grader.jpg";
import tipperImg from "@/assets/tipper.jpg";

const equipmentCategories = [
  {
    title: "Excavators",
    description: "Mini to large excavators for all earthmoving needs. Perfect for digging, trenching, and demolition work.",
    image: excavatorImg,
    available: 12,
    features: ["8-50 Ton Range", "GPS Equipped", "Operators Included"],
    price: "From $450/day",
  },
  {
    title: "Wheel Loaders",
    description: "Powerful loaders for efficient material handling and site preparation across all project scales.",
    image: loaderImg,
    available: 8,
    features: ["Quick Attach", "High Capacity", "Fuel Efficient"],
    price: "From $380/day",
  },
  {
    title: "Motor Graders",
    description: "Precision grading for roads, surfaces, and large-scale earthworks with expert operators.",
    image: graderImg,
    available: 6,
    features: ["Laser Guided", "12ft Blade", "All Terrain"],
    price: "From $520/day",
  },
  {
    title: "Dump Trucks",
    description: "High-capacity articulated and rigid tippers for bulk material transport and hauling.",
    image: tipperImg,
    available: 15,
    features: ["30-60 Ton", "Road Registered", "Fast Turnaround"],
    price: "From $320/day",
  },
];

const EquipmentSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">Our Premium Fleet</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            EQUIPMENT <span className="text-primary">CATEGORIES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our extensive range of well-maintained heavy machinery ready for immediate hire. 
            All equipment comes with optional experienced operators.
          </p>
        </div>

        {/* Large Premium Equipment Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {equipmentCategories.map((equipment, index) => (
            <div
              key={equipment.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Side */}
                <div className="relative md:w-1/2 h-72 md:h-auto overflow-hidden">
                  <img
                    src={equipment.image}
                    alt={equipment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-transparent to-transparent" />
                  
                  {/* Available Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    {equipment.available} Units Available
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {equipment.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {equipment.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {equipment.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <span className="text-muted-foreground text-sm">Starting</span>
                      <div className="font-display text-2xl font-bold text-primary">{equipment.price}</div>
                    </div>
                    <Button className="bg-charcoal text-charcoal-foreground hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-charcoal text-charcoal-foreground hover:bg-primary hover:text-primary-foreground font-bold px-12 py-7 text-lg rounded-xl shadow-lg"
          >
            View All Equipment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
