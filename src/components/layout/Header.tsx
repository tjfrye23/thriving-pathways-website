
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold font-heading gradient-text">Thriving Pathways</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* ThemeToggle removed */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* ThemeToggle removed */}
            <button 
              onClick={toggleMenu} 
              className="p-2 text-foreground hover:text-primary transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden py-6 animate-fade-in">
            <nav className="flex flex-col gap-5 mb-6">
              <NavLinks mobile onLinkClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

const NavLinks = ({ mobile, onLinkClick }: NavLinksProps) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Market Insights", path: "/insights" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path}
          onClick={onLinkClick}
          className={`text-foreground hover:text-primary transition-colors font-medium ${mobile ? 'text-lg py-2' : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Header;
