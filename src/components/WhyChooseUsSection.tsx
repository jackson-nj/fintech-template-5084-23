import { Shield, Users, Clock, Wrench, Award, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import equipmentWorkImg from "@/assets/equipment-work.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Safety First",
    description: "All equipment meets strict safety standards with regular inspections.",
  },
  {
    icon: Users,
    title: "Expert Operators",
    description: "Licensed operators with years of experience on every project.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service to keep your project running smoothly.",
  },
  {
    icon: Wrench,
    title: "Well-Maintained Fleet",
    description: "Regular servicing ensures maximum uptime and reliability.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "ISO certified operations with comprehensive insurance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account managers for all your equipment needs.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Now First on Large Screens */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={equipmentWorkImg}
                  alt="Heavy equipment at work"
                  className="w-full h-[550px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>
              
              {/* Yellow Accent Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-2xl -z-10" />
              
              {/* Stats Card - Premium Design */}
              <div className="absolute -bottom-8 -left-8 bg-charcoal text-charcoal-foreground p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="font-display text-4xl font-bold text-primary">98%</div>
                    <div className="text-sm text-charcoal-foreground/70 mt-1">Client Satisfaction</div>
                  </div>
                  <div className="w-px h-16 bg-charcoal-foreground/20" />
                  <div className="text-center">
                    <div className="font-display text-4xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-charcoal-foreground/70 mt-1">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6 leading-tight">
              YOUR TRUSTED PARTNER IN <span className="text-primary">CONSTRUCTION</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              With nearly three decades of experience, we've become the go-to choice for 
              construction companies, contractors, and developers across Australia. We don't just 
              rent equipment – we deliver complete solutions.
            </p>

            {/* Benefits Grid - Premium Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-lg">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-bold px-10 py-7 text-lg rounded-xl shadow-lg shadow-primary/30"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
