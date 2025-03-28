
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/button';
import FeatureMenu from './FeatureMenu';
import { useState } from 'react';
import SectionNav from '../NavButtons';
import { Link } from 'react-router-dom';

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
          nav="/ride-matching"
          section=""
          text="Ride Matching"
        />
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <Link to="/beta-program">
          <Button 
            className="font-medium bg-carp-blue hover:bg-carp-blue/90 text-white"
          >
            Download
          </Button>
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
