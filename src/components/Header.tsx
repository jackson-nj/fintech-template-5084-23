import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X, ChevronDown } from "lucide-react";


const TopContactBar = () => (
  <div className="w-full bg-surface-dark text-surface-dark-foreground py-3">
    <div className="container mx-auto px-6 text-sm">
      {/* Mobile: phone (left) and socials (right) */}
      <div className="flex items-center justify-between sm:hidden">
        <a href="tel:+260971688888" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone className="h-4 w-4 text-primary" />
          <span className="font-medium">+260 971 688 888</span>
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
          <a href="tel:+260971688888" className="flex items-center gap-2 hover:text-primary transition-colors group">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">+260 971 688 888</span>
          </a>
          <a href="mailto:chaganticonstruction@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
            <Mail className="h-4 w-4 text-primary" />
            <span className="font-medium">chaganticonstruction@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://web.facebook.com/profile.php?id=100085097660946" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps." className="hover:text-primary transition-colors" aria-label="WhatsApp">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps." className="hover:text-primary transition-colors" aria-label="WhatsApp">
            <Phone className="h-4 w-4" />
          </a>
          <a href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps." className="hover:text-primary transition-colors" aria-label="WhatsApp">
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
  { label: "Hire", href: "/hire" },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Services", href: "/#services" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
      { label: "Certifications", href: "/certifications" },
    ],
  },
  { label: "Contact", href: "/contact" },
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
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "fixed top-0 left-0 right-0 bg-surface-dark/95 backdrop-blur-md shadow-2xl" 
            : "bg-charcoal/70 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mr-auto">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <span className="font-display text-2xl font-bold text-primary-foreground">CC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white tracking-wide leading-tight">
                CHANGATI<span className="text-primary"> CONSTRUCTION</span>
              </span>
              <span className="text-[10px] text-white/60 uppercase tracking-[0.2em]">We Go Beyond Construction</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 font-medium text-white/90 hover:text-primary transition-colors focus:outline-none text-base tracking-wide py-2">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-surface-dark/95 backdrop-blur-md border border-charcoal/50 shadow-2xl min-w-[200px] py-2 rounded-sm">
                      {item.dropdown.map((subItem, idx) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-5 py-3 text-white/80 hover:bg-charcoal hover:text-primary transition-all duration-200 hover:pl-7"
                          style={{ transitionDelay: `${idx * 30}ms` }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.label === "Contact" ? (
                <a
                  key={item.label}
                  href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-black font-bold px-6 py-2 text-sm uppercase tracking-wider hover:bg-accent transition-colors"
                >
                  Contact Us
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-medium text-white/90 hover:text-primary transition-colors text-base tracking-wide"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface-dark/95 backdrop-blur-md border-t border-charcoal">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="flex flex-col gap-3">
                    <span className="font-semibold text-white text-lg">{item.label}</span>
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-primary/40">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="text-white/70 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="font-semibold text-white text-lg hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a 
                href="https://wa.me/260971688888?text=Hello%2C%20I%27m%20interested%20in%20hiring%20heavy%20equipment.%20Please%20advise%20on%20availability%20and%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground hover:bg-accent font-bold w-full mt-4 py-6 text-base uppercase tracking-wider text-center rounded"
              >
                Request a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
