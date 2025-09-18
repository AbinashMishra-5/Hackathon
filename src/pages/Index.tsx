import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Calendar, GraduationCap, TrendingUp, Clock, ArrowUpRight, Sparkles, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const stats = [
    { 
      title: "Total Students", 
      value: "1,234", 
      change: "+12%",
      icon: Users, 
      gradient: "gradient-primary",
      bgGradient: "from-blue-500/10 to-indigo-600/20"
    },
    { 
      title: "Active Classes", 
      value: "45", 
      change: "+8%",
      icon: BookOpen, 
      gradient: "gradient-success",
      bgGradient: "from-emerald-500/10 to-teal-600/20"
    },
    { 
      title: "Teachers", 
      value: "87", 
      change: "+3%",
      icon: GraduationCap, 
      gradient: "gradient-secondary",
      bgGradient: "from-purple-500/10 to-pink-600/20"
    },
    { 
      title: "Events Today", 
      value: "12", 
      change: "+25%",
      icon: Calendar, 
      gradient: "gradient-warning",
      bgGradient: "from-amber-500/10 to-orange-600/20"
    },
  ];

  const recentActivities = [
    { time: "2 hours ago", activity: "New student John Doe enrolled in Mathematics" },
    { time: "4 hours ago", activity: "Physics class schedule updated" },
    { time: "1 day ago", activity: "Parent-Teacher meeting scheduled" },
    { time: "2 days ago", activity: "Grade 10 exam results published" },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="relative">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Target className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 floating" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="mt-2 text-lg text-gray-600">Welcome back! Here's what's happening at your school.</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className={cn(
                "stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative",
                `bg-gradient-to-br ${stat.bgGradient}`
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <div>
                  <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {stat.title}
                  </CardTitle>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-600 font-medium flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={cn(
                  "p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                  stat.gradient
                )}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {stat.value}
                </div>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-white/20">
              <CardTitle className="flex items-center text-gray-800">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-3">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                Recent Activities
              </CardTitle>
              <CardDescription className="text-gray-600">Latest updates and activities</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="stagger-item flex items-start space-x-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">{activity.activity}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-white/20">
              <CardTitle className="flex items-center text-gray-800">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-3">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                Quick Actions
              </CardTitle>
              <CardDescription className="text-gray-600">Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <button className="stagger-item group p-5 bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-blue-200/50" style={{ animationDelay: '0.1s' }}>
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Add Student</p>
                  <p className="text-xs text-gray-600 mt-1">Enroll new student</p>
                </button>
                <button className="stagger-item group p-5 bg-gradient-to-br from-emerald-50 to-teal-100 hover:from-emerald-100 hover:to-teal-200 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-emerald-200/50" style={{ animationDelay: '0.2s' }}>
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">New Class</p>
                  <p className="text-xs text-gray-600 mt-1">Create new class</p>
                </button>
                <button className="stagger-item group p-5 bg-gradient-to-br from-purple-50 to-violet-100 hover:from-purple-100 hover:to-violet-200 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-purple-200/50" style={{ animationDelay: '0.3s' }}>
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Schedule Event</p>
                  <p className="text-xs text-gray-600 mt-1">Plan new event</p>
                </button>
                <button className="stagger-item group p-5 bg-gradient-to-br from-amber-50 to-orange-100 hover:from-amber-100 hover:to-orange-200 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-amber-200/50" style={{ animationDelay: '0.4s' }}>
                  <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">Add Teacher</p>
                  <p className="text-xs text-gray-600 mt-1">Hire new faculty</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
