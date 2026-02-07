import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, KeyRound } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/gallery" },
    { label: "Certifications", href: "/certifications" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-surface-dark text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="font-display text-lg font-bold text-primary-foreground">IS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold">INGENUITY</span>
                <span className="text-[9px] text-white/50 uppercase tracking-[0.15em]">Specialized Engineering</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xs">
              Your trusted partner for engineering, construction and industrial supply solutions across Zambia.
            </p>
            <a
              href="mailto:ingenuity.engltd@gmail.com?subject=Request%20a%20Quote"
              className="inline-block bg-primary text-primary-foreground font-bold px-4 py-2 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Shop No. 233A, Buseko Market<br />Off Lumumba Road, Lusaka, Zambia
                </span>
              </div>
              <a href="tel:+260975078766" className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors text-sm">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+260 975 078 766</span>
              </a>
              <a href="mailto:ingenuity.engltd@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>ingenuity.engltd@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-white/30 text-xs">
            © {currentYear} ISEW. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://web.facebook.com/profile.php?id=100085097660946" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-primary transition-colors">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="https://wa.me/260975078766" className="text-white/30 hover:text-primary transition-colors">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <Link to="/admin" className="text-white/20 hover:text-primary transition-colors" aria-label="Admin">
              <KeyRound className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
