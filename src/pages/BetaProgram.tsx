
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Mail, Instagram, Twitter } from 'lucide-react';
import { useEffect, useRef } from 'react';

const BetaProgram = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [titleRef.current, cardsRef.current, contactRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Carp - Beta Program</title>
        <meta name="description" content="Join the Carp Beta Program and be among the first to try our innovative carpooling app." />
      </Helmet>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div 
            ref={titleRef} 
            className="text-center mb-16 scroll-animation"
          >
            <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4 dark:bg-carp-blue/20">
              Join our beta testers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Beta Program</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our app is still in development, and will not be public for a while. If you're interested in joining our beta program, contact us below.
            </p>
          </div>
          
          <div 
            ref={cardsRef}
            className="glass-effect rounded-2xl p-8 md:p-12 mb-16 border-t-4 border-carp-blue scroll-animation"
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Why join our beta program?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-4 border border-blue-100 bg-blue-50/30 rounded-xl dark:bg-blue-900/10 dark:border-blue-500/20 hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Early Access</h3>
                <p className="text-muted-foreground">Be among the first to experience our innovative carpooling platform before it's available to the public.</p>
              </div>
              
              <div className="p-4 border border-blue-100 bg-blue-50/30 rounded-xl dark:bg-blue-900/10 dark:border-blue-500/20 hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Shape the Product</h3>
                <p className="text-muted-foreground">Your feedback will directly influence the app's development, helping us create a better experience for everyone.</p>
              </div>
              
              <div className="p-4 border border-blue-100 bg-blue-50/30 rounded-xl dark:bg-blue-900/10 dark:border-blue-500/20 hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '200ms' }}>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Exclusive Features</h3>
                <p className="text-muted-foreground">Get access to experimental features and updates before they're rolled out to the general public.</p>
              </div>
              
              <div className="p-4 border border-blue-100 bg-blue-50/30 rounded-xl dark:bg-blue-900/10 dark:border-blue-500/20 hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '300ms' }}>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Community</h3>
                <p className="text-muted-foreground">Connect with like-minded early adopters who are passionate about efficient and sustainable transportation.</p>
              </div>
            </div>
            
            <div 
              ref={contactRef}
              className="bg-carp-blue/10 p-6 rounded-xl dark:bg-carp-blue/5 scroll-animation"
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="font-semibold text-lg mb-3 text-foreground">Contact Us</h3>
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="https://instagram.com/carp.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors dark:bg-white/10 dark:hover:bg-white/20 transform hover:translate-x-2 transition-transform duration-300"
                >
                  <Instagram className="text-carp-blue" />
                  <span className="font-medium">@carp.app</span>
                </a>
                <a 
                  href="https://x.com/carp_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors dark:bg-white/10 dark:hover:bg-white/20 transform hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: '100ms' }}
                >
                  <Twitter className="text-carp-blue" />
                  <span className="font-medium">@carp_app</span>
                </a>
                <a 
                  href="mailto:carpappmail@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors dark:bg-white/10 dark:hover:bg-white/20 transform hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: '200ms' }}
                >
                  <Mail className="text-carp-blue" />
                  <span className="font-medium">carpappmail@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BetaProgram;
