import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  Menu,
  Settings,
  Users,
  X,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Navigation configuration with proper TypeScript typing
interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

const navigation: NavigationItem[] = [
  { 
    name: "Dashboard", 
    href: "/", 
    icon: Home, 
    description: "Overview and analytics" 
  },
  { 
    name: "Students", 
    href: "/students", 
    icon: Users, 
    description: "Student management" 
  },
  { 
    name: "Classes", 
    href: "/classes", 
    icon: BookOpen, 
    description: "Class schedules" 
  },
  { 
    name: "Schedule", 
    href: "/schedule", 
    icon: Calendar, 
    description: "Events and timetable" 
  },
  { 
    name: "Teachers", 
    href: "/teachers", 
    icon: GraduationCap, 
    description: "Faculty management" 
  },
  { 
    name: "Settings", 
    href: "/settings", 
    icon: Settings, 
    description: "System configuration" 
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  // Memoized callback for closing sidebar
  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  // Handle component mounting for smooth transitions
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    if (sidebarOpen) {
      closeSidebar();
    }
  }, [location.pathname, sidebarOpen, closeSidebar]);

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 animate-pulse" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl floating" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
      {/* Mobile menu overlay */}
      <div 
        className={cn(
          "fixed inset-0 flex z-40 md:hidden transition-all duration-300", 
          !sidebarOpen && "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm" 
          onClick={closeSidebar}
          aria-label="Close navigation menu" 
        />
        
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 glass-effect rounded-r-3xl border-r border-white/20 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <Button
              variant="ghost"
              size="sm"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full glass-dark hover:bg-white/20 transition-all duration-300"
              onClick={closeSidebar}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
          
          <div className="flex-shrink-0 flex items-center px-4">
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 floating" />
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">School Buddy Pro</span>
          </div>
          
          <div className="mt-5 flex-1 h-0 overflow-y-auto custom-scrollbar">
            <nav className="px-2 space-y-1">
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "sidebar-item stagger-item group flex items-center px-3 py-3 text-base font-medium rounded-xl transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg active"
                        : "text-gray-600 hover:text-indigo-700"
                    )}
                    onClick={closeSidebar}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className={cn(
                      "mr-4 h-5 w-5 transition-all duration-300",
                      isActive ? "text-white" : "text-gray-500 group-hover:text-indigo-600"
                    )} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0 relative z-10">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 glass-effect border-b border-white/20 shadow-lg">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-indigo-600" />
                <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 floating" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">School Buddy Pro</span>
            </div>
            
            <div className="flex-1 flex flex-col overflow-y-auto glass-effect custom-scrollbar">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "sidebar-item stagger-item group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-300 relative",
                        isActive
                          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform translate-x-1 active"
                          : "text-gray-600 hover:text-indigo-700"
                      )}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <item.icon className={cn(
                        "mr-3 h-5 w-5 transition-all duration-300",
                        isActive ? "text-white" : "text-gray-500 group-hover:text-indigo-600"
                      )} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden relative z-10">
        {/* Top bar */}
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 glass-effect border-b border-white/20">
          <Button
            variant="ghost"
            size="sm"
            className="-ml-0.5 -mt-0.5 h-12 w-12 modern-button"
            onClick={openSidebar}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none custom-scrollbar page-transition">
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className={cn("transition-opacity duration-500", mounted ? "opacity-100" : "opacity-0")}>
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
