import { Star, Quote } from "lucide-react";
import testimonialImg from "@/assets/services/about us2.jpg";

const testimonial = {
  name: "Mulenga Chanda",
  role: "Project Manager, Lusaka Construction Ltd",
  content: "Ingenuity Specialized Engineering Works Ltd (ISEW) has been our go-to equipment and engineering partner for 5 years. Their reliability and quality of machinery is unmatched. The operators are professional and the equipment is always in top condition.",
  rating: 5,
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-surface-dark overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            WHAT OUR <span className="text-primary">CLIENTS SAY</span>
          </h2>
        </div>

        {/* Main Content - Image Left, Card Right */}
        <div className="relative grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image Side - Left (card style similar to Industries section) */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-md shadow-2xl h-[320px] lg:h-[600px]">
              <img
                src={testimonialImg}
                alt="Happy client"
                className="w-full h-full object-cover"
              />
              {/* Thick accent border on right and bottom */}
              <div className="absolute top-0 -right-3 w-6 h-full bg-primary" />
              <div className="absolute -bottom-3 right-0 w-24 h-6 bg-primary" />
            </div>
          </div>

          {/* Card Side - Right */}
          <div className="relative">
            <div className="bg-charcoal p-10 relative shadow-2xl">
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-primary/30 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/70 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary flex items-center justify-center">
                  <span className="font-display font-bold text-black text-lg">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
