import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Yellow Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-6 bg-primary/20 px-5 py-2.5 rounded-full">
            Start Your Project Today
          </span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-foreground mb-6 leading-tight">
            READY TO GET <span className="text-primary">STARTED?</span>
          </h2>
          <p className="text-charcoal-foreground/70 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Get in touch today for a free, no-obligation quote. Our team is standing by 
            to help you find the right equipment for your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-bold px-12 py-8 text-xl rounded-xl shadow-lg shadow-primary/30"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call: +1 (234) 567-890
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-charcoal-foreground text-charcoal-foreground hover:bg-charcoal-foreground hover:text-charcoal font-bold px-12 py-8 text-xl bg-transparent rounded-xl"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-12 py-8 text-xl bg-transparent rounded-xl"
            >
              Request Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
    </section>
  );
};

export default CTASection;
