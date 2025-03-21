
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, UserCheck, Bell, MapPin } from 'lucide-react';
import CallToAction from '@/components/CallToAction';


const SafetyFirst = () => {
  const [verificationStep, setVerificationStep] = useState(1);
  const [isAppVisible, setIsAppVisible] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [faceDetected, setFaceDetected] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isIdScanned, setIsIdScanned] = useState(false);

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

  const startFaceVerification = () => {
    setIsCameraActive(true);
    
    // Simulate face detection after 2 seconds
    setTimeout(() => {
      setFaceDetected(true);
      
      // Move to next step after 1 more second
      setTimeout(() => {
        setIsCameraActive(false);
        setVerificationStep(3);
      }, 1000);
    }, 2000);
  };

  const simulateIdScan = () => {
    setIsIdScanned(true);
    
    // Move to completion step after 1.5 seconds
    setTimeout(() => {
      setVerificationStep(4);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-green-100 text-green-600 rounded-full px-4 py-1 font-medium mb-4">
              Safety First
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your safety is our <br/> <span className="text-green-600">top priority</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Advanced verification, real-time tracking, and emergency features 
              ensure peace of mind for every rider and driver.
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
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => document.getElementById('safety-features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Safety Features
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Mockup Section */}
      <section
        ref={appRef}
        className="py-20 px-6 bg-gradient-to-b from-green-50 to-background overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive ID Verification</h2>
              <p className="text-muted-foreground mb-8">
                Our multi-step verification process ensures that everyone on the platform is who they claim to be.
                Advanced biometric checks and official ID verification keep our community safe.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <UserCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Identity Verification</h3>
                    <p className="text-muted-foreground">Government ID scanning, face verification, and background checks for all drivers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Real-time Trip Tracking</h3>
                    <p className="text-muted-foreground">Share your trip with trusted contacts and get notifications about route deviations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Bell className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Emergency Response</h3>
                    <p className="text-muted-foreground">One-tap emergency button alerts our safety team and shares your location with emergency contacts.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative mx-auto max-w-[360px]">
                {/* Phone frame */}
                <div className={`rounded-[40px] bg-black p-6 shadow-xl transition-all duration-1000 ${isAppVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  {/* App screen */}
                  <div className="rounded-[28px] overflow-hidden bg-white h-[620px]">
                    {/* App header */}
                    <div className="bg-green-600 text-white p-4">
                      <div className="flex justify-between items-center">
                        <button className="rounded-full bg-white/20 p-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <h3 className="font-medium">Driver Verification</h3>
                        <div className="w-9"></div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="p-6 h-[calc(100%-64px)] flex flex-col">
                      <div className="flex justify-between mb-6">
                        <div className={`w-1/4 h-1 rounded-full ${verificationStep >= 1 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                        <div className={`w-1/4 h-1 rounded-full ${verificationStep >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                        <div className={`w-1/4 h-1 rounded-full ${verificationStep >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                        <div className={`w-1/4 h-1 rounded-full ${verificationStep >= 4 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                      </div>
                      
                      {verificationStep === 1 && (
                        <div className="flex-1 flex flex-col">
                          <h4 className="text-xl font-bold mb-2">Personal Information</h4>
                          <p className="text-gray-500 text-sm mb-6">
                            Please provide your legal name as it appears on your ID
                          </p>
                          
                          <div className="space-y-4 mb-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg" 
                                placeholder="Enter your full name"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                              <input 
                                type="date" 
                                className="w-full p-3 border border-gray-300 rounded-lg" 
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                              <input 
                                type="tel" 
                                className="w-full p-3 border border-gray-300 rounded-lg" 
                                placeholder="(XXX) XXX-XXXX"
                              />
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => setVerificationStep(2)}
                              disabled={!inputValue}
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {verificationStep === 2 && (
                        <div className="flex-1 flex flex-col">
                          <h4 className="text-xl font-bold mb-2">Face Verification</h4>
                          <p className="text-gray-500 text-sm mb-6">
                            We'll take a quick selfie to verify your identity
                          </p>
                          
                          <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-64 h-64 rounded-xl overflow-hidden mb-6 relative bg-gray-100 border-2 border-dashed border-gray-300">
                              {isCameraActive && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  {faceDetected ? (
                                    <div className="animate-pulse">
                                      <div className="h-40 w-40 rounded-full border-4 border-green-500 flex items-center justify-center">
                                        <svg className="w-24 h-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="h-40 w-40 rounded-full border-4 border-dashed border-gray-400 animate-pulse">
                                      <div className="h-full w-full rounded-full border-4 border-dashed border-gray-400 animate-spin"></div>
                                    </div>
                                  )}
                                </div>
                              )}
                              
                              {!isCameraActive && (
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                  <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <p className="text-gray-500 text-sm text-center">Position your face in the center</p>
                                </div>
                              )}
                            </div>
                            
                            <div className="space-y-2 text-center mb-6">
                              <p className="text-sm font-medium">Tips for a good verification:</p>
                              <ul className="text-xs text-gray-500 text-left">
                                <li className="flex items-center gap-1">
                                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Good lighting on your face
                                </li>
                                <li className="flex items-center gap-1">
                                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Remove glasses if possible
                                </li>
                                <li className="flex items-center gap-1">
                                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Neutral expression, looking straight ahead
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                              onClick={startFaceVerification}
                              disabled={isCameraActive}
                            >
                              {isCameraActive ? 'Processing...' : 'Start Verification'}
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {verificationStep === 3 && (
                        <div className="flex-1 flex flex-col">
                          <h4 className="text-xl font-bold mb-2">ID Document Verification</h4>
                          <p className="text-gray-500 text-sm mb-6">
                            Scan your government-issued ID or driver's license
                          </p>
                          
                          <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative bg-gray-100 border-2 border-dashed border-gray-300">
                              {isIdScanned ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-white">
                                  <div className="text-center">
                                    <svg className="w-16 h-16 text-green-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-green-600 font-medium">Document Scanned</p>
                                  </div>
                                </div>
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                  <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                  </svg>
                                  <p className="text-gray-500 text-sm text-center">Place your ID within the frame</p>
                                </div>
                              )}
                            </div>
                            
                            <div className="space-y-2 text-center mb-6">
                              <p className="text-sm font-medium">Acceptable documents:</p>
                              <ul className="text-xs text-gray-500 text-left">
                                <li className="flex items-center gap-1">
                                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Driver's License
                                </li>
                                <li className="flex items-center gap-1">
                                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Passport
                                </li>
                                <li className="flex items-center gap-1">
                                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  State ID or Government ID
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                              onClick={simulateIdScan}
                              disabled={isIdScanned}
                            >
                              {isIdScanned ? 'Processing...' : 'Scan Document'}
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {verificationStep === 4 && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center">
                          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                            <Shield className="h-12 w-12 text-green-600" />
                          </div>
                          
                          <h4 className="text-2xl font-bold mb-2">Verification Complete!</h4>
                          <p className="text-gray-500 text-sm mb-8 max-w-xs">
                            Your identity has been successfully verified. You can now access all driver features.
                          </p>
                          
                          <div className="w-full mb-8">
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg mb-2">
                              <div className="flex items-center">
                                <UserCheck className="h-5 w-5 text-green-600 mr-2" />
                                <span className="text-sm font-medium">Identity Verified</span>
                              </div>
                              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg mb-2">
                              <div className="flex items-center">
                                <Shield className="h-5 w-5 text-green-600 mr-2" />
                                <span className="text-sm font-medium">Background Check Passed</span>
                              </div>
                              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                              <div className="flex items-center">
                                <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                <span className="text-sm font-medium">Trusted Driver Status</span>
                              </div>
                              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            Continue to Safety Training
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-200 rounded-full opacity-60"></div>
                <div className="absolute -top-8 -right-4 w-16 h-16 bg-carp-blue rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Safety Features Section */}
      <section id="safety-features" className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 rounded-full px-4 py-1 font-medium mb-4">
              Safety Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive safety at every step
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our multi-layered approach to safety ensures you're protected before, during, and after your ride.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-8 w-8 text-green-600" />,
                title: "Verified Users Only",
                description: "Every user undergoes rigorous identity verification before joining the platform."
              },
              {
                icon: <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>,
                title: "Community Reviews",
                description: "User ratings and detailed reviews help you choose trusted drivers and riders."
              },
              {
                icon: <MapPin className="h-8 w-8 text-green-600" />,
                title: "Real-time GPS Tracking",
                description: "Share your trip status with trusted contacts who can monitor your journey in real-time."
              },
              {
                icon: <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>,
                title: "Emergency Button",
                description: "One-tap access to emergency assistance and alerts to your pre-selected contacts."
              },
              {
                icon: <Bell className="h-8 w-8 text-green-600" />,
                title: "Route Deviation Alerts",
                description: "Get notified if your driver goes off-route, with options to take immediate action."
              },
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: "Background Checks",
                description: "All drivers undergo thorough background checks before they can offer rides."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default SafetyFirst;
