
import { Toaster } from "@/components/atoms/toaster";
import { Toaster as Sonner } from "@/components/atoms/sonner";
import { TooltipProvider } from "@/components/atoms/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CommunityDriven from "./pages/features/CommunityDriven";
import SafetyFirst from "./pages/features/SafetyFirst";
import SmartRouting from "./pages/features/SmartRouting";
import InAppChat from "./pages/features/InAppChat";
import ScrollToHash from "./components/molecules/ScrollToHash";
import { Scroll } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/community" element={<CommunityDriven />} />
          <Route path="/features/safety" element={<SafetyFirst />} />
          <Route path="/features/routing" element={<SmartRouting />} />
          <Route path="/features/chat" element={<InAppChat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
