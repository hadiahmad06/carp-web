
import { useEffect } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import FareOverview from '@/components/organisms/FareOverview';
import Features from '@/components/organisms/Features';
import HowItWorks from '@/components/organisms/HowItWorks';
import Testimonials from '@/components/organisms/Testimonials';
import CallToAction from '@/components/organisms/CallToAction';
import Footer from '@/components/organisms/Footer';
import { initScrollAnimations } from '@/utils/scrollAnimation';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations with performance optimization
    const cleanup = initScrollAnimations();
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without causing a page reload
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      cleanup();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Helmet>
        <title>Carp - Smarter Carpooling for Students and Professionals</title>
        <meta name="description" content="Connecting roads, connecting people. Find, share, and manage rides with Carp! Save money on commutes and make new connections." />
      </Helmet>
      <Navbar />
      <Hero />
      <FareOverview />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
