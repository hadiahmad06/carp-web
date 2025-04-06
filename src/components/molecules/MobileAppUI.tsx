import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { themeColors } from '@/styles/theme';

interface MobileAppUIProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  isVisible?: boolean;
}

const MobileAppUI = ({ children, header, footer, className, isVisible = true }: MobileAppUIProps) => {
  return (
    <div className={cn(
      "relative mx-auto max-w-[360px]",
      className
    )}>
      {/* Phone frame */}
      <div className={cn(
        "rounded-[40px] bg-black p-6 shadow-xl transition-all duration-1000",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      )}>
        {/* App screen */}
        <div className="rounded-[28px] overflow-hidden bg-background h-[620px] flex flex-col">
          {/* App header */}
          {header && (
            <div className="bg-carp-blue text-white p-4">
              {header}
            </div>
          )}
          
          {/* App content */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>

          {/* App footer */}
          {footer && (
            <div className="border-t bg-background p-4">
              {footer}
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-carp-blue/20 rounded-full opacity-60"></div>
      <div className="absolute -top-8 -right-4 w-16 h-16 bg-carp-blue/20 rounded-full opacity-40"></div>
    </div>
  );
};

export default MobileAppUI; 