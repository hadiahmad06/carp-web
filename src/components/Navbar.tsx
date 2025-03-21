
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeatureMenuOpen, setIsFeatureMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleFeatureMenu = () => {
    setIsFeatureMenuOpen(!isFeatureMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10',
        isScrolled ? 'py-4 glass-effect' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="relative z-10">
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
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button
              className={cn(
                "font-medium transition-colors link-underline flex items-center gap-1",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
              onClick={toggleFeatureMenu}
              onMouseEnter={() => setIsFeatureMenuOpen(true)}
              onMouseLeave={() => setIsFeatureMenuOpen(false)}
            >
              Features
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L2 5H10L6 9Z" fill="currentColor"/>
              </svg>
            </button>
            <div 
              className={`absolute left-0 mt-2 w-64 rounded-lg glass-effect p-4 shadow-lg transition-all duration-200 ${isFeatureMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              onMouseEnter={() => setIsFeatureMenuOpen(true)}
              onMouseLeave={() => setIsFeatureMenuOpen(false)}
            >
              <div className="flex flex-col space-y-3">
                <Link to="/features/community" className="text-foreground hover:text-carp-blue transition-colors flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  Community Driven
                </Link>
                <Link to="/features/safety" className="text-foreground hover:text-carp-blue transition-colors flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  Safety First
                </Link>
                <Link to="/features/routing" className="text-foreground hover:text-carp-blue transition-colors flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-carp-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </span>
                  Smart Routing
                </Link>
                <Link to="/features/chat" className="text-foreground hover:text-carp-blue transition-colors flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  In-app Chat
                </Link>
              </div>
            </div>
          </div>
          {['How it works', 'Testimonials'].map((item) => (
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
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
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
            <div className="flex flex-col items-center space-y-6">
              <Link to="/features/community" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
                Community Driven
              </Link>
              <Link to="/features/safety" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
                Safety First
              </Link>
              <Link to="/features/routing" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
                Smart Routing
              </Link>
              <Link to="/features/chat" className="font-medium text-xl text-foreground" onClick={closeMobileMenu}>
                In-app Chat
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
              <Button 
                className="font-medium text-lg w-48 bg-carp-blue hover:bg-carp-blue/90 text-white"
                onClick={() => {
                  closeMobileMenu();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
