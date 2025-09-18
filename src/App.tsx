import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Platform from "./pages/Platform";
import AIAssistant from "./pages/AIAssistant";
import About from "./pages/About";
import PortalAccess from "./pages/PortalAccess";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Aqualink from "./pages/Aqualink";
import ProfilePage from "./pages/Profile"; 
import ScrollToTop from "./components/ScrollToTop"; // ✅ NEW IMPORT

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Ye ensure karega ki har route change par top pe scroll ho */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/aqualink" element={<Aqualink />} /> 
          <Route path="/platform" element={<Platform />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/about" element={<About />} />
          <Route path="/portal-access" element={<PortalAccess />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Profile route */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
