import { Phone, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">Trusted Since 1995</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6 leading-tight">
            RELIABLE HEAVY EQUIPMENT <span className="text-primary">HIRE</span> FOR YOUR PROJECT
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            From excavators to graders, we provide top-quality heavy machinery with experienced operators. 
            On-time delivery, competitive rates, and unmatched reliability for construction projects of any scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8 py-6 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-surface-dark-foreground text-surface-dark-foreground hover:bg-surface-dark-foreground hover:text-surface-dark font-semibold px-8 py-6 text-lg bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg bg-transparent"
            >
              <FileText className="mr-2 h-5 w-5" />
              Request a Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-surface-dark-foreground/20">
            <div>
              <div className="font-display text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary">28+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground text-sm">Machines Available</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Yellow Stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
    </section>
  );
};

export default HeroSection;
