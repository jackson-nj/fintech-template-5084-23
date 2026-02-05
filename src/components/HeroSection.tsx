import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/equipment/hero.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Dark Overlay with gradient - reduced */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/80 via-surface-dark/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-surface-dark/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-24">
        <div className="max-w-4xl animate-fade-up">
          {/* Badge removed per request */}

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            POWERFUL HEAVY<br />
            EQUIPMENT <span className="text-primary">HIRE</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
            From excavators to graders and dump trucks, we have the reliable machinery with experienced operators. 
            On-time delivery for projects of any scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent font-bold px-10 py-7 text-lg uppercase tracking-wider shadow-2xl hover:shadow-primary/30 transition-all group rounded"
            >
              Hire Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-surface-dark font-bold px-10 py-7 text-lg uppercase tracking-wider bg-transparent rounded"
            >
              <Phone className="mr-3 h-5 w-5" />
              Request a Call
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
