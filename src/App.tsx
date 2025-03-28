
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/atoms/toaster";
import { Toaster as Sonner } from "@/components/atoms/sonner";
import { TooltipProvider } from "@/components/atoms/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/molecules/ScrollToHash";
import { Analytics } from "@vercel/analytics/react"

// Eagerly load the Index page for faster initial load
import Index from "./pages/Index";

// Lazy load other pages for better performance
const NotFound = lazy(() => import("./pages/NotFound"));
const CommunityDriven = lazy(() => import("./pages/features/CommunityDriven"));
const SafetyFirst = lazy(() => import("./pages/features/SafetyFirst"));
const SmartRouting = lazy(() => import("./pages/features/SmartRouting"));
const InAppChat = lazy(() => import("./pages/features/InAppChat"));
const FareBreakdown = lazy(() => import("./pages/FareBreakdown"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-carp-blue">Loading...</div>
  </div>
);

// Create a singleton QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Analytics />
      <BrowserRouter basename="/">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/community" element={
            <Suspense fallback={<PageLoader />}>
              <CommunityDriven />
            </Suspense>
          } />
          <Route path="/features/safety" element={
            <Suspense fallback={<PageLoader />}>
              <SafetyFirst />
            </Suspense>
          } />
          <Route path="/features/routing" element={
            <Suspense fallback={<PageLoader />}>
              <SmartRouting />
            </Suspense>
          } />
          <Route path="/features/chat" element={
            <Suspense fallback={<PageLoader />}>
              <InAppChat />
            </Suspense>
          } />
          <Route path="/fare-breakdown" element={
            <Suspense fallback={<PageLoader />}>
              <FareBreakdown />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
