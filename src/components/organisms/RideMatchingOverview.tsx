
import { useEffect, useRef } from 'react';
import { Button } from '@/components/atoms/button';
import { ArrowRight, TargetIcon, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturePageHeader from '../molecules/FeaturePageHeader';
import FeatureCard from '../molecules/FeatureCard';
import GradientContainer from '../molecules/GradientContainer';

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
    <GradientContainer>
      <section 
        id="ride-matching"
        ref={sectionRef}
        className="py-20 px-6 relative overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl">
          <div 
            ref={contentRef}
            className="scroll-animation"
          >
            <FeaturePageHeader
              title="Intelligent Ride Matching"
              subtitle="Our algorithm finds the most efficient matches to save you time and minimize route changes."
              badgeText="Smart Technology"
            />
            
            <div className="glass-effect rounded-3xl p-8 md:p-12 mb-10 border-t-4 border-carp-blue">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <div className="space-y-6">
                    <FeatureCard
                      title="Efficiency-First Algorithm"
                      description="Our proprietary system analyzes hundreds of variables to connect riders with drivers along optimal routes, minimizing detours and maximizing time savings."
                      icon={TargetIcon}
                      iconBgColor="bg-blue-100 dark:bg-blue-900/50"
                      iconColor="text-carp-blue dark:text-blue-400"
                    />
                    
                    <FeatureCard
                      title="Smart Route Planning"
                      description="Tell us your vehicle details, starting point, and destination. We'll find riders along your route with minimal added drive time."
                      icon={MapPin}
                      iconBgColor="bg-green-100 dark:bg-green-900/50"
                      iconColor="text-green-600 dark:text-green-400"
                    />
                    
                    <FeatureCard
                      title="Real-Time Adjustments"
                      description="Our system continuously optimizes matches even as new riders join, ensuring the most efficient carpooling experience for everyone."
                      icon={Zap}
                      iconBgColor="bg-orange-100 dark:bg-orange-900/50"
                      iconColor="text-orange-600 dark:text-orange-400"
                    />
                    
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
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-70 dark:opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-1/4 left-1/4 animate-float">
                      <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                        <div className="text-xs font-medium text-foreground">
                          <span className="text-green-600 dark:text-green-400">+</span> Time Efficiency
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
                      <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                        <div className="text-xs font-medium text-foreground">
                          <span className="text-red-600 dark:text-red-400">-</span> Carbon Emissions
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
                      <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                        <div className="text-xs font-medium text-foreground">
                          <span className="text-green-600 dark:text-green-400">+</span> Optimal Routes
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
    </GradientContainer>
  );
};

export default RideMatchingOverview;
