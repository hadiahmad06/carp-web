import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/button';
import { Shield, UserCheck, Bell, Phone, Car, AlertTriangle, ChevronLeft, DollarSign, ChevronRight, MessageCircle, MapPin, Clock } from 'lucide-react';
import CallToAction from '@/components/organisms/CallToAction';
import FeatureSection from '@/components/molecules/FeatureSection';
import FeatureCard from '@/components/molecules/FeatureCard';
import MobileAppUI from '@/components/molecules/MobileAppUI';
import { themeColors } from '@/styles/theme';
import { cn } from '@/lib/utils';

type SubMenu = 'harassment' | 'driving' | 'payment' | 'support' | null;

const SafetyFirst = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenu>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const swipeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

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

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    const progress = Math.min(Math.max(diff / 200, 0), 1);
    setSwipeProgress(progress);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (swipeProgress > 0.7) {
      // Trigger emergency call
      setSwipeProgress(1);
      setTimeout(() => setSwipeProgress(0), 1000);
    } else {
      setSwipeProgress(0);
    }
  };

  const renderSubMenu = () => {
    switch (activeSubMenu) {
      case 'harassment':
        return (
          <div className="absolute inset-0 bg-black flex flex-col animate-in slide-in-from-right">
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <button onClick={() => setActiveSubMenu(null)} className="rounded-full bg-white/10 p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="font-medium text-white/90">Report Harassment or Assault</h3>
            </div>
            <div className="flex-1 p-4 space-y-3">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h5 className="font-medium text-red-500 text-sm">Physical Harassment</h5>
                  <p className="text-xs text-red-300/80">Report any unwanted physical contact</p>
                </div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h5 className="font-medium text-red-500 text-sm">Verbal Harassment</h5>
                  <p className="text-xs text-red-300/80">Report threatening or inappropriate language</p>
                </div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h5 className="font-medium text-red-500 text-sm">Safety Violation</h5>
                  <p className="text-xs text-red-300/80">Report violations of safety guidelines</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'driving':
        return (
          <div className="absolute inset-0 bg-black flex flex-col animate-in slide-in-from-right">
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <button onClick={() => setActiveSubMenu(null)} className="rounded-full bg-white/10 p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="font-medium text-white/90">Report Unsafe Driving</h3>
            </div>
            <div className="flex-1 p-4 space-y-3">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Car className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h5 className="font-medium text-red-500 text-sm">Reckless Driving</h5>
                  <p className="text-xs text-red-300/80">Speeding or dangerous maneuvers</p>
                </div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h5 className="font-medium text-red-500 text-sm">Route Deviation</h5>
                  <p className="text-xs text-red-300/80">Unexpected changes to planned route</p>
                </div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h5 className="font-medium text-red-500 text-sm">Extended Delays</h5>
                  <p className="text-xs text-red-300/80">Unexplained stops or delays</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="absolute inset-0 bg-black flex flex-col animate-in slide-in-from-right">
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <button onClick={() => setActiveSubMenu(null)} className="rounded-full bg-white/10 p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="font-medium text-white/90">Report Payment Issue</h3>
            </div>
            <div className="flex-1 p-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h5 className="font-medium text-white/90 text-sm">Incorrect Charge</h5>
                  <p className="text-xs text-white/60">Wrong amount charged for ride</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h5 className="font-medium text-white/90 text-sm">Delayed Refund</h5>
                  <p className="text-xs text-white/60">Refund not received as expected</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h5 className="font-medium text-white/90 text-sm">Payment Failed</h5>
                  <p className="text-xs text-white/60">Unable to process payment</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="absolute inset-0 bg-black flex flex-col animate-in slide-in-from-right">
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <button onClick={() => setActiveSubMenu(null)} className="rounded-full bg-white/10 p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="font-medium text-white/90">Contact Support</h3>
            </div>
            <div className="flex-1 p-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h5 className="font-medium text-white/90 text-sm">Chat Support</h5>
                  <p className="text-xs text-white/60">Message our support team</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h5 className="font-medium text-white/90 text-sm">Phone Support</h5>
                  <p className="text-xs text-white/60">Speak with a support agent</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h5 className="font-medium text-white/90 text-sm">Help Center</h5>
                  <p className="text-xs text-white/60">Browse help articles</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
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
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Real-time Trip Tracking</h3>
                    <p className="text-muted-foreground">Share your trip with trusted contacts and get notifications about route deviations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Emergency Response</h3>
                    <p className="text-muted-foreground">One-swipe emergency button alerts authorities team and shares your location with emergency contacts.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <MobileAppUI isVisible={isVisible}>
                <div className="p-4 bg-black/95 h-full flex flex-col relative">
                  <div className="flex items-center justify-between mb-4">
                    <button className="rounded-full bg-white/10 p-2">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="font-medium text-lg">Emergency & Support</h3>
                    <div className="w-9"></div>
                  </div>

                  <div className="space-y-4 flex-1">
                    {/* Report Issues Section */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white/90 mb-2">Report an Issue</h4>
                      
                      <div 
                        className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center justify-between cursor-pointer"
                        onClick={() => setActiveSubMenu('harassment')}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-medium text-red-500 text-sm truncate">Report harassment or assault</h5>
                          </div>
                        </div>
                        <ChevronLeft className="w-5 h-5 text-red-500 rotate-180 flex-shrink-0" />
                      </div>

                      <div 
                        className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex items-center justify-between cursor-pointer"
                        onClick={() => setActiveSubMenu('driving')}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                            <Car className="w-5 h-5 text-red-500" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-medium text-red-500 text-sm truncate">Report unsafe driving</h5>
                          </div>
                        </div>
                        <ChevronLeft className="w-5 h-5 text-red-500 rotate-180 flex-shrink-0" />
                      </div>

                      <div 
                        className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-between cursor-pointer"
                        onClick={() => setActiveSubMenu('payment')}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-white/80" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-medium text-white/90 text-sm truncate">Report payment issue</h5>
                          </div>
                        </div>
                        <ChevronLeft className="w-5 h-5 text-white/40 rotate-180 flex-shrink-0" />
                      </div>
                    </div>

                    <div 
                      className="rounded-lg border border-white/5 bg-white/5 p-2 flex items-center justify-between cursor-pointer"
                      onClick={() => setActiveSubMenu('support')}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white/60" />
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-medium text-white/60 text-xs truncate">Contact Support</h5>
                        </div>
                      </div>
                      <ChevronLeft className="w-4 h-4 text-white/40 rotate-180 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Emergency Help Section - Now at bottom */}
                  <div className="pt-4">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                      <h4 className="text-red-500 text-lg font-semibold mb-1">Need Immediate Help?</h4>
                      <p className="text-red-300/80 text-xs mb-3">Swipe right to call emergency services</p>
                      <div 
                        className="relative h-12 rounded-lg bg-red-950/30 overflow-hidden cursor-pointer"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleTouchStart}
                        onMouseMove={handleTouchMove}
                        onMouseUp={handleTouchEnd}
                        onMouseLeave={handleTouchEnd}
                      >
                        <div 
                          className="absolute inset-0 bg-red-600 transition-transform"
                          style={{ transform: `translateX(${-100 + (swipeProgress * 100)}%)` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          <div className="flex items-center gap-2 text-white font-medium text-sm">
                            <ChevronRight className="w-5 h-5 animate-pulse" />
                            <span>Swipe to Call Emergency Services</span>
                          </div>
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub Menus */}
                  {renderSubMenu()}
                </div>
              </MobileAppUI>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Safety First"
        subtitle="Your safety is our top priority. We've implemented comprehensive security measures to ensure a secure carpooling experience."
        badge="Safety Features"
        className="bg-background"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Identity Verification"
            description="All users undergo a thorough verification process including ID checks and background screening."
            icon={UserCheck}
            color={cn(themeColors.feature.green.light.bg, themeColors.feature.green.dark.bg)}
            linkTo="/features/safety"
            delay={100}
          />
          <FeatureCard
            title="Real-time Monitoring"
            description="Our system continuously monitors rides and can detect unusual activity or deviations from planned routes."
            icon={Car}
            color={cn(themeColors.feature.green.light.bg, themeColors.feature.green.dark.bg)}
            linkTo="/features/safety"
            delay={200}
          />
          <FeatureCard
            title="Emergency Support"
            description="24/7 emergency support team and instant access to emergency services when needed."
            icon={Phone}
            color={cn(themeColors.feature.green.light.bg, themeColors.feature.green.dark.bg)}
            linkTo="/features/safety"
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
                value: "100%",
                label: "Verified Users",
                description: "All users undergo thorough identity verification"
              },
              {
                value: "24/7",
                label: "Emergency Support",
                description: "Round-the-clock access to emergency assistance"
              },
              {
                value: "99.9%",
                label: "Safety Rating",
                description: "Based on millions of completed rides"
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

export default SafetyFirst;
