import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Plus, Sparkles, ArrowUpRight, TrendingUp, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const Schedule = () => {
  const todaySchedule = [
    {
      id: 1,
      time: "09:00 - 10:00",
      subject: "Mathematics",
      teacher: "Dr. Smith",
      room: "Room 101",
      grade: "Grade 10",
      type: "Class",
    },
    {
      id: 2,
      time: "10:30 - 11:30",
      subject: "Physics",
      teacher: "Prof. Johnson",
      room: "Room 205",
      grade: "Grade 11",
      type: "Class",
    },
    {
      id: 3,
      time: "12:00 - 13:00",
      subject: "Staff Meeting",
      teacher: "All Staff",
      room: "Conference Room",
      grade: "N/A",
      type: "Meeting",
    },
    {
      id: 4,
      time: "14:00 - 15:00",
      subject: "Chemistry Lab",
      teacher: "Dr. Williams",
      room: "Lab 301",
      grade: "Grade 12",
      type: "Lab",
    },
    {
      id: 5,
      time: "15:30 - 16:30",
      subject: "Parent-Teacher Conference",
      teacher: "Ms. Brown",
      room: "Room 102",
      grade: "Grade 9",
      type: "Event",
    },
  ];

  const weekSchedule = [
    { day: "Monday", classes: 8, events: 2 },
    { day: "Tuesday", classes: 7, events: 1 },
    { day: "Wednesday", classes: 9, events: 3 },
    { day: "Thursday", classes: 6, events: 1 },
    { day: "Friday", classes: 8, events: 2 },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Class":
        return "bg-blue-100 text-blue-800";
      case "Lab":
        return "bg-green-100 text-green-800";
      case "Meeting":
        return "bg-purple-100 text-purple-800";
      case "Event":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 floating" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Schedule
              </h1>
              <p className="mt-2 text-lg text-gray-600">Manage classes, events, and school activities</p>
            </div>
          </div>
          <Button className="modern-button text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Plus className="mr-2 h-5 w-5" />
            Add Event
          </Button>
        </div>

        {/* Current Date */}
        <Card className="advanced-card glass-effect border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-white/20">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-3">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Today's Schedule - {getCurrentDate()}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  All classes and events scheduled for today
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Today's Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200"></div>
              
              {todaySchedule.map((item, index) => (
                <div key={item.id} className="relative stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 border-4 border-white shadow-lg z-10 floating" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  
                  <Card className="ml-12 mb-6 advanced-card glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg mr-3">
                              <Clock className="h-4 w-4 text-indigo-600" />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">{item.time}</span>
                            <Badge className={cn(
                              "ml-3 modern-badge transition-all duration-300",
                              getTypeColor(item.type).replace('bg-', 'bg-gradient-to-r from-').replace('-100', '-100 to-').replace('text-', 'text-').replace('-800', '-700')
                            )}>
                              {item.type}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                            {item.subject}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center p-2 rounded-lg hover:bg-indigo-50/50 transition-colors">
                              <div className="p-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded mr-3">
                                <Users className="h-4 w-4 text-indigo-600" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Teacher</div>
                                <span className="font-medium text-gray-900">{item.teacher}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center p-2 rounded-lg hover:bg-emerald-50/50 transition-colors">
                              <div className="p-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded mr-3">
                                <MapPin className="h-4 w-4 text-emerald-600" />
                              </div>
                              <div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                                <span className="font-medium text-gray-900">{item.room}</span>
                              </div>
                            </div>
                            
                            {item.grade !== "N/A" && (
                              <div className="flex items-center p-2 rounded-lg hover:bg-purple-50/50 transition-colors md:col-span-2">
                                <div className="p-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded mr-3">
                                  <GraduationCap className="h-4 w-4 text-purple-600" />
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500 uppercase tracking-wider">Grade</div>
                                  <span className="font-medium text-gray-900">{item.grade}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="modern-input border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 transition-all duration-300 ml-4"
                        >
                          <ArrowUpRight className="mr-1 h-3 w-3" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Overview */}
          <div className="space-y-6">
            <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-white/20">
                <CardTitle className="text-lg text-gray-800 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mr-3">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  Week Overview
                </CardTitle>
                <CardDescription className="text-gray-600">Classes and events this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                {weekSchedule.map((day, index) => (
                  <div 
                    key={day.day} 
                    className="stagger-item flex justify-between items-center py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 cursor-pointer group border border-gray-100/60"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{day.day}</div>
                        <div className="text-sm text-gray-500 modern-badge">
                          {day.classes} classes • {day.events} events
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                        {day.classes + day.events}
                      </div>
                      <div className="text-xs text-gray-500">total</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-white/20">
                <CardTitle className="text-lg text-gray-800 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-3">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="stagger-item text-center p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors mb-1">5</div>
                  <div className="text-sm text-gray-600 modern-badge">Events Today</div>
                </div>
                <div className="stagger-item text-center p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-xl border border-emerald-100/50 hover:shadow-lg transition-all duration-300 cursor-pointer group" style={{ animationDelay: '0.1s' }}>
                  <div className="text-3xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors mb-1">38</div>
                  <div className="text-sm text-gray-600 modern-badge">This Week</div>
                </div>
                <div className="stagger-item text-center p-4 bg-gradient-to-r from-purple-50/50 to-violet-50/50 rounded-xl border border-purple-100/50 hover:shadow-lg transition-all duration-300 cursor-pointer group" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors mb-1">12</div>
                  <div className="text-sm text-gray-600 modern-badge">Upcoming Events</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="advanced-card glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-white/20">
                <CardTitle className="text-lg text-gray-800 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg mr-3">
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <Button className="stagger-item w-full justify-start modern-input bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border-indigo-200 text-indigo-700 transition-all duration-300">
                  <div className="p-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded mr-2">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  View Full Calendar
                  <ArrowUpRight className="ml-auto h-3 w-3" />
                </Button>
                <Button className="stagger-item w-full justify-start modern-input bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border-emerald-200 text-emerald-700 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
                  <div className="p-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded mr-2">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  Schedule Class
                  <ArrowUpRight className="ml-auto h-3 w-3" />
                </Button>
                <Button className="stagger-item w-full justify-start modern-input bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-amber-200 text-amber-700 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                  <div className="p-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded mr-2">
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                  Add Event
                  <ArrowUpRight className="ml-auto h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
