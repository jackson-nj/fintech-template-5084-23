import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-14 lg:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.1)_20px,rgba(0,0,0,0.1)_40px)]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-primary-foreground/80 text-base leading-relaxed">
              Get in touch today for a free quote. Our team is ready to help.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/260975078766?text=Hello%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-6 py-3 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
            <a
              href="mailto:ingenuity.engltd@gmail.com?subject=Request%20a%20Quote"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold px-6 py-3 text-sm uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
