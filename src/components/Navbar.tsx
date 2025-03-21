
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10',
        isScrolled ? 'py-4 glass-effect' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-carp-blue flex items-center justify-center">
              <span className="text-white font-medium text-xl">C</span>
            </div>
            <span className={cn(
              "font-semibold text-2xl transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )}>
              Carp
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['Features', 'How it works', 'Testimonials'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                "font-medium transition-colors link-underline",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className={cn(
              "font-medium transition-all border-2",
              isScrolled 
                ? "text-foreground border-carp-blue hover:bg-carp-blue hover:text-white" 
                : "text-foreground border-carp-blue hover:bg-carp-blue hover:text-white"
            )}
          >
            Log in
          </Button>
          <Button 
            className="font-medium bg-carp-blue hover:bg-carp-blue/90 text-white"
          >
            Download
          </Button>
        </div>

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
            {['Features', 'How it works', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium text-2xl text-foreground"
                onClick={toggleMobileMenu}
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
              <Button 
                className="font-medium text-lg w-48 bg-carp-blue hover:bg-carp-blue/90 text-white"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
