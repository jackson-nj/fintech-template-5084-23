import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/services/logo.png";

const TopContactBar = () => (
  <div className="w-full bg-surface-dark text-surface-dark-foreground py-2">
    <div className="container mx-auto px-6 text-sm">
      <div className="flex items-center justify-between sm:hidden">
        <a href="tel:+260975078766" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-xs">+260 975 078 766</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="https://web.facebook.com/profile.php?id=100085097660946" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="hidden sm:flex flex-row justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+260975078766" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-xs">+260 975 078 766</span>
          </a>
          <a href="mailto:ingenuity.engltd@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-xs">ingenuity.engltd@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://web.facebook.com/profile.php?id=100085097660946" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href="https://wa.me/260975078766" className="hover:text-primary transition-colors" aria-label="WhatsApp">
            <Instagram className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/gallery" },
  { label: "Certifications", href: "/certifications" },
  { label: "FAQ", href: "/faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50">
      <TopContactBar />
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : 'relative'}`}>
        <div className="bg-background">
          <div className="container mx-auto px-6 py-2 flex items-center">
            {/* Logo unit — logo + text aligned as one cohesive block */}
            <Link to="/" className="flex items-center gap-3 mr-auto">
              <img src={logo} alt="ISEW logo" className="w-12 h-12 object-contain shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                  INGENUITY
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.15em] mt-0.5">
                  Specialized Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="font-medium text-sm text-foreground/80 hover:text-primary transition-colors tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:ingenuity.engltd@gmail.com?subject=Request%20a%20Quote"
                className="bg-primary text-primary-foreground font-bold px-5 py-2 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="font-medium text-sm text-foreground/80 hover:text-primary py-1.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:ingenuity.engltd@gmail.com?subject=Request%20a%20Quote"
                className="bg-primary text-primary-foreground font-bold w-full text-center py-2.5 text-xs uppercase tracking-wider mt-2"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
