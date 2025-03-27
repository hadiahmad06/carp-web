
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/button';
import { Users, Music, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms/card';
import CallToAction from '@/components/organisms/CallToAction';


// Mock data for community events
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
    id: 2,
    title: "Charli XCX - BRAT 2025",
    location: "Target Center, Minneapolis",
    date: "Apr 26, 2025",
    attendees: 17,
    image: "https://prismic-images.tmol.io/ticketmaster-tm-global/43265267-ca5b-413c-bd9a-557c886593bb_charli+xcx+v1.jpg"
  },
];

// Mock data for success stories
const successStories = [
  {
    id: 1,
    title: "From Carpoolers to Bandmates",
    story: "5 strangers carpooled to a rock concert and discovered they all played instruments. Today, they're 'The Commuters' - a rising indie band with their debut album.",
    image: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  },
  {
    id: 2,
    title: "Startup Born in a Carpool",
    story: "Three tech professionals who regularly carpooled to work realized they shared a vision for a better project management tool. Their startup just secured $2M in funding.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Cross-Country Adventure Buddies",
    story: "What started as a one-time carpool to a music festival turned into an annual tradition. This group of 6 friends now plans cross-country road trips every summer.",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const CommunityDriven = () => {
  const [selectedEvent, setSelectedEvent] = useState(communityEvents[0]);
  const [isAppVisible, setIsAppVisible] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

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
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-purple-100 text-purple-600 rounded-full px-4 py-1 font-medium mb-4">
              Community Driven
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connect with like-minded <br/> <span className="text-purple-600">riders</span> and <span className="text-purple-600">drivers</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Build meaningful connections with verified users from your college, workplace, 
              or community - turning everyday commutes into social opportunities.
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
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                onClick={() => document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Mockup Section */}
      <section
        ref={appRef}
        className="py-20 px-6 bg-gradient-to-b from-purple-50 to-background overflow-hidden relative"
      >
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
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Build Your Trusted Network</h3>
                    <p className="text-muted-foreground">Connect with verified users from your college, workplace, or community for a trusted experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                    <Music className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Share Interests</h3>
                    <p className="text-muted-foreground">Match with riders who share your music taste, podcast preferences, or conversation topics.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Community Recognition</h3>
                    <p className="text-muted-foreground">Earn badges and rewards for being an active community member and helping others commute.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[360px]">
                {/* Phone frame */}
                <div className={`rounded-[40px] bg-black p-6 shadow-xl transition-all duration-1000 ${isAppVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  {/* App screen */}
                  <div className="rounded-[28px] overflow-hidden bg-purple-50 h-[620px]">
                    {/* App header */}
                    <div className="bg-purple-600 text-white p-4">
                      <div className="flex justify-between items-center">
                        <button className="rounded-full bg-white/20 p-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <h3 className="font-medium">Upcoming Events</h3>
                        <button className="rounded-full bg-white/20 p-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="p-4 overflow-auto h-[calc(100%-64px)]">
                      <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory">
                        {communityEvents.map((event) => (
                          <div 
                            key={event.id}
                            className={`snap-start shrink-0 w-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${selectedEvent.id === event.id ? 'ring-4 ring-purple-600' : 'ring-0'}`}
                            onClick={() => setSelectedEvent(event)}
                          >
                            <img src={event.image} alt={event.title} className="h-32 w-full object-cover" />
                            <div className="p-3 bg-white">
                              <h4 className="font-medium text-sm truncate">{event.title}</h4>
                              <p className="text-xs text-gray-500">{event.date}</p>
                              <div className="flex items-center mt-2 text-xs gap-1">
                                <Users className="h-3 w-3 text-purple-600" />
                                <span>{event.attendees} carpoolers</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 bg-white rounded-xl overflow-hidden">
                        <img src={selectedEvent.image} alt={selectedEvent.title} className="h-40 w-full object-cover" />
                        <div className="p-4">
                          <h3 className="font-bold text-lg">{selectedEvent.title}</h3>
                          <p className="text-gray-500 text-sm mb-2">{selectedEvent.location}</p>
                          <p className="text-gray-700 text-sm">{selectedEvent.date}</p>
                          
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex -space-x-2">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                                  {String.fromCharCode(65 + i)}
                                </div>
                              ))}
                              <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-medium text-purple-600">
                                +{selectedEvent.attendees - 4}
                              </div>
                            </div>
                            <Button 
                              className="bg-purple-600 hover:bg-purple-700 text-white text-xs"
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
                            <div key={i} className="bg-white rounded-xl p-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                  {String.fromCharCode(74 + i)}
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">From {['Downtown', 'University', 'Westside'][i]}</h5>
                                  <p className="text-xs text-gray-500">{1 + i} seats left • {['10:30 AM', '4:45 PM', '6:00 PM'][i]}</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="text-xs border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                                Request
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-200 rounded-full opacity-60"></div>
                <div className="absolute -top-8 -right-4 w-16 h-16 bg-carp-blue rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 rounded-full px-4 py-1 font-medium mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connections that go beyond the ride
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From carpools to lasting friendships, business partnerships, and more. 
              See how Carp is bringing people together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">{story.title}</h3>
                  <p className="text-muted-foreground">{story.story}</p>
                  {/* <div className="mt-4 flex items-center text-purple-600">
                    <Heart className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Read full story</span>
                  </div> */}
                </CardContent>
              </Card>
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
