
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, DollarSign, Users, Calculator } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { Card, CardContent } from '@/components/atoms/card';

const FareOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation-active');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id="fare-overview" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-12 scroll-animation">
          <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4 dark:bg-blue-900/50 dark:text-blue-400">
            Fair Pricing
          </div>
          <h2 className="font-bold mb-4 text-foreground">
            Transparent Fare <span className="text-carp-blue">Breakdown</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We prioritize fairness for both riders and drivers, ensuring that costs are shared equitably among all participants.
          </p>
        </div>

        <div 
          ref={contentRef} 
          className="scroll-animation grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          style={{ transitionDelay: '100ms' }}
        >
          {/* Left column - Overview of fare calculation */}
          <div className="space-y-6">
            <Card className="border-carp-blue/20 p-2">
              <CardContent className="pt-4">
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-full bg-carp-blue/10 dark:bg-carp-blue/20 mr-4">
                    <Calculator className="h-6 w-6 text-carp-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground">How We Calculate Fares</h3>
                    <p className="text-muted-foreground text-sm">
                      Our formula takes into account distance, fuel efficiency, local gas prices, and parking costs to recommend a fair price.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg text-sm">
                  <code className="text-foreground">
                    <p className="mb-2">Recommended Cost = ((Miles / MPG) × Gas Price + Parking) ÷ Total Riders</p>
                    <p className="text-muted-foreground italic text-xs">This ensures costs are shared equally among all participants</p>
                  </code>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 mb-2">
                  <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-sm font-medium text-foreground">Rider View</h4>
                <p className="text-xs text-muted-foreground">See your share of the journey cost</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-2">
                  <Car className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-sm font-medium text-foreground">Driver View</h4>
                <p className="text-xs text-muted-foreground">Set fares with helpful recommendations</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-2">
                  <DollarSign className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-sm font-medium text-foreground">Fair Pricing</h4>
                <p className="text-xs text-muted-foreground">Everyone pays their fair share, no more</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              "This platform serves only to help share the burden of commuting costs, not to generate profit for drivers."
            </p>

            <div className="pt-4">
              <Button 
                className="w-full sm:w-auto bg-carp-blue hover:bg-carp-blue/90 text-white"
                asChild
              >
                <Link to="/fare-breakdown">
                  See Detailed Fare Breakdown
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - App mockup */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center">
              <div className="h-6 w-6 rounded-lg bg-carp-blue flex items-center justify-center mr-2">
                <span className="text-white font-medium text-xs">C</span>
              </div>
              <span className="font-medium text-foreground">Fare Calculator</span>
            </div>
            
            <div className="p-5">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div>
                  <p className="text-sm font-medium text-foreground">University to Downtown</p>
                  <p className="text-xs text-muted-foreground">15 miles, 3 riders</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-carp-blue dark:text-blue-400">$5.25</p>
                  <p className="text-xs text-muted-foreground">per rider</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm text-foreground">
                  <span>Distance:</span>
                  <span className="font-medium">15 miles</span>
                </div>
                <div className="flex justify-between text-sm text-foreground">
                  <span>Vehicle Efficiency:</span>
                  <span className="font-medium">25 MPG</span>
                </div>
                <div className="flex justify-between text-sm text-foreground">
                  <span>Gas Price:</span>
                  <span className="font-medium">$3.50/gallon</span>
                </div>
                <div className="flex justify-between text-sm text-foreground">
                  <span>Parking Cost:</span>
                  <span className="font-medium">$6.00</span>
                </div>
                <div className="flex justify-between text-sm text-foreground">
                  <span>Riders:</span>
                  <span className="font-medium">3 (incl. driver)</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center text-foreground">
                  <span className="text-sm font-medium">Trip Total:</span>
                  <span className="font-bold text-carp-blue dark:text-blue-400">$15.75</span>
                </div>
                <div className="flex justify-between items-center text-foreground">
                  <span className="text-sm font-medium">Your Share:</span>
                  <span className="font-bold text-carp-blue dark:text-blue-400">$5.25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareOverview;
