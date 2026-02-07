import { ChevronDown } from "lucide-react";
import howItWorksImg1 from "@/assets/services/about us1.jpg";
import howItWorksImg2 from "@/assets/services/about us2.jpg";

const steps = [
  {
    number: "1",
    title: "Select Equipment",
    description: "Choose the right heavy machinery for your project from our available fleet.",
  },
  {
    number: "2",
    title: "Book & Confirm",
    description: "Request a quote, confirm hire period, pricing, and delivery details.",
  },
  {
    number: "3",
    title: "Delivery & Operation",
    description: "We deliver to site on time, ready to work — with optional certified operators.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Simple Process</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            HOW IT <span className="text-primary">WORKS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps Side */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Content */}
                <div className="flex items-start gap-8 py-10">
                  {/* Large Number */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary flex items-center justify-center">
                      <span className="font-display text-4xl lg:text-5xl font-bold text-black">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Curved Arrow - not on last step */}
                {index < steps.length - 1 && (
                  <div className="flex items-center pl-10 lg:pl-12 pb-4">
                    <svg 
                      width="60" 
                      height="60" 
                      viewBox="0 0 60 60" 
                      className="text-primary"
                    >
                      <path
                        d="M10 5 Q 10 30, 30 40 Q 50 50, 50 55"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <polygon
                        points="45,50 55,58 50,48"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Side - 2 images stacked */}
          <div className="relative space-y-6">
            <div className="relative">
              <img
                src={howItWorksImg1}
                alt="How it works - step 1"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative">
              <img
                src={howItWorksImg2}
                alt="How it works - step 2"
                className="w-full h-auto object-contain"
              />
              {/* Orange accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
