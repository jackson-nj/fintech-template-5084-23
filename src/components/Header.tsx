import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/services/logo.png";


const TopContactBar = () => (
  <div className="w-full bg-surface-dark text-surface-dark-foreground py-3">
    <div className="container mx-auto px-6 text-sm">
      {/* Mobile: phone (left) and socials (right) */}
      <div className="flex items-center justify-between sm:hidden">
        <a href="tel:+260975078766" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone className="h-4 w-4 text-primary" />
          <span className="font-medium">+260 975 078 766</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="https://web.facebook.com/profile.php?id=100085097660946" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Desktop/tablet: original full bar */}
      <div className="hidden sm:flex flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-8">
          <a href="tel:+260975078766" className="flex items-center gap-2 hover:text-primary transition-colors group">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">+260 975 078 766</span>
          </a>
          <a href="mailto:ingenuity.engltd@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
            <Mail className="h-4 w-4 text-primary" />
            <span className="font-medium">ingenuity.engltd@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://web.facebook.com/profile.php?id=100085097660946" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://wa.me/260975078766?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20Please%20advise%20on%20availability%20and%20next%20steps." className="hover:text-primary transition-colors" aria-label="WhatsApp">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://wa.me/260975078766?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20Please%20advise%20on%20availability%20and%20next%20steps." className="hover:text-primary transition-colors" aria-label="WhatsApp">
            <Phone className="h-4 w-4" />
          </a>
          <a href="https://wa.me/260975078766?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20Please%20advise%20on%20availability%20and%20next%20steps." className="hover:text-primary transition-colors" aria-label="WhatsApp">
            <Youtube className="h-4 w-4" />
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
  { label: "Pages", dropdown: [
      { label: "Projects", href: "/gallery" },
      { label: "Certifications", href: "/certifications" },
    ]
  },
  { label: "FAQ", href: "/faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50">
      <TopContactBar />
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}`}>
        <div className="w-full">
          <div className="site-header-card">
            <div className="container mx-auto px-4 flex items-center gap-3">
              {/* Logo + text: show logo and large text; ensure visible */}
              <Link to="/" className="flex items-center gap-4 mr-auto">
                <img src={logo} alt="Ingenuity logo" className="w-16 h-16 object-contain shrink-0" />
                <div className="flex flex-col">
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    INGENUITY
                  </span>
                  <span className="text-base md:text-lg text-secondary/90 uppercase tracking-[0.12em]">
                    SPECIALIZED ENGINEERING
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <div key={item.label} className="relative group">
                        <button className="flex items-center gap-2 font-medium text-secondary/90 hover:text-accent transition-colors focus:outline-none text-base tracking-wide py-2">
                          {item.label}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0">
                          <div className="bg-white border border-muted shadow-lg min-w-[200px] py-2 rounded-md">
                            {item.dropdown.map((subItem, idx) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block px-5 py-3 text-secondary hover:bg-muted transition-all duration-150"
                                style={{ transitionDelay: `${idx * 20}ms` }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="font-medium text-secondary/90 hover:text-accent transition-colors text-base tracking-wide"
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link to="/faq" className="hidden lg:inline-block" />

                <a
                  href="mailto:ingenuity.engltd@gmail.com?subject=Request%20a%20Quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent-2 font-bold px-5 py-2 rounded-full text-sm"
                >
                  Request a Quote
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-secondary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="container mx-auto px-4 lg:hidden mt-4">
              <div className="bg-white shadow-sm p-4">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    if (item.dropdown) {
                      return (
                        <div key={item.label} className="flex flex-col gap-2">
                          <span className="font-semibold text-secondary text-base">{item.label}</span>
                          <div className="pl-4 flex flex-col gap-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="text-secondary/90 hover:text-accent"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="font-semibold text-secondary text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  <a
                    href="mailto:ingenuity.engltd@gmail.com?subject=Request%20a%20Quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent-2 font-bold w-full text-center py-3"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
