import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { User, MapPin, Car } from 'lucide-react';
import { FloatingUI, FloatingUIContainer } from '@/components/ui/floating-ui';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-carp-lightBlue rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-carp-lightBlue rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-8">
          {/* Left column / Text content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium animate-fade-in">
                Ride sharing made simple
              </div>
              <h1 className="font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
                Share rides, <br />
                <span className="text-carp-blue">save money</span>, make friends
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
                Connect with fellow travelers going your way. <br className="hidden md:block" />
                Make commuting affordable, sustainable, and social.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-carp-blue hover:bg-carp-blue/90 text-white"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Download App
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-carp-blue text-foreground hover:bg-carp-blue hover:text-white"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-b from-carp-blue to-carp-blue/70 flex items-center justify-center text-white text-xs border-2 border-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="sm:ml-4 text-sm text-muted-foreground">
                <span className="font-medium">1000+</span> rides shared this week
              </div>
            </div>
          </div>
          {/* Right column / Visual content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative flex justify-center lg:justify-end">
              {/* Phone mockup */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[40px] border-[10px] border-black bg-white/90 overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
                {/* App screen content */}
                <div className="relative h-full bg-gradient-to-b from-blue-50 to-white flex flex-col">
                  {/* App header */}
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-carp-blue flex items-center justify-center">
                        <span className="text-white font-medium text-base">C</span>
                      </div>
                      <span className="font-semibold text-xl">carp</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                      <User size={18} />
                    </div>
                  </div>
                  
                  {/* Map preview */}
                  <div className="mx-5 relative h-[180px] rounded-2xl bg-carp-lightBlue/80 overflow-hidden shadow-sm">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543953736-392a4479123a')] bg-cover bg-center opacity-30"></div>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent"></div>
                    
                    <div ref={parallaxRef} className="absolute bottom-3 left-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-carp-blue flex items-center justify-center shadow-sm">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <div className="ml-2 p-1 px-2 bg-white rounded-md text-xs shadow-sm">
                        Current location
                      </div>
                    </div>
                  </div>
                  
                  {/* Available rides */}
                  <div className="flex-1 px-5 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Available Rides</h3>
                      <button className="text-xs font-medium text-carp-blue">View all</button>
                    </div>
                    
                    {/* Ride cards */}
                    {[
                      { name: 'Sarah K.', from: 'Downtown', to: 'University', time: '8:30 AM', price: '$4.50' },
                      { name: 'Michael R.', from: 'Westside', to: 'City Center', time: '9:15 AM', price: '$5.25' },
                      { name: 'David L.', from: 'Northville', to: 'Tech Park', time: '10:00 AM', price: '$3.75' }
                    ].map((ride, i) => (
                      <div key={i} className="p-3 mb-3 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center relative animate-fade-in" style={{ animationDelay: `${500 + i * 100}ms` }}>
                        <div className="w-10 h-10 rounded-full bg-carp-blue/10 flex items-center justify-center">
                          <Car size={18} className="text-carp-blue" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{ride.name}</span>
                            <span className="font-semibold text-carp-blue">{ride.price}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="text-2xs text-muted-foreground">
                              {ride.from} → {ride.to}
                            </div>
                            <div className="ml-auto text-2xs text-muted-foreground">
                              {ride.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom navigation */}
                  <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-around">
                    {['Home', 'Rides', 'Chat', 'Profile'].map((item, i) => (
                      <div key={i} className={`flex flex-col items-center ${i === 0 ? 'text-carp-blue' : 'text-gray-400'}`}>
                        <div className="w-6 h-6 mb-1 flex items-center justify-center">•</div>
                        <span className="text-2xs font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
                
              </div>
              {/* Floating UI elements */}
              <FloatingUIContainer position="center" xOffset="-125%" yOffset="-20vh">
                <FloatingUI
                  title="Save $240/month"
                  text="on average with carpooling"
                  icon="💸"
                  bgColor="bg-yellow-100"
                  textColor="text-yellow-600"
                  animationDelay="400ms"
                  animationDuration="3s"
                  xOffset='-5px'
                />
                <FloatingUI
                  title="Cut emissions by 50%"
                  text="when you ride with one other person"
                  icon="💨"
                  bgColor="bg-gray-100"
                  textColor="text-gray-600"
                  animationDelay="400ms"
                  animationDuration="3s"
                  xOffset='5px'
                />
                <FloatingUI
                  title="Help the environment"
                  text="by reducing the number of cars on the road"
                  icon="🌍"
                  bgColor="bg-green-200"
                  textColor="text-green-800"
                  animationDelay="600ms"
                  animationDuration="3s"
                  xOffset='5px'
                />
                <FloatingUI
                  title="Meet new people"
                  text="while reducing your commute stress"
                  icon="🚗"
                  bgColor="bg-blue-100"
                  textColor="text-blue-600"
                  animationDelay="500ms"
                  animationDuration="2.5s"
                />
                <FloatingUI
                  title="Be more productive"
                  text="by sharing your commute time"
                  icon="📈"
                  bgColor="bg-purple-100"
                  textColor="text-purple-600"
                  animationDelay="800ms"
                  animationDuration="2s"
                />
              </FloatingUIContainer>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
