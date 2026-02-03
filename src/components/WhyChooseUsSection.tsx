import { Shield, Users, Clock, Wrench, Award, HeadphonesIcon } from "lucide-react";
import equipmentWorkImg from "@/assets/equipment-work.jpg";

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
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account managers to handle all your equipment needs.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              YOUR TRUSTED PARTNER IN <span className="text-primary">CONSTRUCTION</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              With nearly three decades of experience, HeavyHire has become the go-to choice for 
              construction companies, contractors, and developers across Australia. We don't just 
              rent equipment – we deliver solutions.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={equipmentWorkImg}
                alt="Heavy equipment at work"
                className="w-full h-[600px] object-cover"
              />
              {/* Yellow Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg -z-10" />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-charcoal text-charcoal-foreground p-6 rounded-lg shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-charcoal" />
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
