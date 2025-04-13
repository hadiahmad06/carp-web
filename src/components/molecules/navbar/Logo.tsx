import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <Link to="/" className="relative z-10">
      <div className="flex items-center gap-3">
        <img
          src="/logo.svg"
          alt="Carp Logo"
          className="h-16 w-16"
        />
        <span
          className={cn(
            "text-4xl font-fredoka font-bold tracking-wider transition-colors text-carp-blue"
          )}
        >
          CARP
        </span>
      </div>
    </Link>
  );
};

export default Logo;