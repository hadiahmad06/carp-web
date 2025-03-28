
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { ArrowRight, TargetIcon, Clock, Zap, CarFront, MapPin } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { initScrollAnimations } from '@/utils/scrollAnimation';

const RideMatching = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Carp - Smart Ride Matching</title>
        <meta name="description" content="Learn how Carp's intelligent algorithm matches riders with the most efficient rides, saving time and minimizing detours." />
      </Helmet>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero section */}
          <div className="text-center mb-20">
            <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
              Efficient commuting
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-carp-blue to-blue-500 bg-clip-text text-transparent">Smart Ride Matching</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our intelligent algorithm connects riders with the most efficient routes, minimizing detours and maximizing savings.
            </p>
          </div>
          
          {/* How it works section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-carp-blue">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect p-6 rounded-xl scroll-animation border-t-4 border-carp-blue">
                <div className="w-12 h-12 bg-carp-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <CarFront className="text-carp-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-carp-blue">Enter Vehicle Details</h3>
                <p className="text-muted-foreground">
                  Drivers provide their vehicle information, including make, model, year, and fuel efficiency (MPG). This helps us calculate accurate fare recommendations.
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-xl scroll-animation border-t-4 border-carp-blue" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-carp-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-carp-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-carp-blue">Set Your Route</h3>
                <p className="text-muted-foreground">
                  Tell us your starting point, destination, and preferred departure time. Our system analyzes your route to find optimal pickup and drop-off points.
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-xl scroll-animation border-t-4 border-carp-blue" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-carp-lightBlue rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-carp-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-carp-blue">Intelligent Matching</h3>
                <p className="text-muted-foreground">
                  Our algorithm processes hundreds of variables to match riders with drivers, prioritizing minimal detours and time efficiency.
                </p>
              </div>
            </div>
          </div>
          
          {/* Algorithm section */}
          <div className="mb-20">
            <div className="glass-effect rounded-2xl p-8 md:p-12 border-t-4 border-carp-blue">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-carp-blue">Efficiency-First Algorithm</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our proprietary matching algorithm prioritizes efficiency at every step. Unlike traditional ridesharing services, Carp focuses on:
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-carp-lightBlue flex items-center justify-center flex-shrink-0">
                        <ArrowRight size={14} className="text-carp-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-carp-blue">Minimal Detours</h4>
                        <p className="text-muted-foreground">
                          We calculate the optimal route that adds the least amount of travel time for all parties involved.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-carp-lightBlue flex items-center justify-center flex-shrink-0">
                        <ArrowRight size={14} className="text-carp-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-carp-blue">Time-Based Matching</h4>
                        <p className="text-muted-foreground">
                          Our system considers departure times and estimates arrival times to ensure everyone stays on schedule.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-carp-lightBlue flex items-center justify-center flex-shrink-0">
                        <ArrowRight size={14} className="text-carp-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-carp-blue">Vehicle Optimization</h4>
                        <p className="text-muted-foreground">
                          Match riders with vehicles that have the optimal passenger capacity and fuel efficiency for the journey.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  
                  {/* Floating elements to illustrate the algorithm */}
                  <div className="absolute top-1/4 left-1/4 animate-float">
                    <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-carp-blue" />
                        <span className="text-xs font-medium">Time Efficiency</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="glass-effect p-3 rounded-xl shadow-lg border border-carp-blue/30">
                      <div className="flex items-center gap-2">
                        <TargetIcon size={16} className="text-carp-blue" />
                        <span className="text-xs font-medium">Route Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Preview section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-carp-blue">App Preview</h2>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-[10px] border-black bg-white overflow-hidden shadow-xl">
                <div className="relative h-full bg-gradient-to-b from-carp-lightBlue to-white p-4">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg text-carp-blue">Vehicle Setup</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <label className="text-xs text-muted-foreground">Vehicle Make</label>
                      <div className="font-medium text-carp-blue">Toyota</div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <label className="text-xs text-muted-foreground">Vehicle Model</label>
                      <div className="font-medium text-carp-blue">Corolla</div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <label className="text-xs text-muted-foreground">Year</label>
                      <div className="font-medium text-carp-blue">2019</div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <label className="text-xs text-muted-foreground">Fuel Efficiency (MPG)</label>
                      <div className="font-medium text-carp-blue">32 MPG</div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <label className="text-xs text-muted-foreground">Passenger Capacity</label>
                      <div className="font-medium text-carp-blue">4</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-[10px] border-black bg-white overflow-hidden shadow-xl">
                <div className="relative h-full bg-gradient-to-b from-carp-lightBlue to-white p-4">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg text-carp-blue">Ride Matching</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-carp-blue/10 rounded-xl shadow-sm border-l-4 border-carp-blue">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-sm text-carp-blue">Best Match (98%)</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">+3 min</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        Pickup: University Ave & 15th St
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Departure: 8:15 AM</span>
                        <span>$3.50</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-sm text-carp-blue">Good Match (85%)</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">+7 min</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        Pickup: Central Ave & Main St
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Departure: 8:20 AM</span>
                        <span>$4.25</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-sm text-carp-blue">Alternative (72%)</span>
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">+12 min</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        Pickup: Washington Ave & Oak St
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Departure: 8:25 AM</span>
                        <span>$3.75</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RideMatching;
