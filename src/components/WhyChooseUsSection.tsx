import { Shield, Users, Clock, Wrench, Award, Headphones } from "lucide-react";
import whyChooseUsImg from "@/assets/equipment/welding tools.jpg";

const benefits = [
  { icon: Shield, title: "Safety First", description: "All equipment meets strict safety standards with regular inspections." },
  { icon: Users, title: "Expert Operators", description: "Licensed operators with years of project experience." },
  { icon: Clock, title: "24/7 Availability", description: "Round-the-clock service to keep your project on track." },
  { icon: Wrench, title: "Well-Maintained Fleet", description: "Regular servicing ensures maximum uptime and reliability." },
  { icon: Award, title: "Industry Certified", description: "ISO certified operations with comprehensive coverage." },
  { icon: Headphones, title: "Dedicated Support", description: "Personal account managers for all your equipment needs." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-14 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row gap-8">
          {/* Content */}
          <div className="relative z-10 lg:w-[55%]">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
              YOUR TRUSTED PARTNER IN <span className="text-primary">ENGINEERING</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-lg">
              With years of experience, ISEW has become the go-to choice for construction companies, contractors, and developers across Zambia.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="group flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <b.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground mb-0.5">{b.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-[45%] w-full">
            <div className="relative">
              <img
                src={whyChooseUsImg}
                alt="Engineering work"
                className="w-full h-[320px] lg:h-[480px] object-cover"
              />
              <div className="absolute top-0 -right-2 w-4 h-full bg-primary" />
              <div className="absolute -bottom-2 right-0 w-20 h-4 bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
