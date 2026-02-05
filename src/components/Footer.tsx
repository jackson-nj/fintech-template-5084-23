import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight, Clock, KeyRound } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Equipment Hire", href: "/hire" },
  ];

  const services = [
    { label: "Equipment Hire", href: "/hire" },
    { label: "Wet Hire", href: "/hire" },
    { label: "Dry Hire", href: "/hire" },
    { label: "Equipment Delivery", href: "/hire" },
  ];

  return (
    <footer className="bg-surface-dark">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary-foreground">CC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-white">
                  CHANGATI<span className="text-primary"> CONSTRUCTION</span>
                </span>
                <span className="text-[10px] text-white/60 uppercase tracking-[0.2em]">We Go Beyond Construction</span>
              </div>
            </div>
            <p className="text-white/60 mb-8 leading-relaxed">
              Your trusted partner for heavy equipment hire. We go beyond construction to provide reliable, well-maintained machinery with experienced operators for all your project needs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/profile.php?id=100085097660946"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-charcoal rounded flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
                className="w-11 h-11 bg-charcoal rounded flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
                className="w-11 h-11 bg-charcoal rounded flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
                className="w-11 h-11 bg-charcoal rounded flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold mb-8 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    <span className="font-medium">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-bold mb-8 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/60 leading-relaxed">
                  Plot. 26, Palonaliomit Road,<br />
                  Villa Elizabeth Off Washama Road,<br />
                  Lusaka, Zambia, 10101
                </span>
              </div>
              <a
                href="tel:+260971688888"
                className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-medium">+260 971 688 888</span>
              </a>
              <a
                href="mailto:chaganticonstruction@gmail.com"
                className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-medium">chaganticonstruction@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal">
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Changati Construction LTD. All rights reserved.
          </p>
          <Link
            to="/admin"
            className="text-white/30 hover:text-primary transition-colors p-2"
            aria-label="Admin Login"
          >
            <KeyRound className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
