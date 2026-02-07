import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight, Clock, KeyRound } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/gallery" },
    { label: "Certifications", href: "/certifications" },
    { label: "Hire", href: "/hire" },
    { label: "FAQ", href: "/faq" },
  ];

  

  return (
    <footer className="bg-surface-dark text-white relative z-40">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-8 border border-white/10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Company Info (left) */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary-foreground">ISEW</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-white">
                  Ingenuity Specialized Engineering Works Ltd <span className="text-primary">(ISEW)</span>
                </span>
                <span className="text-[10px] text-white/60 uppercase tracking-[0.2em]">We Go Beyond Engineering</span>
              </div>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Your trusted partner for heavy equipment hire. We go beyond construction to provide reliable, well-maintained machinery with experienced operators for all your project needs.
            </p>
            
            <a
              href="mailto:ingenuity.engltd@gmail.com?subject=Request%20a%20Quote"
              className="inline-block btn-accent-2 font-bold px-5 py-2 rounded-full text-sm mb-4"
            >
              Request a Quote
            </a>
          </div>

          {/* Quick Links (second) */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
            </h4>
            <ul className="space-y-3">
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

          {/* Contact Info (right) */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-white/60 leading-relaxed">
                  Shop No. 233A, Buseko Market<br />
                  Off Lumumba Road<br />
                  Lusaka, Zambia
                </span>
              </div>

              <a
                href="tel:+260975078766"
                className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-medium">+260 975 078 766</span>
              </a>
              <a
                href="mailto:ingenuity.engltd@gmail.com"
                className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-charcoal rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-medium">ingenuity.engltd@gmail.com</span>
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
      {/* Social icons (centered) */}
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-6">
          <a href="https://web.facebook.com/profile.php?id=100085097660946" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <Facebook className="h-4 w-4 text-white" />
          </a>
          <a href="https://wa.me/260975078766" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <Instagram className="h-4 w-4 text-white" />
          </a>
          <a href="tel:+260975078766" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <Phone className="h-4 w-4 text-white" />
          </a>
          <a href="https://wa.me/260975078766" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <Twitter className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Ingenuity Specialized Engineering Works Ltd (ISEW). All rights reserved.
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
