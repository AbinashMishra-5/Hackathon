import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap, Mail, Phone, Plus, Search, MoreHorizontal, Sparkles, ArrowUpRight, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Teachers = () => {
  const teachers = [
    {
      id: "T001",
      name: "Dr. Robert Smith",
      email: "robert.smith@school.edu",
      phone: "+1 (555) 123-4567",
      department: "Mathematics",
      subjects: ["Algebra", "Calculus", "Statistics"],
      classes: 4,
      students: 120,
      status: "Active",
      experience: "15 years",
    },
    {
      id: "T002",
      name: "Prof. Sarah Johnson",
      email: "sarah.johnson@school.edu",
      phone: "+1 (555) 234-5678",
      department: "Science",
      subjects: ["Physics", "Chemistry"],
      classes: 3,
      students: 85,
      status: "Active",
      experience: "12 years",
    },
    {
      id: "T003",
      name: "Dr. Michael Williams",
      email: "michael.williams@school.edu",
      phone: "+1 (555) 345-6789",
      department: "Science",
      subjects: ["Chemistry", "Biology"],
      classes: 5,
      students: 140,
      status: "Active",
      experience: "8 years",
    },
    {
      id: "T004",
      name: "Ms. Emily Brown",
      email: "emily.brown@school.edu",
      phone: "+1 (555) 456-7890",
      department: "Language Arts",
      subjects: ["English", "Literature"],
      classes: 3,
      students: 95,
      status: "Active",
      experience: "10 years",
    },
    {
      id: "T005",
      name: "Mr. David Davis",
      email: "david.davis@school.edu",
      phone: "+1 (555) 567-8901",
      department: "Science",
      subjects: ["Biology", "Environmental Science"],
      classes: 2,
      students: 60,
      status: "Leave",
      experience: "6 years",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Leave":
        return "bg-yellow-100 text-yellow-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case "Mathematics":
        return "bg-blue-100 text-blue-800";
      case "Science":
        return "bg-green-100 text-green-800";
      case "Language Arts":
        return "bg-purple-100 text-purple-800";
      case "History":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 floating" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Teachers
              </h1>
              <p className="mt-2 text-lg text-gray-600">Manage teacher profiles and assignments</p>
            </div>
          </div>
          <Button className="modern-button text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Plus className="mr-2 h-5 w-5" />
            Add Teacher
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-blue-500/10 to-indigo-600/20">
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Total Teachers
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">87</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +5.2%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-emerald-500/10 to-teal-600/20" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Active Teachers
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">82</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +2.4%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-violet-500/10 to-purple-600/20" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Departments
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">8</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-blue-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  Active
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-amber-500/10 to-orange-600/20" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Avg Experience
                <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">10.2y</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  Excellent
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-white/20 p-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-3">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  Teacher Directory
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">View and manage all teachers in your school</CardDescription>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search teachers..." 
                  className="pl-10 w-72 modern-input h-12 rounded-xl border-gray-200/50 bg-white/80 backdrop-blur-sm" 
                />
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card 
              key={teacher.id} 
              className="stagger-item advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative z-10 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 avatar-online shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl font-bold">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-1">
                        {teacher.name}
                      </CardTitle>
                      <CardDescription className="modern-badge text-gray-600">
                        {teacher.id}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={cn(
                    "modern-badge transition-all duration-300",
                    teacher.status === "Active" 
                      ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200" 
                      : teacher.status === "Leave"
                      ? "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 border-yellow-200"
                      : "bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200"
                  )}>
                    {teacher.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5 relative z-10">
                <div className="space-y-3">
                  <Badge className={cn(
                    "modern-badge px-3 py-1 text-sm font-medium",
                    teacher.department === "Mathematics" 
                      ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200"
                      : teacher.department === "Science"
                      ? "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200"
                      : teacher.department === "Language Arts"
                      ? "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border-purple-200"
                      : "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border-gray-200"
                  )}>
                    {teacher.department}
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs modern-badge bg-white/50 backdrop-blur-sm hover:bg-indigo-50/50 transition-colors cursor-pointer"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-50/50 transition-colors">
                    <div className="p-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded mr-3">
                      <Mail className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="text-sm text-gray-700 truncate group-hover:text-indigo-600 transition-colors cursor-pointer">
                      {teacher.email}
                    </span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-emerald-50/50 transition-colors">
                    <div className="p-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded mr-3">
                      <Phone className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors cursor-pointer">
                      {teacher.phone}
                    </span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-purple-50/50 transition-colors">
                    <div className="p-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded mr-3">
                      <GraduationCap className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors">
                      {teacher.experience} experience
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-gray-50/50 to-slate-50/50 rounded-xl border border-gray-100/50">
                  <div className="text-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{teacher.classes}</div>
                    <div className="text-xs text-gray-500 modern-badge">Classes</div>
                  </div>
                  <div className="text-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{teacher.students}</div>
                    <div className="text-xs text-gray-500 modern-badge">Students</div>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100/60 space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 modern-input border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 transition-all duration-300"
                  >
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    View Profile
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="modern-input hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
            <CardDescription>Distribution of teachers by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">18</div>
                <div className="text-sm text-gray-600">Mathematics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">22</div>
                <div className="text-sm text-gray-600">Science</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15</div>
                <div className="text-sm text-gray-600">Language Arts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">32</div>
                <div className="text-sm text-gray-600">Other Subjects</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Teachers;
