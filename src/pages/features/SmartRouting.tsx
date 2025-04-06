import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/button';
import { MapPin, Route, Clock, TrendingUp, Users, ChevronLeft, Search } from 'lucide-react';
import CallToAction from '@/components/organisms/CallToAction';
import FeatureSection from '@/components/molecules/FeatureSection';
import FeatureCard from '@/components/molecules/FeatureCard';
import MobileAppUI from '@/components/molecules/MobileAppUI';
import { themeColors } from '@/styles/theme';
import { cn } from '@/lib/utils';

const SmartRouting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSearch = () => {
    if (pickupLocation && destination) {
      setIsSearching(true);
      setCurrentStep(2);
      
      // Simulate finding matches after 3 seconds
      setTimeout(() => {
        setIsSearching(false);
        setMatchFound(true);
      }, 3000);
    }
  };

  const selectRide = () => {
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* UI Example Section */}
      <section ref={sectionRef} className={cn(
        "py-20 px-6",
        themeColors.glass.light,
        themeColors.glass.dark
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Smart Route Matching</h2>
              <p className="text-muted-foreground mb-8">
                Our advanced algorithm finds the most efficient routes and compatible co-riders
                for a seamless carpooling experience.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Route className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Efficient Routes</h3>
                    <p className="text-muted-foreground">Find the most efficient routes that match your schedule and preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Time Optimization</h3>
                    <p className="text-muted-foreground">Minimize wait times with smart scheduling and real-time updates.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Smart Matching</h3>
                    <p className="text-muted-foreground">Get matched with compatible riders based on preferences and routes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <MobileAppUI isVisible={isVisible}>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <button className="rounded-full bg-white/20 p-2">
                      <ChevronLeft className="w-5 h-5" />
                          </button>
                          <h3 className="font-medium">Find a Ride</h3>
                    <div className="w-8 h-8"></div>
                      </div>
                      
                  <div className="space-y-6">
                        {currentStep === 1 && (
                      <>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="pickup" className="block text-sm font-medium text-foreground mb-1">Pickup Location</label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                                <input 
                                  type="text" 
                                id="pickup"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground"
                                placeholder="Enter pickup location"
                                  value={pickupLocation}
                                  onChange={(e) => setPickupLocation(e.target.value)}
                                />
                              </div>
                                </div>
                          <div>
                            <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-1">Destination</label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                                <input 
                                  type="text" 
                                id="destination"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground"
                                placeholder="Enter destination"
                                  value={destination}
                                  onChange={(e) => setDestination(e.target.value)}
                                />
                              </div>
                            </div>
                        </div>
                            <Button 
                              onClick={handleSearch}
                              disabled={!pickupLocation || !destination}
                          className="w-full"
                            >
                          Find Matches
                            </Button>
                      </>
                        )}
                        
                        {currentStep === 2 && (
                      <div className="text-center py-8">
                            {isSearching ? (
                          <div className="space-y-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-carp-blue mx-auto"></div>
                            <p className="text-foreground">Finding the best matches for you...</p>
                              </div>
                            ) : (
                          <div className="space-y-6">
                              <div className="space-y-4">
                              <div className={cn(
                                "p-4 rounded-lg cursor-pointer transition-all",
                                themeColors.feature.blue.light.bg,
                                themeColors.feature.blue.dark.bg,
                                "hover:opacity-90"
                              )} onClick={selectRide}>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h3 className="font-semibold text-foreground">John's Carpool</h3>
                                    <p className="text-sm text-muted-foreground">Leaves in 15 minutes</p>
                                        </div>
                                  <div className="text-right">
                                    <p className="font-semibold text-foreground">$12.50</p>
                                    <p className="text-sm text-muted-foreground">25 min ride</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                              </div>
                            )}
                          </div>
                        )}
                        
                        {currentStep === 3 && (
                      <div className="text-center py-8 space-y-4">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                        <h3 className="text-xl font-semibold text-foreground">Ride Confirmed!</h3>
                        <p className="text-muted-foreground">Your ride with John will arrive in 15 minutes</p>
                        <Button onClick={() => setCurrentStep(1)} variant="outline">Done</Button>
                      </div>
                    )}
                  </div>
                </div>
              </MobileAppUI>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection
        title="Smart Routing"
        subtitle="Our advanced algorithm matches riders with the most efficient routes and compatible co-riders for a seamless experience."
        badge="Intelligent Routes"
        className="bg-background"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Route Matching"
            description="Our algorithm analyzes thousands of potential routes to find drivers and riders with similar paths."
            icon={Route}
            color={cn(themeColors.feature.blue.light.bg, themeColors.feature.blue.dark.bg)}
            linkTo="/features/routing"
            delay={100}
          />
          <FeatureCard
            title="Schedule Optimization"
            description="We analyze timing preferences to match people with compatible schedules, minimizing wait times."
            icon={Clock}
            color={cn(themeColors.feature.blue.light.bg, themeColors.feature.blue.dark.bg)}
            linkTo="/features/routing"
            delay={200}
          />
          <FeatureCard
            title="Preference Analysis"
            description="From music taste to conversation levels, we match you with like-minded carpoolers."
            icon={Users}
            color={cn(themeColors.feature.blue.light.bg, themeColors.feature.blue.dark.bg)}
            linkTo="/features/routing"
            delay={300}
          />
        </div>
      </FeatureSection>
      
      {/* Statistics Section */}
      <section className={cn("py-20 px-6", themeColors.glass.light, themeColors.glass.dark)}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "97%",
                label: "Match Success Rate",
                description: "Of users find ideal carpooling matches within minutes"
              },
              {
                value: "25%",
                label: "Commute Time Reduction",
                description: "Average time saved compared to public transportation"
              },
              {
                value: "15K+",
                label: "Carbon Footprint Reduction",
                description: "Tons of CO2 emissions saved through shared rides"
              }
            ].map((stat, index) => (
              <div key={index} className={cn(
                "text-center p-6 rounded-xl",
                themeColors.glass.light,
                themeColors.glass.dark
              )}>
                <h3 className="text-4xl font-bold text-carp-blue mb-2">{stat.value}</h3>
                <p className="font-medium text-xl mb-2 text-foreground">{stat.label}</p>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default SmartRouting;
