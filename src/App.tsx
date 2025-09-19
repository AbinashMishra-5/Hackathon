// Core React and routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// UI components and providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Layout component
import Layout from "@/components/Layout";

// New application pages
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Assignments from "./pages/Assignments";
import StudyGroups from "./pages/StudyGroups";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";

// Legacy pages for backward compatibility
import Index from "./pages/Index";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import Teachers from "./pages/Teachers";
import Settings from "./pages/Settings";

// Common pages
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
 * Root application component with unified routing configuration
 * Features: React Query integration, Toast notifications, Tooltip support
 * Supports both new and legacy page structures
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={300}>
      <Toaster />
      <Sonner position="top-right" />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Primary application routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/study-groups" element={<StudyGroups />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/dashboard" element={<Index />} />
            <Route path="/students" element={<Students />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/settings" element={<Settings />} />
            
            {/* Catch-all route for 404 handling - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
