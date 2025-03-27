
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/button';
import { MessageSquare, Send, Image, Smile, Mic, Clock, Phone } from 'lucide-react';
import CallToAction from '@/components/organisms/CallToAction';

const InAppChat = () => {
  const [isAppVisible, setIsAppVisible] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  const [selectedChat, setSelectedChat] = useState('group');
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<{id: number, text: string, sender: string, time: string, isUser?: boolean}[]>([
    {id: 1, text: "I'll be at the campus center at 5pm", sender: "Alex", time: "4:30 PM"},
    {id: 2, text: "Perfect! I'll meet you there.", sender: "You", time: "4:32 PM", isUser: true},
    {id: 3, text: "Can we stop for coffee on the way?", sender: "Mia", time: "4:35 PM"},
    {id: 4, text: "Sure, there's a good place right on the route", sender: "You", time: "4:38 PM", isUser: true},
    {id: 5, text: "ETA is about 20 minutes with traffic", sender: "Alex", time: "4:45 PM"},
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Scroll to bottom of chat whenever messages change
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: newMessage.trim(),
        sender: "You",
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        isUser: true
      }]);
      setNewMessage('');

      // Simulate reply after 1-2 seconds
      const replyDelay = Math.random() * 1000 + 1000;
      setTimeout(() => {
        const replies = [
          "Sounds good to me!",
          "I'm already on my way.",
          "Do you have room for one more passenger?",
          "Thanks for organizing this carpool!",
          "Can't wait to share the ride with you all."
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        const senders = ["Alex", "Mia", "Jordan"];
        const randomSender = senders[Math.floor(Math.random() * senders.length)];
        
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: randomReply,
          sender: randomSender,
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }]);
      }, replyDelay);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 font-medium mb-4">
              In-App Chat
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless communication <br/> <span className="text-orange-600">for every trip</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Connect with drivers and co-riders through our secure in-app messaging system. 
              Coordinate pickups, share updates, and make new connections.
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
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                onClick={() => document.getElementById('chat-features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Chat Features
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Mockup Section */}
      <section
        ref={appRef}
        className="py-20 px-6 bg-gradient-to-b from-orange-50 to-background overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Stay Connected On The Go</h2>
              <p className="text-muted-foreground mb-8">
                Our in-app chat system makes coordination simple and builds community among carpoolers.
                Share updates, ask questions, and get to know your co-riders before and during your trip.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Group & Private Chats</h3>
                    <p className="text-muted-foreground">Communicate with your entire carpool or message individuals directly.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Real-time Updates</h3>
                    <p className="text-muted-foreground">Get automatic notifications about ETA changes, route updates, and driver location.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Voice & Video Calls</h3>
                    <p className="text-muted-foreground">Make secure calls directly through the app for quick coordination when texting isn't enough.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[360px]">
                {/* Phone frame */}
                <div className={`rounded-[40px] bg-black p-6 shadow-xl transition-all duration-1000 ${isAppVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  {/* App screen */}
                  <div className="rounded-[28px] overflow-hidden bg-gray-50 h-[620px] flex flex-col">
                    {/* App header */}
                    <div className="bg-orange-600 text-white p-4">
                      <div className="flex justify-between items-center">
                        <button className="rounded-full bg-white/20 p-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <div className="flex flex-col items-center">
                          <h3 className="font-medium">Campus Carpool</h3>
                          <span className="text-xs text-white/80">Alex, Mia, Jordan, You</span>
                        </div>
                        <button className="rounded-full bg-white/20 p-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Chat tabs */}
                    <div className="flex border-b bg-white">
                      <button
                        className={`flex-1 py-3 font-medium text-sm ${selectedChat === 'group' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                        onClick={() => setSelectedChat('group')}
                      >
                        Group Chat
                      </button>
                      <button
                        className={`flex-1 py-3 font-medium text-sm ${selectedChat === 'driver' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                        onClick={() => setSelectedChat('driver')}
                      >
                        Driver
                      </button>
                      <button
                        className={`flex-1 py-3 font-medium text-sm ${selectedChat === 'trip' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                        onClick={() => setSelectedChat('trip')}
                      >
                        Trip Info
                      </button>
                    </div>
                    
                    {/* Chat messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-white">
                      {/* Trip status card */}
                      <div className="bg-orange-50 rounded-lg p-3 mb-4 text-center text-sm">
                        <p className="font-medium text-orange-700 mb-1">Trip scheduled for today at 5:00 PM</p>
                        <p className="text-orange-600">ETA to destination: 5:35 PM</p>
                      </div>
                      
                      {/* Messages */}
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] ${message.isUser ? 'bg-carp-blue text-white rounded-t-lg rounded-bl-lg' : 'bg-gray-100 text-gray-800 rounded-t-lg rounded-br-lg'} p-3`}>
                              {!message.isUser && (
                                <div className="font-medium text-xs mb-1">{message.sender}</div>
                              )}
                              <p className="text-sm">{message.text}</p>
                              <div className={`text-right text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                                {message.time}
                              </div>
                            </div>
                          </div>
                        ))}
                        <div ref={chatEndRef} />
                      </div>
                    </div>
                    
                    {/* Message input */}
                    <div className="bg-white p-3 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
                            <Image className="h-5 w-5" />
                          </button>
                          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
                            <Smile className="h-5 w-5" />
                          </button>
                          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
                            <Mic className="h-5 w-5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleSendMessage();
                            }
                          }}
                        />
                        <button 
                          className={`rounded-full p-2 ${newMessage.trim() ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-400'}`}
                          onClick={handleSendMessage}
                          disabled={!newMessage.trim()}
                        >
                          <Send className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-200 rounded-full opacity-60"></div>
                <div className="absolute -top-8 -right-4 w-16 h-16 bg-carp-blue rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chat Features Section */}
      <section id="chat-features" className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 font-medium mb-4">
              Chat Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Communication tools designed for carpoolers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our full-featured messaging system makes coordination simple and builds community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>,
                title: "Group Chats",
                description: "Coordinate with everyone in your carpool at once for efficient communication."
              },
              {
                icon: <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>,
                title: "Private Messaging",
                description: "Direct message any rider or driver in your carpool for one-on-one communication."
              },
              {
                icon: <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>,
                title: "Video Calls",
                description: "Start a quick video call to coordinate when you're close to the pickup point."
              },
              {
                icon: <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>,
                title: "Location Sharing",
                description: "Share your real-time location for easy meetups at pickup points."
              },
              {
                icon: <Image className="h-8 w-8 text-orange-600" />,
                title: "Photo Sharing",
                description: "Share images of your car, pickup location, or anything relevant to help coordination."
              },
              {
                icon: <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>,
                title: "Smart Notifications",
                description: "Receive timely alerts about important messages, location updates, and ETA changes."
              },
              {
                icon: <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>,
                title: "Chat History",
                description: "Access previous conversations for reference, even after the trip is complete."
              },
              {
                icon: <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>,
                title: "Privacy Controls",
                description: "Customize who can message you and maintain your privacy with advanced settings."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 font-medium mb-4">
                  Success Story
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  "From Chat to Friendship"
                </h2>
                <p className="text-muted-foreground mb-6">
                  "What started as a casual chat in the Carp app became a lasting friendship. During our carpool to a concert, we discovered we had similar tastes in music and were both amateur guitarists. Through the in-app chat, we kept in touch after the ride and eventually formed a band with three other carpoolers we met through the app. Now we're playing local venues and still carpooling to gigs together!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-medium">Jamie & Carlos</p>
                    <p className="text-sm text-muted-foreground">Founding members of "The Commuters"</p>
                  </div>
                </div>
              </div>
              <div className="h-64 md:h-auto bg-orange-100">
                <img 
                  src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                  alt="Band members" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default InAppChat;
