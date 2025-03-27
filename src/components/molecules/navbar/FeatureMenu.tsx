
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FeatureMenuProps {
  isScrolled: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FeatureMenu = ({ isScrolled, isOpen, setIsOpen }: FeatureMenuProps) => {
  const featureMenuRef = useRef<HTMLDivElement>(null);
  const featureButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Handle clicks outside the feature menu to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featureMenuRef.current && 
        featureButtonRef.current && 
        !featureMenuRef.current.contains(event.target as Node) && 
        !featureButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="relative">
      <button
        ref={featureButtonRef}
        className={cn(
          "font-medium transition-colors link-underline flex items-center gap-1",
          isScrolled ? "text-foreground" : "text-foreground"
        )}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        Features
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L2 5H10L6 9Z" fill="currentColor"/>
        </svg>
      </button>
      <div 
        ref={featureMenuRef}
        className={`absolute left-0 mt-2 w-64 rounded-lg glass-effect p-4 shadow-lg transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
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
  );
};

export default FeatureMenu;
