
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const MobileMenu = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  toggleMobileMenu, 
  closeMobileMenu 
}: MobileMenuProps) => {
  return (
    <>
      <button 
        className="md:hidden relative z-10" 
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background glass-effect md:hidden flex flex-col transition-all duration-300 ease-smooth",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="flex flex-col items-center space-y-6">
            <Link to="/features/safety" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
              Safety First
            </Link>
            <Link to="/features/routing" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
              Smart Routing
            </Link>
            <Link to="/features/chat" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
              In-app Chat
            </Link>
            <Link to="/features/community" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
              Community Driven
            </Link>
            <Link to="/fare-breakdown" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
              Fare Breakdown
            </Link>
            <Link to="/ride-matching" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
              Ride Matching
            </Link>
          </div>
          
          {['How it works', 'Testimonials'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-medium text-2xl text-foreground"
              onClick={closeMobileMenu}
            >
              {item}
            </a>
          ))}
          
          <div className="flex flex-col space-y-4 pt-8">
            <Button 
              variant="outline" 
              className="font-medium text-lg w-48 border-2 border-carp-blue hover:bg-carp-blue hover:text-white"
            >
              Log in
            </Button>
            <Link to="/beta-program" onClick={closeMobileMenu}>
              <Button 
                className="font-medium text-lg w-48 bg-carp-blue hover:bg-carp-blue/90 text-white"
              >
                Download
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
