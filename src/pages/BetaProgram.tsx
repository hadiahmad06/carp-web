
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { Mail, Instagram, Twitter } from 'lucide-react';

const BetaProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Carp - Beta Program</title>
        <meta name="description" content="Join the Carp Beta Program and be among the first to try our innovative carpooling app." />
      </Helmet>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
              Join our beta testers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Beta Program</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our app is still in development, and will not be public for a while. If you're interested in joining our beta program, contact us below.
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6">Why join our beta program?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-4 border border-border rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Early Access</h3>
                <p className="text-muted-foreground">Be among the first to experience our innovative carpooling platform before it's available to the public.</p>
              </div>
              
              <div className="p-4 border border-border rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Shape the Product</h3>
                <p className="text-muted-foreground">Your feedback will directly influence the app's development, helping us create a better experience for everyone.</p>
              </div>
              
              <div className="p-4 border border-border rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Exclusive Features</h3>
                <p className="text-muted-foreground">Get access to experimental features and updates before they're rolled out to the general public.</p>
              </div>
              
              <div className="p-4 border border-border rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground">Connect with like-minded early adopters who are passionate about efficient and sustainable transportation.</p>
              </div>
            </div>
            
            <div className="bg-carp-blue/10 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a 
                  href="https://instagram.com/carp.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="text-carp-blue" />
                  <span className="font-medium">@carp.app</span>
                </a>
                <a 
                  href="https://x.com/carp_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Twitter className="text-carp-blue" />
                  <span className="font-medium">@carp_app</span>
                </a>
                <a 
                  href="mailto:carpappmail@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
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
