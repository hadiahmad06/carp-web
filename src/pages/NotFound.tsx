
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/atoms/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="glass-effect rounded-2xl p-12 max-w-md w-full text-center animate-fade-in">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-xl bg-carp-blue flex items-center justify-center">
            <span className="text-white font-medium text-2xl">404</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It might have been removed, renamed, or didn't exist in the first place.
        </p>
        <Button 
          size="lg"
          className="bg-carp-blue hover:bg-carp-blue/90 text-white"
          onClick={() => window.location.href = '/'}
        >
          Return to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
