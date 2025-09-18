// Core React and routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// UI components and providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Application pages
import Index from "./pages/Index";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import Schedule from "./pages/Schedule";
import Teachers from "./pages/Teachers";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

// Initialize React Query client with optimized configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

/**
 * Root application component with routing configuration
 * Features: React Query integration, Toast notifications, Tooltip support
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={300}>
      <Toaster />
      <Sonner position="top-right" />
      <BrowserRouter>
        <Routes>
          {/* Main application routes */}
          <Route path="/" element={<Index />} />
          <Route path="/students" element={<Students />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Catch-all route for 404 handling - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
