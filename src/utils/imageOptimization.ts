
/**
 * Utility functions for image optimization
 */

type ImageFormat = 'webp' | 'avif' | 'jpg' | 'png';

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: ImageFormat;
}

/**
 * Optimize Unsplash image URLs for better performance
 * @param imageId Unsplash image ID
 * @param options Image options (width, height, quality, format)
 * @returns Optimized image URL
 */
export const getOptimizedUnsplashUrl = (imageId: string, options: ImageOptions = {}): string => {
  const {
    width = 800,
    height,
    quality = 80,
    format = 'webp'
  } = options;
  
  let url = `https://images.unsplash.com/photo-${imageId}?w=${width}&q=${quality}&fm=${format}&auto=format`;
  
  if (height) {
    url += `&h=${height}&fit=crop`;
  }
  
  return url;
};

/**
 * Generate srcset for responsive images
 * @param imageId Unsplash image ID
 * @param options Base image options
 * @returns srcSet string for responsive images
 */
export const generateSrcSet = (imageId: string, options: ImageOptions = {}): string => {
  const widths = [320, 640, 960, 1280, 1920];
  const { format = 'webp', quality = 80 } = options;
  
  return widths
    .map(width => {
      const url = getOptimizedUnsplashUrl(imageId, { 
        ...options, 
        width,
        format 
      });
      return `${url} ${width}w`;
    })
    .join(', ');
};

/**
 * Create a placeholder blur data URL for images
 * @returns Placeholder data URL
 */
export const createPlaceholderBlur = (): string => {
  return 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22100%25%22 height%3D%22100%25%22%3E%3Crect width%3D%22100%25%22 height%3D%22100%25%22 fill%3D%22%23f1f5f9%22%2F%3E%3C%2Fsvg%3E';
};

/**
 * Check if an element is in viewport to implement lazy loading
 * @param element DOM element to check
 * @param offset Offset from viewport edge
 * @returns Boolean indicating if element is in viewport
 */
export const isInViewport = (element: Element, offset = 300): boolean => {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight + offset) &&
    rect.bottom >= -offset &&
    rect.left <= (window.innerWidth + offset) &&
    rect.right >= -offset
  );
};
