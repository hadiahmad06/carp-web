
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/button';
import FeatureMenu from './FeatureMenu';
import { useState } from 'react';
import SectionNav from '../NavButtons';

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
         <SectionNav
          className={cn(
            "font-medium transition-colors link-underline",
            isScrolled ? "text-foreground" : "text-foreground"
          )}
          nav="/fare-breakdown"
          section=""
          text="Fare Breakdown"
        />
        <SectionNav
          className={cn(
            "font-medium transition-colors link-underline",
            isScrolled ? "text-foreground" : "text-foreground"
          )}
          nav="/"
          section="how-it-works"
          text="How it works"
        />
        <SectionNav
          className={cn(
            "font-medium transition-colors link-underline",
            isScrolled ? "text-foreground" : "text-foreground"
          )}
          nav="/"
          section="testimonials"
          text="Testimonials"
        />

        {/* {['How it works', 'Testimonials'].map((item) => (
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
        ))} */}
      </nav>

      <div className="hidden md:flex items-center space-x-4">
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
