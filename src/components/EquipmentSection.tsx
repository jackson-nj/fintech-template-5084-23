import { ArrowRight } from "lucide-react";
import excavatorImg from "@/assets/excavator.jpg";
import loaderImg from "@/assets/loader.jpg";
import graderImg from "@/assets/grader.jpg";
import tipperImg from "@/assets/tipper.jpg";

const equipmentCategories = [
  {
    title: "Excavators",
    description: "Mini to large excavators for all earthmoving needs",
    image: excavatorImg,
    available: 12,
  },
  {
    title: "Wheel Loaders",
    description: "Powerful loaders for material handling",
    image: loaderImg,
    available: 8,
  },
  {
    title: "Motor Graders",
    description: "Precision grading for roads and surfaces",
    image: graderImg,
    available: 6,
  },
  {
    title: "Dump Trucks",
    description: "High-capacity tippers for bulk transport",
    image: tipperImg,
    available: 15,
  },
];

const EquipmentSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Fleet</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            EQUIPMENT <span className="text-primary">CATEGORIES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive range of well-maintained heavy machinery ready for hire. 
            All equipment comes with optional experienced operators.
          </p>
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentCategories.map((equipment, index) => (
            <div
              key={equipment.title}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                
                {/* Available Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {equipment.available} Available
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-bold text-surface-dark-foreground mb-1">
                  {equipment.title}
                </h3>
                <p className="text-surface-dark-foreground/70 text-sm mb-4">
                  {equipment.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-4 transition-all">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-charcoal text-charcoal-foreground px-8 py-4 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Equipment
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
