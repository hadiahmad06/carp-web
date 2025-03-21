
import { useEffect, useRef } from 'react';
import { Users, Shield, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  color,
  linkTo,
  delay = 0
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  color: string;
  linkTo: string;
  delay?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('scroll-animation-active');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className="scroll-animation p-6 rounded-2xl glass-effect group hover:shadow-md transition-all duration-400 h-full flex flex-col"
    >
      <div className={`p-3 rounded-xl ${color} mb-4 inline-flex w-fit`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-medium text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      <div className="mt-4 pt-2 border-t border-border flex-grow flex items-end">
        <div className="focus-within-visible">
          <Link to={linkTo} className="text-sm font-medium text-carp-blue flex items-center">
            Learn more 
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation-active');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 px-6 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] bg-gradient-radial from-carp-lightBlue/30 to-transparent -z-10"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16 scroll-animation">
          <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
            Why Choose Carp?
          </div>
          <h2 className="font-bold mb-4">
            Features designed to make <br /> ridesharing <span className="text-carp-blue">effortless</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our thoughtfully crafted features ensure your journey is convenient, safe, and sociable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Community Driven"
            description="Connect with verified users from your college or workplace for a trusted ridesharing experience."
            icon={Users}
            color="bg-purple-500"
            linkTo="/features/community"
            delay={100}
          />
          
          <FeatureCard
            title="Safety First"
            description="Real-time tracking, driver verification, and emergency contact features ensure peace of mind."
            icon={Shield}
            color="bg-green-500" 
            linkTo="/features/safety"
            delay={200}
          />
          
          <FeatureCard
            title="Smart Routing"
            description="Our intelligent matching algorithm finds the most efficient routes and compatible co-riders."
            icon={MapPin}
            color="bg-carp-blue"
            linkTo="/features/routing"
            delay={300}
          />
          
          <FeatureCard
            title="In-app Chat"
            description="Coordinate easily with drivers and co-riders through our secure messaging system."
            icon={MessageSquare}
            color="bg-orange-500"
            linkTo="/features/chat"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
