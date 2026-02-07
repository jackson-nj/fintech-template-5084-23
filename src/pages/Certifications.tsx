 import { useState, useEffect } from "react";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { Award, CheckCircle, Loader2 } from "lucide-react";
 import { supabase } from "@/integrations/supabase/client";
 
 // Fallback certification images
 import napsa from "@/assets/certifications/National Pension Scheme Authority.png";
 import pacra from "@/assets/certifications/pacra.png";
 import wcfcb from "@/assets/certifications/Workers' Compensation Fund Control Board.png";
 import zra from "@/assets/certifications/zambia revenue authority.png";
 import zppa from "@/assets/certifications/Zambian Public Procurement Authority.png";
 
 interface Certification {
   id: string;
   name: string;
   image_url: string;
 }
 
 const fallbackCertifications: Certification[] = [
   { id: "1", name: "National Pension Scheme Authority (NAPSA)", image_url: napsa },
   { id: "2", name: "Patents and Companies Registration Agency (PACRA)", image_url: pacra },
   { id: "3", name: "Workers' Compensation Fund Control Board (WCFCB)", image_url: wcfcb },
   { id: "4", name: "Zambia Revenue Authority (ZRA)", image_url: zra },
   { id: "5", name: "Zambia Public Procurement Authority (ZPPA)", image_url: zppa },
 ];

const compliancePoints = [
  "Fully licensed and registered business",
  "Tax compliant with all government agencies",
  "Employee welfare and pension contributions",
  "Workers' compensation insurance",
  "Qualified for government contracts",
  "Regular compliance audits"
];

const Certifications = () => {
   const [certifications, setCertifications] = useState<Certification[]>([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchCertifications = async () => {
       try {
         const { data, error } = await supabase
           .from("certifications")
           .select("*")
           .order("created_at", { ascending: false });
 
         if (error) throw error;
         setCertifications(data && data.length > 0 ? data : fallbackCertifications);
       } catch (err) {
         console.error("Error fetching certifications:", err);
         setCertifications(fallbackCertifications);
       } finally {
         setLoading(false);
       }
     };
 
     fetchCertifications();
   }, []);
 
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end justify-center pb-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest">
            Certifications
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Credentials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              LICENSED & <span className="text-primary">CERTIFIED</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ingenuity Specialized Engineering Works Ltd (ISEW) is a fully registered and compliant company, meeting all regulatory requirements 
              in Zambia. Our certifications demonstrate our commitment to operating with integrity, transparency, 
              and adherence to all legal and industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
           {loading ? (
             <div className="flex items-center justify-center py-20">
               <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
           ) : (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {certifications.map((cert) => (
              <div
                   key={cert.id}
                className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-32 flex items-center justify-center mb-6 bg-gray-50 p-4">
                  <img
                       src={cert.image_url || "/placeholder.svg"}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>
           )}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded flex items-center justify-center">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                  Why It Matters
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                OUR COMMITMENT TO <span className="text-primary">COMPLIANCE</span>
              </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                We believe in doing business the right way. Our certifications and registrations 
                are not just legal requirements—they reflect our core values of integrity, 
                responsibility, and professionalism. When you work with Ingenuity Specialized Engineering Works Ltd (ISEW), 
                you can be confident that you're partnering with a company that meets the highest 
                standards of corporate governance.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="grid sm:grid-cols-2 gap-4">
                {compliancePoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-white font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With a Trusted Partner?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Partner with a certified, compliant, and professional engineering and supply company. Contact us to discuss your project requirements.
          </p>
          <a
            href="https://wa.me/260975078766?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20Please%20advise%20on%20availability%20and%20next%20steps."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-charcoal text-white font-bold px-10 py-4 text-sm uppercase tracking-wider hover:bg-black transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
