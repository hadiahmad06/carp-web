
import { useEffect, useRef } from 'react';
import { Button } from '@/components/atoms/button';
import { ArrowRight, TargetIcon, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const RideMatchingOverview = () => {
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
      id="ride-matching"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto max-w-7xl">
        <div 
          ref={contentRef}
          className="scroll-animation"
        >
          <div className="text-center mb-12">
            <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
              Smart Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-carp-blue to-blue-500 bg-clip-text text-transparent">
              Intelligent Ride Matching
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our algorithm finds the most efficient matches to save you time and minimize route changes.
            </p>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-10 border-t-4 border-carp-blue">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-carp-lightBlue rounded-lg flex items-center justify-center flex-shrink-0">
                      <TargetIcon className="h-6 w-6 text-carp-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-carp-blue">Efficiency-First Algorithm</h3>
                      <p className="text-muted-foreground">
                        Our proprietary system analyzes hundreds of variables to connect riders with drivers along optimal routes, minimizing detours and maximizing time savings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-carp-lightBlue rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-carp-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-carp-blue">Smart Route Planning</h3>
                      <p className="text-muted-foreground">
                        Tell us your vehicle details, starting point, and destination. We'll find riders along your route with minimal added drive time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-carp-lightBlue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-carp-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-carp-blue">Real-Time Adjustments</h3>
                      <p className="text-muted-foreground">
                        Our system continuously optimizes matches even as new riders join, ensuring the most efficient carpooling experience for everyone.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Link to="/ride-matching">
                      <Button className="bg-carp-blue hover:bg-carp-blue/90 text-white flex items-center gap-2">
                        Learn more about ride matching
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 relative">
                <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden border-2 border-carp-blue/20">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-1/4 left-1/4 animate-float">
                    <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                      <div className="text-xs font-medium text-carp-blue">
                        <span className="text-green-600">+</span> Time Efficiency
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                      <div className="text-xs font-medium text-carp-blue">
                        <span className="text-red-600">-</span> Carbon Emissions
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                      <div className="text-xs font-medium text-carp-blue">
                        <span className="text-green-600">+</span> Optimal Routes
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

export default RideMatchingOverview;
