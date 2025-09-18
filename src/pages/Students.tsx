import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, UserPlus, MoreHorizontal, Users, TrendingUp, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Students = () => {
  const students = [
    {
      id: "S001",
      name: "Alice Johnson",
      grade: "Grade 10",
      class: "10-A",
      email: "alice.johnson@school.edu",
      status: "Active",
      attendance: "95%",
    },
    {
      id: "S002",
      name: "Bob Smith",
      grade: "Grade 11",
      class: "11-B",
      email: "bob.smith@school.edu",
      status: "Active",
      attendance: "89%",
    },
    {
      id: "S003",
      name: "Carol Williams",
      grade: "Grade 9",
      class: "9-C",
      email: "carol.williams@school.edu",
      status: "Active",
      attendance: "92%",
    },
    {
      id: "S004",
      name: "David Brown",
      grade: "Grade 12",
      class: "12-A",
      email: "david.brown@school.edu",
      status: "Inactive",
      attendance: "78%",
    },
    {
      id: "S005",
      name: "Emma Davis",
      grade: "Grade 10",
      class: "10-B",
      email: "emma.davis@school.edu",
      status: "Active",
      attendance: "97%",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Users className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 floating" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Students
              </h1>
              <p className="mt-2 text-lg text-gray-600">Manage student information and records</p>
            </div>
          </div>
          <Button className="modern-button text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <UserPlus className="mr-2 h-5 w-5" />
            Add Student
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-blue-500/10 to-indigo-600/20">
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Total Students
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">1,234</div>
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
                Active Students
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">1,187</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +2.1%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-violet-500/10 to-purple-600/20" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                New This Month
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg">
                  <Plus className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">47</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +18.3%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
          
          <Card className="stats-card advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative bg-gradient-to-br from-amber-500/10 to-orange-600/20" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                Average Attendance
                <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">91%</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +3.7%
                </span>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        </div>

        {/* Students Table */}
        <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-white/20 p-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  Student Directory
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">A list of all students in your school</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search students..." 
                    className="pl-10 w-72 modern-input h-12 rounded-xl border-gray-200/50 bg-white/80 backdrop-blur-sm" 
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-hidden">
              <Table className="modern-table">
                <TableHeader>
                  <TableRow className="border-b border-gray-100/60 bg-gradient-to-r from-gray-50/80 to-slate-50/80">
                    <TableHead className="font-semibold text-gray-700 py-4">Student ID</TableHead>
                    <TableHead className="font-semibold text-gray-700">Name</TableHead>
                    <TableHead className="font-semibold text-gray-700">Grade & Class</TableHead>
                    <TableHead className="font-semibold text-gray-700">Email</TableHead>
                    <TableHead className="font-semibold text-gray-700">Attendance</TableHead>
                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student, index) => (
                    <TableRow key={student.id} className="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 cursor-pointer" style={{ animationDelay: `${index * 0.05}s` }}>
                      <TableCell className="font-medium text-gray-900 py-4">{student.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-4 text-white font-medium group-hover:scale-110 transition-transform duration-300">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">{student.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-gray-900">{student.grade}</div>
                          <div className="text-sm text-gray-500 modern-badge">{student.class}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer">
                          {student.email}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900 mr-2">{student.attendance}</div>
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            parseInt(student.attendance) >= 95 ? "bg-green-400" :
                            parseInt(student.attendance) >= 85 ? "bg-yellow-400" : "bg-red-400"
                          )}></div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={cn(
                          "modern-badge transition-all duration-300",
                          student.status === "Active" 
                            ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200" 
                            : "bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200"
                        )}>
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Students;
