import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Building2, Truck, Home, Factory } from "lucide-react";
import { useEffect, useRef } from "react";

const aboutUsImage = new URL("../assets/services/ABOUT US.jpg", import.meta.url).href;
const aboutUs1 = new URL("../assets/services/about us1.jpg", import.meta.url).href;

const industries = [
  { icon: Factory, title: "Mining & Processing", description: "PPE supply, hardware, maintenance support, and industrial equipment" },
  { icon: Building2, title: "Engineering & Fabrication", description: "Mechanical works, welding, fitting, and equipment repair" },
  { icon: Building2, title: "Construction & Civil Works", description: "Partitions, ceilings, drainage, roads, and site works" },
  { icon: Factory, title: "Industrial Facilities", description: "Boilers, conveyors, crushers, mills, and plant maintenance" },
  { icon: Home, title: "Procurement & Supply", description: "Industrial hardware, tools, and site materials sourcing" },
  { icon: Truck, title: "Logistics & Support", description: "Transport, warehousing, and delivery of industrial supplies" },
];

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(".fade-up, .img-reveal-container");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* About Section */}
      <section className="py-12 lg:py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col-reverse lg:flex-row gap-8">
            <div className="relative z-10 lg:w-[55%]">
              <span className="fade-up text-primary font-bold uppercase tracking-[0.2em] text-xs">Who We Are</span>
              <h1 className="fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-3 leading-tight">About Us</h1>
              <h2 className="fade-up font-display text-lg md:text-xl font-semibold text-foreground mb-3">
                Ingenuity Specialized Engineering Works Ltd
              </h2>
              <p className="fade-up text-muted-foreground mb-4 text-sm leading-relaxed">
                ISEW delivers engineering, construction and industrial supply solutions across Zambia. We specialise in mechanical engineering, fabrication, maintenance, civil construction and procurement — prioritising safety, quality and sustainability.
              </p>

              <h3 className="mt-4 font-display text-sm font-bold">Our Values</h3>
              <p className="text-muted-foreground text-sm mb-3">Innovation • Quality • Safety • Sustainability • Integrity • Collaboration • Excellence</p>

              <h3 className="mt-2 font-display text-sm font-bold">Our Mission</h3>
              <p className="text-muted-foreground text-sm mb-4">Deliver high-quality, safe and sustainable engineering solutions that support industry and infrastructure growth.</p>

              <div className="fade-up grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Skilled technicians & certified operators",
                  "Mechanical fabrication & maintenance",
                  "Civil construction & installation",
                  "PPE, hardware supply & procurement",
                  "Logistics, transport & warehousing",
                  "Safety-first operations & compliance",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-xs font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[45%] w-full">
              <div className="img-reveal-container relative h-[280px] sm:h-[340px] lg:h-[460px]">
                <img src={aboutUsImage} alt="About Us" className="img-color w-full h-full object-cover" />
                <div className="absolute top-0 -right-2 w-4 h-full bg-primary" />
                <div className="absolute -bottom-2 right-0 w-20 h-4 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-14 lg:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col-reverse lg:flex-row-reverse gap-8">
            <div className="relative z-10 lg:w-[55%]">
              <span className="fade-up text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Reach</span>
              <h2 className="fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
                INDUSTRIES <span className="text-primary">WE SUPPORT</span>
              </h2>
              <p className="fade-up text-muted-foreground mb-6 text-sm leading-relaxed">
                Our services support operations across key sectors, delivering reliable solutions for demanding environments.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {industries.map((ind, i) => {
                  const Icon = ind.icon;
                  return (
                    <div key={i} className="fade-up flex items-start gap-3 group">
                      <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground text-sm mb-0.5">{ind.title}</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">{ind.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-[45%] w-full">
              <div className="img-reveal-container relative h-[320px] lg:h-[480px]">
                <img src={aboutUs1} alt="Industries" className="img-color w-full h-full object-cover" />
                <div className="absolute top-0 -left-2 w-4 h-full bg-primary" />
                <div className="absolute -bottom-2 left-0 w-20 h-4 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
