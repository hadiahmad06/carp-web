
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import FeatureMenu from './FeatureMenu';
import { useState } from 'react';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  const [isFeatureMenuOpen, setIsFeatureMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
        <FeatureMenu 
          isScrolled={isScrolled} 
          isOpen={isFeatureMenuOpen} 
          setIsOpen={setIsFeatureMenuOpen} 
        />
        
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
    </>
  );
};

export default DesktopNav;
