
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone } from 'lucide-react';

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="download"
      className="py-24 px-6 relative overflow-hidden"
    >
      <div 
        ref={contentRef}
        className="container mx-auto max-w-6xl glass-effect rounded-3xl p-8 md:p-16 scroll-animation"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-10 md:mb-0 md:pr-12">
            <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
              Ready to start carpooling?
            </div>
            <h2 className="font-bold text-3xl md:text-4xl mb-6">
              Download Carp and start <br className="hidden md:block" />
              saving today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Join thousands of students and professionals who are already saving money, reducing their carbon footprint, and making new connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-carp-dark hover:bg-black text-white flex items-center gap-2"
              >
                <Apple className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-carp-dark hover:bg-black text-white flex items-center gap-2"
              >
                <Smartphone className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3 relative">
            <div className="aspect-square max-w-[300px] mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-carp-lightBlue to-transparent opacity-60 animate-pulse-light"></div>
              <div className="relative w-full h-full p-6">
                <div className="relative w-full h-full rounded-[38px] overflow-hidden border-8 border-black shadow-2xl">
                  {/* App preview image */}
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3" 
                    alt="Carp App Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating UI elements */}
                <div className="absolute -top-6 -right-6 animate-float">
                  <div className="glass-effect p-3 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white text-xs">↓</span>
                      </div>
                      <div className="ml-2">
                        <div className="font-medium text-xs">Easy download</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="glass-effect p-3 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-carp-blue flex items-center justify-center">
                        <span className="text-white text-xs">★</span>
                      </div>
                      <div className="ml-2">
                        <div className="font-medium text-xs">Top rated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
