
import { useEffect, useRef } from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      icon: MapPin,
      color: 'bg-carp-blue',
      title: "Set your route",
      description: "Enter your start and end points along with your schedule to find matching rides."
    },
    {
      icon: Clock,
      color: 'bg-green-500',
      title: "Choose your ride",
      description: "Browse available rides, check driver profiles and ratings, and select your preferred option."
    },
    {
      icon: Car,
      color: 'bg-purple-500',
      title: "Enjoy the journey",
      description: "Meet at the pickup location, share the ride, split costs, and maybe make a new friend."
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-background to-carp-lightBlue/20"
    >
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-20 scroll-animation">
          <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
            Simple Process
          </div>
          <h2 className="font-bold mb-4">
            How Carp Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started with Carp is easy. Follow these simple steps to begin your ridesharing journey.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-carp-blue via-green-500 to-purple-500 opacity-20"></div>
          
          <div className="space-y-20 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className={`scroll-animation md:flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step number indicator (mobile) */}
                  <div className="md:hidden mb-6 flex justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.color} shadow-lg text-white font-bold text-xl`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className={`md:w-[45%] ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {/* Center point (desktop) */}
                  <div className="hidden md:flex w-[10%] justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step.color} shadow-lg z-10`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Image section */}
                  <div className="md:w-[45%] mt-6 md:mt-0">
                    <div className={`glass-effect rounded-2xl overflow-hidden aspect-video md:aspect-auto md:h-64 ${isEven ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center p-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step.color} md:hidden`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        {/* We'll replace this with a proper illustration or screenshot */}
                        <div className="hidden md:block w-full h-full bg-[url('https://images.unsplash.com/photo-1556155092-490a1ba16284')] bg-cover bg-center rounded-lg opacity-80"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
