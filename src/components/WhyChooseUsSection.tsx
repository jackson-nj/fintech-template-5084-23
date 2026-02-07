import { Shield, Users, Clock, Wrench, Award, Headphones } from "lucide-react";
import whyChooseUsImg from "@/assets/equipment/welding tools.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Safety First",
    description: "All equipment meets strict safety standards with regular inspections and certifications.",
  },
  {
    icon: Users,
    title: "Expert Operators",
    description: "Our licensed operators bring years of experience to ensure efficient project execution.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service and support to keep your project running smoothly.",
  },
  {
    icon: Wrench,
    title: "Well-Maintained Fleet",
    description: "Regular servicing and maintenance ensures maximum uptime and reliability.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "ISO certified operations with comprehensive insurance coverage.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account managers to handle all your equipment needs.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row">
          {/* Content Side - white card on the left */}
          <div className="relative z-10 lg:w-[55%] w-full lg:mt-16">
            <div className="bg-white p-10 lg:p-12 lg:pr-16">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                YOUR TRUSTED PARTNER IN <span className="text-primary">CONSTRUCTION</span>
              </h2>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                With nearly three decades of experience, Ingenuity Specialized Engineering Works Ltd (ISEW) has become the go-to choice for 
                construction companies, contractors, and developers. We don't just 
                rent equipment — we go beyond engineering to deliver complete solutions.
              </p>

              {/* Benefits Grid - 2 columns */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group"
                  >
                    <h4 className="font-display font-bold text-foreground mb-2 text-base">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side - positioned higher, extends above text card */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[48%] w-full">
            <div className="relative">
              <img
                src={whyChooseUsImg}
                alt="Heavy equipment at work"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              {/* Thick border on right side and small bottom portion */}
              <div className="absolute top-0 -right-3 w-6 h-full bg-primary" />
              <div className="absolute -bottom-3 right-0 w-24 h-6 bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
