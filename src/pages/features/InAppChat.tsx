import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/button';
import { MessageSquare, Send, Smile, Paperclip, Phone, Video, Settings } from 'lucide-react';
import CallToAction from '@/components/organisms/CallToAction';
import FeatureSection from '@/components/molecules/FeatureSection';
import FeatureCard from '@/components/molecules/FeatureCard';
import { themeColors } from '@/styles/theme';
import { cn } from '@/lib/utils';

const InAppChat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm on my way to pick you up.", sender: 'driver', time: '10:30 AM' },
    { id: 2, text: "Great! I'm waiting at the main entrance.", sender: 'user', time: '10:31 AM' },
    { id: 3, text: "I'm in a blue Toyota Camry.", sender: 'driver', time: '10:31 AM' },
    { id: 4, text: "Perfect, I see you!", sender: 'user', time: '10:32 AM' }
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: message, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setMessage('');

      // Simulate driver response after 1 second
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: prev.length + 1, text: "Got it! See you in a minute.", sender: 'driver', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <FeatureSection
        title="In-App Chat"
        subtitle="Stay connected with your co-riders through our secure and feature-rich in-app messaging system."
        badge="Communication"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Real-time Messaging"
            description="Instant messaging with your driver or co-riders for seamless coordination."
            icon={MessageSquare}
            color={cn(themeColors.feature.purple.light.bg, themeColors.feature.purple.dark.bg)}
            linkTo="/features/chat"
            delay={100}
          />
          <FeatureCard
            title="Voice & Video Calls"
            description="Make voice or video calls when you need to communicate more directly."
            icon={Phone}
            color={cn(themeColors.feature.purple.light.bg, themeColors.feature.purple.dark.bg)}
            linkTo="/features/chat"
            delay={200}
          />
          <FeatureCard
            title="Rich Features"
            description="Share location, files, and more through our feature-rich chat interface."
            icon={Settings}
            color={cn(themeColors.feature.purple.light.bg, themeColors.feature.purple.dark.bg)}
            linkTo="/features/chat"
            delay={300}
          />
        </div>
      </FeatureSection>

      {/* UI Example Section */}
      <section ref={sectionRef} className={cn(
        "py-20 px-6",
        themeColors.glass.light,
        themeColors.glass.dark
      )}>
        <div className="max-w-7xl mx-auto">
          <div className={cn(
            "max-w-lg mx-auto rounded-xl border transition-all duration-500 transform",
            themeColors.glass.light,
            themeColors.glass.dark,
            themeColors.border.light,
            themeColors.border.dark,
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">JD</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">John Doe</h3>
                  <p className="text-xs text-muted-foreground">Toyota Camry • ABC 123</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className={cn(
                  "p-2 rounded-full",
                  themeColors.feature.purple.light.bg,
                  themeColors.feature.purple.dark.bg
                )}>
                  <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </button>
                <button className={cn(
                  "p-2 rounded-full",
                  themeColors.feature.purple.light.bg,
                  themeColors.feature.purple.dark.bg
                )}>
                  <Video className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div className={cn(
                    "max-w-[80%] rounded-lg p-3",
                    msg.sender === 'user' ? cn(
                      themeColors.feature.purple.light.bg,
                      themeColors.feature.purple.dark.bg,
                      "rounded-br-none"
                    ) : cn(
                      themeColors.glass.light,
                      themeColors.glass.dark,
                      "rounded-bl-none"
                    )
                  )}>
                    <p className="text-foreground">{msg.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-muted-foreground hover:text-foreground">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 rounded-lg bg-background border focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className={cn(
                    "p-2 rounded-lg",
                    message.trim() ? cn(
                      themeColors.feature.purple.light.bg,
                      themeColors.feature.purple.dark.bg,
                      themeColors.feature.purple.light.text,
                      themeColors.feature.purple.dark.text
                    ) : "opacity-50 cursor-not-allowed"
                  )}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={cn("py-20 px-6", themeColors.glass.light, themeColors.glass.dark)}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "2M+",
                label: "Messages Sent Daily",
                description: "Active conversations between riders and drivers"
              },
              {
                value: "30s",
                label: "Average Response Time",
                description: "Quick communication for better coordination"
              },
              {
                value: "4.9/5",
                label: "User Satisfaction",
                description: "Based on our in-app messaging experience"
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

export default InAppChat;
