import { Phone, ArrowRight, Search, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-excavator-closeup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full px-5 py-2.5 mb-8">
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Australia's Premier Equipment Hire</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-surface-dark-foreground mb-6 leading-[1.1] tracking-tight">
            HEAVY EQUIPMENT
            <br />
            <span className="text-primary">HIRE SOLUTIONS</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-surface-dark-foreground/80 mb-10 max-w-2xl font-light leading-relaxed">
            Premium construction machinery with experienced operators. 
            Trusted by Australia's leading contractors since 1995.
          </p>

          {/* Search Box - Marketplace Style */}
          <div className="bg-surface-dark-foreground/10 backdrop-blur-md border border-surface-dark-foreground/20 rounded-2xl p-3 mb-10 max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Equipment Type */}
              <div className="bg-surface-dark-foreground rounded-xl p-4 cursor-pointer hover:bg-surface-dark-foreground/90 transition-colors">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Equipment Type</label>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Excavators</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Category */}
              <div className="bg-surface-dark-foreground rounded-xl p-4 cursor-pointer hover:bg-surface-dark-foreground/90 transition-colors">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Category</label>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">All Categories</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Hire Date */}
              <div className="bg-surface-dark-foreground rounded-xl p-4 cursor-pointer hover:bg-surface-dark-foreground/90 transition-colors">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Hire Date</label>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Select Date</span>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Search Button */}
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent font-bold h-full rounded-xl text-lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-bold px-10 py-7 text-lg rounded-xl shadow-lg shadow-primary/30"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-surface-dark-foreground text-surface-dark-foreground hover:bg-surface-dark-foreground hover:text-surface-dark font-bold px-10 py-7 text-lg bg-transparent rounded-xl"
            >
              Hire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-surface-dark-foreground/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="font-display text-lg font-bold text-primary">500+</span>
              </div>
              <div>
                <div className="text-surface-dark-foreground font-semibold">Projects</div>
                <div className="text-surface-dark-foreground/60 text-sm">Completed</div>
              </div>
            </div>
            <div className="w-px h-10 bg-surface-dark-foreground/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="font-display text-lg font-bold text-primary">28+</span>
              </div>
              <div>
                <div className="text-surface-dark-foreground font-semibold">Years</div>
                <div className="text-surface-dark-foreground/60 text-sm">Experience</div>
              </div>
            </div>
            <div className="w-px h-10 bg-surface-dark-foreground/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="font-display text-lg font-bold text-primary">50+</span>
              </div>
              <div>
                <div className="text-surface-dark-foreground font-semibold">Machines</div>
                <div className="text-surface-dark-foreground/60 text-sm">Available</div>
              </div>
            </div>
            <div className="w-px h-10 bg-surface-dark-foreground/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="font-display text-lg font-bold text-primary">24/7</span>
              </div>
              <div>
                <div className="text-surface-dark-foreground font-semibold">Support</div>
                <div className="text-surface-dark-foreground/60 text-sm">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
    </section>
  );
};

export default HeroSection;
