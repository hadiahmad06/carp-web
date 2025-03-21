
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CommunityDriven from "./pages/features/CommunityDriven";
import SafetyFirst from "./pages/features/SafetyFirst";
import SmartRouting from "./pages/features/SmartRouting";
import InAppChat from "./pages/features/InAppChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/carp-web">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/community" element={<CommunityDriven />} />
          <Route path="/features/safety" element={<SafetyFirst />} />
          <Route path="/features/routing" element={<SmartRouting />} />
          <Route path="/features/chat" element={<InAppChat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
