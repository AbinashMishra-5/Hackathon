import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, Clock, Plus, Search, Sparkles, GraduationCap, ArrowUpRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Classes = () => {
  const classes = [
    {
      id: "C001",
      name: "Mathematics",
      grade: "Grade 10",
      section: "A",
      teacher: "Dr. Smith",
      students: 28,
      maxStudents: 30,
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "Room 101",
      status: "Active",
    },
    {
      id: "C002",
      name: "Physics",
      grade: "Grade 11",
      section: "B",
      teacher: "Prof. Johnson",
      students: 25,
      maxStudents: 28,
      schedule: "Tue, Thu - 10:30 AM",
      room: "Room 205",
      status: "Active",
    },
    {
      id: "C003",
      name: "Chemistry",
      grade: "Grade 12",
      section: "A",
      teacher: "Dr. Williams",
      students: 22,
      maxStudents: 25,
      schedule: "Mon, Wed, Fri - 2:00 PM",
      room: "Lab 301",
      status: "Active",
    },
    {
      id: "C004",
      name: "English Literature",
      grade: "Grade 9",
      section: "C",
      teacher: "Ms. Brown",
      students: 30,
      maxStudents: 32,
      schedule: "Daily - 11:00 AM",
      room: "Room 102",
      status: "Active",
    },
    {
      id: "C005",
      name: "Biology",
      grade: "Grade 10",
      section: "B",
      teacher: "Dr. Davis",
      students: 18,
      maxStudents: 30,
      schedule: "Tue, Thu - 1:00 PM",
      room: "Lab 202",
      status: "Inactive",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const getOccupancyColor = (students: number, maxStudents: number) => {
    const percentage = (students / maxStudents) * 100;
    if (percentage >= 90) return "text-red-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 floating" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Classes
              </h1>
              <p className="mt-2 text-lg text-gray-600">Manage classes, subjects, and schedules</p>
            </div>
          </div>
          <Button className="modern-button text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Plus className="mr-2 h-5 w-5" />
            Add Class
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-blue-500/10 to-indigo-600/20">
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Total Classes
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">45</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +8.2%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-emerald-500/10 to-teal-600/20" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Active Classes
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">42</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +6.1%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-violet-500/10 to-purple-600/20" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Total Students
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">1,234</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +12.5%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-amber-500/10 to-orange-600/20" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Average Class Size
                <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">27</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +4.3%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-white/20 p-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-3">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  Class Directory
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">View and manage all classes in your school</CardDescription>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search classes..." 
                  className="pl-10 w-72 modern-input h-12 rounded-xl border-gray-200/50 bg-white/80 backdrop-blur-sm" 
                />
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card 
              key={classItem.id} 
              className="stagger-item advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative z-10 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-2">
                      {classItem.name}
                    </CardTitle>
                    <CardDescription className="modern-badge text-gray-600">
                      {classItem.grade} - Section {classItem.section}
                    </CardDescription>
                  </div>
                  <Badge className={cn(
                    "modern-badge transition-all duration-300 ml-3",
                    classItem.status === "Active" 
                      ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200" 
                      : "bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200"
                  )}>
                    {classItem.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-indigo-50/50">
                    <div className="p-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded mr-3">
                      <Users className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="font-medium">{classItem.teacher}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-emerald-50/50">
                    <div className="p-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded mr-3">
                      <Clock className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>{classItem.schedule}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-purple-50/50">
                    <div className="p-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded mr-3">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                    </div>
                    <span>{classItem.room}</span>
                  </div>
                </div>

                <div className="space-y-3 p-4 bg-gradient-to-r from-gray-50/50 to-slate-50/50 rounded-xl border border-gray-100/50">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">Class Occupancy</span>
                    <span className={cn(
                      "font-semibold",
                      getOccupancyColor(classItem.students, classItem.maxStudents)
                    )}>
                      {classItem.students}/{classItem.maxStudents} students
                    </span>
                  </div>
                  <div className="modern-progress rounded-full h-3">
                    <div 
                      className="progress-fill rounded-full h-full transition-all duration-1000 ease-out"
                      style={{ width: `${(classItem.students / classItem.maxStudents) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    {Math.round((classItem.students / classItem.maxStudents) * 100)}% occupied
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100/60 space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 modern-input border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 transition-all duration-300"
                  >
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 modern-input border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-purple-700 transition-all duration-300"
                  >
                    Edit Class
                  </Button>
                </div>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Subject Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Distribution</CardTitle>
            <CardDescription>Overview of classes by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-600">Mathematics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">Science</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">15</div>
                <div className="text-sm text-gray-600">Other Subjects</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Classes;
