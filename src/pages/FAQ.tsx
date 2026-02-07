import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What services do you provide?",
        answer: "We offer mechanical engineering works, fabrication, equipment maintenance, construction support, and supply of PPE and industrial hardware."
      },
      {
        question: "Do you supply PPE and industrial materials?",
        answer: "Yes. We supply a wide range of safety gear, hardware, and engineering materials for industrial and mining operations."
      },
      {
        question: "Where are you located?",
        answer: "Lusaka, with services and supply support across the Copperbelt and other industrial areas."
      },
      {
        question: "How long has the company been operating?",
        answer: "Ingenuity Specialized Engineering Works Limited was established in 2025 and continues to grow its industrial support services."
      }
    ]
  },
  {
    category: "Projects & Supply",
    questions: [
      {
        question: "Can you support mining and industrial sites?",
        answer: "Yes. We support mining, construction, and industrial operations with engineering services and supply solutions."
      },
      {
        question: "Do you handle both small and large projects?",
        answer: "Yes. We support both short-term works and larger ongoing industrial requirements."
      },
      {
        question: "How do we request a quote?",
        answer: "Contact us via phone, email, or the website contact form with your requirements and project details."
      },
      {
        question: "Do you deliver supplies?",
        answer: "Yes. We can arrange delivery and logistics for supplied materials and equipment where required."
      }
    ]
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end justify-center pb-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest">
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our equipment hire services, booking process, and more.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto space-y-10">
            {faqData.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="font-display text-xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary inline-block">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const itemId = `${catIndex}-${qIndex}`;
                    const isOpen = openItems.includes(itemId);
                    return (
                      <div
                        key={qIndex}
                        className="bg-white border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-foreground pr-4">
                            {item.question}
                          </span>
                          <ChevronDown 
                            className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                        >
                          <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 p-10 bg-charcoal">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/70 mb-6">
              Can't find the answer you're looking for? Feel free to contact us directly.
            </p>
            <a
              href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-black font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
