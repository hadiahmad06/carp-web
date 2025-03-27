
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  rating: number;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Thinking about mapping for Carp has also made us consider its impact beyond our app, like how it could be used for environmental efforts, city planning, and other real-world problems.",
    name: "Hadi Ahmad",
    role: "Junior at University of Minnesota",
    rating: 5,
    avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQEX9KIMw7BTqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715500002167?e=2147483647&v=beta&t=N1mwXiw1owAkS3Aci-BdE9Gbslr41iS7xfRkMDMOQlI"
  },
  {
    id: 2,
    content: "Building Carp has made us realize how powerful geospatial mapping can be, not just for navigation, but for optimizing transportation and community connections.",
    name: "Bruce Chen",
    role: "Computer Science Student",
    rating: 5,
    avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQFoLnHC1fsqjQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720151833611?e=2147483647&v=beta&t=Kd4Sjq2G6aRIX7PwCAnu14fsTveFZuUlxaus7Is2Lho"
  },
  {
    id: 3,
    content: "geeked",
    name: "Dhruv Gupta",
    role: "2024 MN Cup Semi-finalist",
    rating: 5,
    avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQEwBFVrKBAq-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718302868006?e=2147483647&v=beta&t=-8YsJMz-bcouGiRLwq71KmvZXp9dUgqsEVHfi-KXQ0A"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const goToTestimonial = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const nextTestimonial = () => {
    goToTestimonial((activeIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

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
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-carp-lightBlue rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-carp-lightBlue rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16 scroll-animation">
          <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium mb-4">
            User Stories
          </div>
          <h2 className="font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear from the students and professionals who use Carp every day.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="relative scroll-animation"
        >
          <div className="relative overflow-hidden py-10">
            <div 
              className="flex transition-transform duration-500 ease-smooth"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-effect rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img 
                            src={testimonial.avatarUrl} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <div className="flex items-center justify-center mt-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={cn(
                                  i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <blockquote>
                          <p className="text-lg md:text-xl italic leading-relaxed">"{testimonial.content}"</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full glass-effect hover:bg-carp-blue/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "bg-carp-blue scale-110" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full glass-effect hover:bg-carp-blue/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
