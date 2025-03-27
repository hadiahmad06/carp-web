
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
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
  );
};

export default Logo;
