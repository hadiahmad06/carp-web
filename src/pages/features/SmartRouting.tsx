
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Route, Clock, TrendingUp, Users } from 'lucide-react';

const SmartRouting = () => {
  const [isAppVisible, setIsAppVisible] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAppVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (appRef.current) {
      observer.observe(appRef.current);
    }

    return () => {
      if (appRef.current) {
        observer.unobserve(appRef.current);
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
              Smart Routing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent routes for <br/> <span className="text-carp-blue">perfect matches</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Our advanced algorithm matches riders with the most efficient routes 
              and compatible co-riders for a seamless experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-carp-blue hover:bg-carp-blue/90 text-white"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Download Carp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-carp-blue text-carp-blue hover:bg-carp-blue hover:text-white"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Mockup Section */}
      <section
        ref={appRef}
        className="py-20 px-6 bg-gradient-to-b from-blue-50 to-background overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Effortless Route Planning</h2>
              <p className="text-muted-foreground mb-8">
                Our smart algorithm optimizes routes based on your destination, schedule, and preferences to find
                the perfect carpool match in seconds.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Route className="h-6 w-6 text-carp-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Optimized Matching</h3>
                    <p className="text-muted-foreground">Intelligent algorithms match riders and drivers based on route similarity, schedule, and preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-carp-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Plan one-time trips or set up regular commutes with riders who share your schedule.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-carp-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Adaptive Learning</h3>
                    <p className="text-muted-foreground">Our system learns from your preferences over time to suggest increasingly better matches.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[360px]">
                {/* Phone frame */}
                <div className={`rounded-[40px] bg-black p-6 shadow-xl transition-all duration-1000 ${isAppVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  {/* App screen */}
                  <div className="rounded-[28px] overflow-hidden bg-white h-[620px]">
                    {/* Map screen */}
                    <div className="absolute inset-0 rounded-[28px] overflow-hidden">
                      <div className="h-full w-full bg-gray-100 relative">
                        {/* Simplified map background */}
                        <div className="absolute inset-0 opacity-90">
                          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 0 10 L 40 10" stroke="#e5e7eb" strokeWidth="0.5" fill="none" />
                                <path d="M 10 0 L 10 40" stroke="#e5e7eb" strokeWidth="0.5" fill="none" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="#f8fafc" />
                            <rect width="100%" height="100%" fill="url(#grid)" />
                            
                            {/* Major roads */}
                            <path d="M 0 150 L 400 150" stroke="#94a3b8" strokeWidth="4" />
                            <path d="M 0 300 L 400 300" stroke="#94a3b8" strokeWidth="4" />
                            <path d="M 0 450 L 400 450" stroke="#94a3b8" strokeWidth="4" />
                            <path d="M 100 0 L 100 600" stroke="#94a3b8" strokeWidth="4" />
                            <path d="M 250 0 L 250 600" stroke="#94a3b8" strokeWidth="4" />
                            
                            {/* Highway */}
                            <path d="M 0 250 L 400 250" stroke="#3b82f6" strokeWidth="8" />
                            <path d="M 200 0 L 200 600" stroke="#3b82f6" strokeWidth="8" />
                            
                            {/* Water */}
                            <rect x="300" y="350" width="100" height="150" fill="#bfdbfe" rx="20" />
                            
                            {/* Park */}
                            <rect x="50" y="50" width="100" height="80" fill="#bbf7d0" rx="10" />
                          </svg>
                        </div>
                        
                        {currentStep === 2 && matchFound && (
                          <>
                            {/* Route line */}
                            <svg className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                              <path d="M 120 400 C 120 350, 180 300, 180 200 C 180 150, 240 150, 280 150" 
                                stroke="#3b82f6" 
                                strokeWidth="5" 
                                strokeLinecap="round" 
                                strokeDasharray="10,5"
                                fill="none" />
                            </svg>
                            
                            {/* Pickup pin */}
                            <div className="absolute left-[120px] top-[400px] -translate-x-1/2 -translate-y-full">
                              <div className="w-6 h-6 rounded-full bg-carp-blue border-4 border-white shadow-lg"></div>
                              <div className="w-2 h-10 bg-carp-blue absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full"></div>
                            </div>
                            
                            {/* Destination pin */}
                            <div className="absolute left-[280px] top-[150px] -translate-x-1/2 -translate-y-full">
                              <div className="w-6 h-6 rounded-full bg-red-500 border-4 border-white shadow-lg"></div>
                              <div className="w-2 h-10 bg-red-500 absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full"></div>
                            </div>
                            
                            {/* Potential pickup spots */}
                            <div className="absolute left-[180px] top-[330px] -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg"></div>
                            </div>
                            <div className="absolute left-[150px] top-[250px] -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg"></div>
                            </div>
                          </>
                        )}
                        
                        {currentStep === 3 && (
                          <>
                            {/* Route line */}
                            <svg className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                              <path d="M 120 400 C 120 350, 180 300, 180 200 C 180 150, 240 150, 280 150" 
                                stroke="#3b82f6" 
                                strokeWidth="5" 
                                strokeLinecap="round"
                                fill="none" />
                            </svg>
                            
                            {/* Pickup pin */}
                            <div className="absolute left-[120px] top-[400px] -translate-x-1/2 -translate-y-full">
                              <div className="w-6 h-6 rounded-full bg-carp-blue border-4 border-white shadow-lg"></div>
                              <div className="w-2 h-10 bg-carp-blue absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full"></div>
                            </div>
                            
                            {/* Destination pin */}
                            <div className="absolute left-[280px] top-[150px] -translate-x-1/2 -translate-y-full">
                              <div className="w-6 h-6 rounded-full bg-red-500 border-4 border-white shadow-lg"></div>
                              <div className="w-2 h-10 bg-red-500 absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full"></div>
                            </div>
                            
                            {/* Car icon moving along route */}
                            <div className="absolute left-[180px] top-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse">
                              <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-carp-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* App UI overlay */}
                    <div className="relative h-full w-full">
                      {/* App header */}
                      <div className="absolute top-0 left-0 right-0 bg-white shadow-sm p-4 rounded-t-[28px]">
                        <div className="flex justify-between items-center">
                          <button className="rounded-full bg-gray-100 p-2">
                            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                          </button>
                          <h3 className="font-medium">Find a Ride</h3>
                          <button className="rounded-full bg-gray-100 p-2">
                            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* App bottom panel */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg overflow-hidden transition-all duration-500"
                        style={{ height: currentStep === 1 ? '250px' : currentStep === 2 ? '350px' : '400px' }}>
                        {currentStep === 1 && (
                          <div className="p-6">
                            <h4 className="font-bold text-lg mb-4">Where are you going?</h4>
                            
                            <div className="space-y-4 mb-6">
                              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                  <MapPin className="h-4 w-4 text-carp-blue" />
                                </div>
                                <input 
                                  type="text" 
                                  className="flex-1 border-none text-sm focus:outline-none" 
                                  placeholder="Pickup location"
                                  value={pickupLocation}
                                  onChange={(e) => setPickupLocation(e.target.value)}
                                />
                              </div>
                              
                              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                  <MapPin className="h-4 w-4 text-red-500" />
                                </div>
                                <input 
                                  type="text" 
                                  className="flex-1 border-none text-sm focus:outline-none" 
                                  placeholder="Destination"
                                  value={destination}
                                  onChange={(e) => setDestination(e.target.value)}
                                />
                              </div>
                            </div>
                            
                            <Button 
                              className="w-full bg-carp-blue hover:bg-carp-blue/90 text-white"
                              onClick={handleSearch}
                              disabled={!pickupLocation || !destination}
                            >
                              Find Rides
                            </Button>
                          </div>
                        )}
                        
                        {currentStep === 2 && (
                          <div className="p-6">
                            <h4 className="font-bold text-lg mb-4">Available Rides</h4>
                            
                            {isSearching ? (
                              <div className="flex flex-col items-center justify-center py-10">
                                <div className="w-16 h-16 border-4 border-carp-blue border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="text-gray-500">Finding the best matches for you...</p>
                              </div>
                            ) : (
                              <div className="space-y-4">
                                {matchFound && (
                                  <>
                                    <div onClick={selectRide} className="border border-gray-200 rounded-lg p-4 hover:border-carp-blue hover:shadow-md transition-all cursor-pointer">
                                      <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                          <span className="font-medium text-gray-700">JD</span>
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex justify-between">
                                            <h5 className="font-medium">John's Tesla Model 3</h5>
                                            <span className="text-lg font-bold text-carp-blue">$12</span>
                                          </div>
                                          <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span>4.9 (120 trips)</span>
                                          </div>
                                          <div className="flex flex-wrap gap-1 mb-2">
                                            <span className="px-2 py-1 bg-blue-50 text-carp-blue rounded-full text-xs">Leaving in 15 min</span>
                                            <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">2 seats left</span>
                                          </div>
                                          <div className="flex items-center text-xs text-gray-500">
                                            <Clock className="h-3 w-3 mr-1" />
                                            <span>25 min trip • Pickup 0.2 miles away</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="border border-gray-200 rounded-lg p-4 hover:border-carp-blue hover:shadow-md transition-all cursor-pointer">
                                      <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                          <span className="font-medium text-gray-700">SM</span>
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex justify-between">
                                            <h5 className="font-medium">Sarah's Honda Civic</h5>
                                            <span className="text-lg font-bold text-carp-blue">$9</span>
                                          </div>
                                          <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span>4.7 (85 trips)</span>
                                          </div>
                                          <div className="flex flex-wrap gap-1 mb-2">
                                            <span className="px-2 py-1 bg-blue-50 text-carp-blue rounded-full text-xs">Leaving in 30 min</span>
                                            <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">3 seats left</span>
                                          </div>
                                          <div className="flex items-center text-xs text-gray-500">
                                            <Clock className="h-3 w-3 mr-1" />
                                            <span>30 min trip • Pickup 0.4 miles away</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        
                        {currentStep === 3 && (
                          <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="font-bold text-lg">Trip Details</h4>
                              <div className="bg-green-100 text-green-600 rounded-full px-3 py-1 text-xs font-medium">
                                Confirmed
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-4 mb-6">
                              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                <span className="font-medium text-gray-700">JD</span>
                              </div>
                              <div>
                                <h5 className="font-medium">John Doe • Tesla Model 3</h5>
                                <div className="flex items-center text-sm text-gray-500">
                                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span>4.9 • White • License: ABC-1234</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                  <MapPin className="h-3 w-3 text-carp-blue" />
                                </div>
                                <p className="text-sm">123 Main St, San Francisco</p>
                              </div>
                              <div className="border-l-2 border-dashed border-gray-300 h-6 ml-3"></div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                  <MapPin className="h-3 w-3 text-red-500" />
                                </div>
                                <p className="text-sm">456 Market St, San Francisco</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-6">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm text-gray-700">Arriving in <strong>8 minutes</strong></span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm text-gray-700">2 co-riders</span>
                              </div>
                            </div>
                            
                            <div className="flex justify-between gap-4">
                              <Button variant="outline" className="flex-1 gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Message
                              </Button>
                              <Button variant="outline" className="flex-1 gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call
                              </Button>
                              <Button variant="outline" className="flex-1 gap-2 text-red-500 hover:bg-red-50">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Cancel
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
                <div className="absolute -top-8 -right-4 w-16 h-16 bg-green-200 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart technology for smarter rides
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our advanced routing system combines multiple factors to create the perfect ride experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                number: 1,
                title: "Route Matching",
                description: "Our algorithm analyzes thousands of potential routes to find drivers and riders with similar paths.",
                icon: <Route className="h-8 w-8 text-carp-blue" />,
              },
              {
                number: 2,
                title: "Schedule Optimization",
                description: "We analyze timing preferences to match people with compatible schedules, minimizing wait times.",
                icon: <Clock className="h-8 w-8 text-carp-blue" />,
              },
              {
                number: 3,
                title: "Preference Analysis",
                description: "From music taste to conversation levels, we match you with like-minded carpoolers.",
                icon: <Users className="h-8 w-8 text-carp-blue" />,
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Number indicator */}
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-carp-blue text-white flex items-center justify-center font-bold text-xl z-0">
                  {step.number}
                </div>
                
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-10 h-2 bg-blue-100 translate-x-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-background">
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
              <div key={index} className="text-center p-6 rounded-xl glass-effect">
                <h3 className="text-4xl font-bold text-carp-blue mb-2">{stat.value}</h3>
                <p className="font-medium text-xl mb-2">{stat.label}</p>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience smarter rides?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join thousands of users who are saving time, money, and the environment with Carp's intelligent routing.
          </p>
          <Button
            size="lg"
            className="bg-carp-blue hover:bg-carp-blue/90 text-white"
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Download Carp Now
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SmartRouting;
