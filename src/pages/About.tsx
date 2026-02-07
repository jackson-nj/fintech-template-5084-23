import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Building2, Truck, Home, Factory, Trees, Landmark, Shield, Award, Users } from "lucide-react";
import { useEffect, useRef } from "react";
const aboutUs1 = new URL("../assets/services/about us1.jpg", import.meta.url).href;
const aboutUs2 = new URL("../assets/services/about us2.jpg", import.meta.url).href;
const aboutUs3 = new URL("../assets/services/about us3.jpg", import.meta.url).href;
const aboutUsImage = new URL("../assets/services/ABOUT US.jpg", import.meta.url).href;

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "130+", label: "Projects Completed" },
  { value: "50+", label: "Equipment Fleet" },
  { value: "100%", label: "Client Satisfaction" },
];

const aboutFeatures = [
  "Modern fleet of well-maintained equipment",
  "Experienced and certified operators",
  "Flexible rental terms to suit your needs",
  "24/7 customer support and assistance",
  "Competitive pricing with no hidden costs",
  "On-time delivery and pickup services",
];

const whyBestFeatures = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every piece of equipment undergoes rigorous inspection before deployment.",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Recognized as a top equipment hire company in the region.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team brings decades of combined experience to every project.",
  },
];

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
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up, .img-reveal-container");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero removed - About heading moved into content */}

      {/* About Us Section - two cards: text (left) + image (right) */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col-reverse lg:flex-row">
            {/* Content Side - on the left */}
            <div className="relative z-10 lg:w-[55%] w-full lg:mr-auto lg:mt-10">
              <div className="bg-white p-6 lg:p-12 lg:pr-16">
                <span className="fade-up text-primary font-bold uppercase tracking-[0.2em] text-sm">Who We Are</span>
                <h1 className="fade-up fade-up-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 leading-tight">About Us</h1>
                <h2 className="fade-up fade-up-delay-2 font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Ingenuity Specialized Engineering Works Ltd
                </h2>
                <p className="fade-up fade-up-delay-3 text-muted-foreground mb-6 text-base leading-relaxed">
                  Ingenuity Specialized Engineering Works Ltd (ISEW) delivers engineering, construction and industrial supply solutions across Zambia. We specialise in mechanical engineering, fabrication, maintenance, civil construction and procurement — prioritising safety, quality and sustainability.
                </p>

                <h3 className="mt-6 font-display text-lg font-bold">Our Values</h3>
                <p className="text-muted-foreground mb-4">Innovation • Quality • Safety • Sustainability • Integrity • Collaboration • Excellence</p>

                <h3 className="mt-4 font-display text-lg font-bold">Our Mission</h3>
                <p className="text-muted-foreground mb-6">Deliver high-quality, safe and sustainable engineering solutions that support industry and infrastructure growth.</p>

                {/* Features List (short & relevant) */}
                <div className="fade-up fade-up-delay-4 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Skilled technicians & certified operators",
                    "Mechanical fabrication & industrial maintenance",
                    "Civil construction & installation services",
                    "PPE, hardware supply & procurement",
                    "Logistics, transport & warehousing",
                    "Safety-first operations and compliance",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Side - on the right for large screens */}
            <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[45%] w-full mt-8 lg:mt-0">
              <div className="img-reveal-container relative h-[300px] sm:h-[380px] lg:h-[560px]">
                <img
                  src={aboutUsImage}
                  alt="About Us"
                  className="img-color w-full h-full object-cover rounded-md"
                />
                {/* Paint drops overlay */}
                <div className="paint-overlay">
                  <div className="paint-drop paint-drop1" />
                  <div className="paint-drop paint-drop2" />
                  <div className="paint-drop paint-drop3" />
                  <div className="paint-drop paint-drop4" />
                </div>
                {/* Thick border on right side and small bottom portion */}
                <div className="absolute top-0 -right-3 w-6 h-full bg-primary" />
                <div className="absolute -bottom-3 right-0 w-24 h-6 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ServicesSection removed from this page to avoid duplication (appears on main page) */}

      {/* Stats Section removed per request (years of experience / client section) */}

      {/* 'We Are The Best' section removed by request */}

      {/* Industries We Serve Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col-reverse lg:flex-row">
            {/* Image Side - on the left */}
            <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[45%] w-full mt-10 lg:mt-0">
              <div className="img-reveal-container relative h-[400px] lg:h-[650px]">
                <img
                  src={aboutUs1}
                  alt="Industries We Serve"
                  className="img-color w-full h-full object-cover"
                />
                {/* Paint drops overlay */}
                <div className="paint-overlay">
                  <div className="paint-drop paint-drop9" />
                  <div className="paint-drop paint-drop10" />
                  <div className="paint-drop paint-drop11" />
                  <div className="paint-drop paint-drop12" />
                  <div className="paint-drop paint-drop13" />
                  <div className="paint-drop paint-drop14" />
                  <div className="paint-drop paint-drop15" />
                  <div className="paint-drop paint-drop16" />
                </div>
                {/* Thick border on left side and small bottom portion */}
                <div className="absolute top-0 -left-3 w-6 h-full bg-primary" />
                <div className="absolute -bottom-3 left-0 w-24 h-6 bg-primary" />
              </div>
            </div>

            {/* Content Side - on the right */}
            <div className="relative z-10 lg:w-[55%] w-full lg:ml-auto lg:mt-16">
              <div className="bg-white p-10 lg:p-12 lg:pl-16">
                <span className="fade-up text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Reach</span>
                <h2 className="fade-up fade-up-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                  INDUSTRIES <span className="text-primary">WE SUPPORT</span>
                </h2>
                <p className="fade-up fade-up-delay-2 text-muted-foreground mb-10 text-base leading-relaxed">
                  Our engineering, supply, and industrial services support operations across key sectors, delivering reliable solutions for demanding environments.
                </p>

                {/* Industries Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <div key={index} className={`fade-up fade-up-delay-${(index % 4) + 1} flex items-start gap-4 group`}>
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                          <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-foreground mb-1 text-base">{industry.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
