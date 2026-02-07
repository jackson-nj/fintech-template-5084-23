import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const mechanicalImages = [
  { id: "m1", src: new URL("../assets/services/mechanical1.jpeg", import.meta.url).href, alt: "Mechanical work 1" },
  { id: "m2", src: new URL("../assets/services/mechanical2.jpeg", import.meta.url).href, alt: "Mechanical work 2" },
];

const constructionImages = [
  { id: "c1", src: new URL("../assets/services/construction1.jpg", import.meta.url).href, alt: "Construction site 1" },
  { id: "c2", src: new URL("../assets/services/construction2.jpg", import.meta.url).href, alt: "Construction site 2" },
  { id: "c3", src: new URL("../assets/services/construction3.jpg", import.meta.url).href, alt: "Construction site 3" },
  { id: "c4", src: new URL("../assets/services/construction4.jpg", import.meta.url).href, alt: "Construction site 4" },
];

const Services = () => {
  const services = [
    {
      id: "mechanical",
      title: "Mechanical Engineering",
      desc: "Welding, fabrication, pumps, hydraulics and industrial maintenance.",
      img: mechanicalImages[0].src,
      href: "/services/mechanical",
    },
    {
      id: "civil",
      title: "Civil Works & Construction",
      desc: "Site preparation, structural installations, roads, drainage and finishing works.",
      img: constructionImages[0].src,
      href: "/services/civil",
    },
    {
      id: "supply",
      title: "Supply & Logistics",
      desc: "Procurement, timely delivery and logistics support for projects and operations.",
      img: new URL("../assets/services/card3.jpg", import.meta.url).href,
      href: "/services/supply",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">We specialise in end-to-end engineering, construction and logistics support.</p>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((s) => (
                <div key={s.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[4/3] bg-gray-50">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <a href={s.href} className="inline-block btn-accent font-bold px-6 py-2 rounded-md text-sm">See more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
