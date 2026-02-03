import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              Get in touch today for a free quote. Our team is standing by to help you find the right equipment for your needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-charcoal text-charcoal-foreground hover:bg-surface-dark font-semibold px-8 py-6 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +1 (234) 567-890
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg bg-transparent"
            >
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
