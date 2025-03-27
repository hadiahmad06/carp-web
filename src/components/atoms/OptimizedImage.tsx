
import { useState, useEffect, useRef } from 'react';
import { createPlaceholderBlur, getOptimizedUnsplashUrl, generateSrcSet, isInViewport } from '@/utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  unsplashId?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const OptimizedImage = ({
  src,
  alt,
  unsplashId,
  width = 800,
  height,
  className = '',
  priority = false,
  objectFit = 'cover'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderBlur = createPlaceholderBlur();
  
  // Check if it's an Unsplash URL
  const isUnsplash = unsplashId || src.includes('unsplash.com');
  
  // Get optimized source
  const optimizedSrc = isUnsplash && unsplashId 
    ? getOptimizedUnsplashUrl(unsplashId, { width, height, format: 'webp' })
    : src;

  // Generate srcSet for responsive images
  const srcSet = isUnsplash && unsplashId 
    ? generateSrcSet(unsplashId)
    : undefined;
  
  useEffect(() => {
    if (priority || isVisible) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [priority]);
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}
      ref={imgRef}
    >
      {/* Placeholder or low-quality image */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholderBlur})` }}
        />
      )}
      
      {/* Actual image */}
      {(priority || isVisible) && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${width}px`}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectFit }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
