
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
    content: "Carp has been a game-changer for my daily commute to campus. I've saved over $200 a month on gas and parking, plus made some great friends along the way!",
    name: "Alex Johnson",
    role: "Engineering Student",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "As someone who was always anxious about ridesharing, Carp's security features gave me peace of mind. The verification system and in-app tracking make me feel completely safe.",
    name: "Mia Williams",
    role: "Business Major",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    content: "The flexibility of the app is incredible. Whether I need a ride at 8 AM or 8 PM, there's always someone headed my way. The scheduling feature makes planning my week so much easier.",
    name: "David Chen",
    role: "Computer Science Student",
    rating: 4,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
