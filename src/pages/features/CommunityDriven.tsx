import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/button';
import { Users, Star, Heart, Music, ChevronLeft, Plus } from 'lucide-react';
import CallToAction from '@/components/organisms/CallToAction';
import FeatureSection from '@/components/molecules/FeatureSection';
import FeatureCard from '@/components/molecules/FeatureCard';
import MobileAppUI from '@/components/molecules/MobileAppUI';
import { themeColors } from '@/styles/theme';
import { cn } from '@/lib/utils';

const CommunityDriven = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(0);
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

  const communityEvents = [
    {
      id: 1,
      title: "Nettspend",
      location: "Varsity Theater, Minneapolis",
      date: "Mar 27, 2025",
      attendees: 65,
      image: "https://s1.ticketm.net/dam/a/fea/c42e4eff-96bf-42cd-b782-ff9f8e811fea_RETINA_PORTRAIT_3_2.jpg"
    },
    {
      id: 2,
      title: "Franz Ferdinand",
      location: "Fillmore Minneapolis",
      date: "Apr 4, 2025",
      attendees: 14,
      image: "https://s1.ticketm.net/dam/a/3df/3cf40085-ff9c-49ab-927f-48bc27b4e3df_RETINA_PORTRAIT_3_2.jpg"
    },
    {
      id: 3,
      title: "Charli XCX - BRAT 2025",
      location: "Target Center, Minneapolis",
      date: "Apr 26, 2025",
      attendees: 17,
      image: "https://prismic-images.tmol.io/ticketmaster-tm-global/43265267-ca5b-413c-bd9a-557c886593bb_charli+xcx+v1.jpg"
    }
  ];

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
              <h2 className="text-3xl font-bold mb-6">Find Events and Connect</h2>
              <p className="text-muted-foreground mb-8">
                Discover events in your area with active carpools. Join existing groups or create your own.
                Connect with people based on shared interests and destinations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Build Your Trusted Network</h3>
                    <p className="text-muted-foreground">Connect with verified users from your college, workplace, or community for a trusted experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Music className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Share Interests</h3>
                    <p className="text-muted-foreground">Match with riders who share your music taste, podcast preferences, or conversation topics.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Community Recognition</h3>
                    <p className="text-muted-foreground">Earn badges and rewards for being an active community member and helping others commute.</p>
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
                    <h3 className="font-medium">Upcoming Events</h3>
                    <button className="rounded-full bg-white/20 p-2">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory">
                    {communityEvents.map((event, index) => (
                      <div 
                        key={event.id}
                        className={`snap-start shrink-0 w-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${selectedEvent === index ? 'ring-4 ring-orange-600' : 'ring-0'}`}
                        onClick={() => setSelectedEvent(index)}
                      >
                        <img src={event.image} alt={event.title} className="h-32 w-full object-cover" />
                        <div className="p-3 bg-background">
                          <h4 className="font-medium text-sm truncate">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">{event.date}</p>
                          <div className="flex items-center mt-2 text-xs gap-1">
                            <Users className="h-3 w-3 text-orange-600" />
                            <span>{event.attendees} carpoolers</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 bg-background rounded-xl overflow-hidden">
                    <img src={communityEvents[selectedEvent].image} alt={communityEvents[selectedEvent].title} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{communityEvents[selectedEvent].title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{communityEvents[selectedEvent].location}</p>
                      <p className="text-foreground text-sm">{communityEvents[selectedEvent].date}</p>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-orange-100 border-2 border-background flex items-center justify-center text-xs font-medium">
                              {String.fromCharCode(65 + i)}
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-background flex items-center justify-center text-xs font-medium text-orange-600">
                            +{communityEvents[selectedEvent].attendees - 4}
                          </div>
                        </div>
                        <Button 
                          className="bg-orange-600 hover:bg-orange-700 text-white text-xs"
                          size="sm"
                        >
                          Join Carpool
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Active Carpools</h4>
                    <div className="space-y-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-background rounded-xl p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                              {String.fromCharCode(74 + i)}
                            </div>
                            <div>
                              <h5 className="font-medium text-sm">From {['Downtown', 'University', 'Westside'][i]}</h5>
                              <p className="text-xs text-muted-foreground">{1 + i} seats left • {['10:30 AM', '4:45 PM', '6:00 PM'][i]}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            Request
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MobileAppUI>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Community Driven"
        subtitle="Join a vibrant community of carpoolers who share more than just rides. Build connections, make friends, and contribute to a sustainable future."
        badge="Community Features"
        className="bg-background"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Community Profiles"
            description="Create rich profiles showcasing your interests and preferences to find like-minded carpoolers."
            icon={Users}
            color={cn(themeColors.feature.orange.light.bg, themeColors.feature.orange.dark.bg)}
            linkTo="/features/community"
            delay={100}
          />
          <FeatureCard
            title="Ratings & Reviews"
            description="Build trust through transparent feedback and maintain high community standards."
            icon={Star}
            color={cn(themeColors.feature.orange.light.bg, themeColors.feature.orange.dark.bg)}
            linkTo="/features/community"
            delay={200}
          />
          <FeatureCard
            title="Community Events"
            description="Organize and join local events to strengthen connections beyond carpooling."
            icon={Heart}
            color={cn(themeColors.feature.orange.light.bg, themeColors.feature.orange.dark.bg)}
            linkTo="/features/community"
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
                value: "50K+",
                label: "Active Members",
                description: "Growing community of regular carpoolers"
              },
              {
                value: "4.8/5",
                label: "Community Rating",
                description: "Average rating from verified members"
              },
              {
                value: "1000+",
                label: "Monthly Events",
                description: "Community-organized carpooling events"
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

export default CommunityDriven;
