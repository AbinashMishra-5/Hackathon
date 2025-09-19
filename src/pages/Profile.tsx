import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  TrendingUp,
  Settings,
  Edit
} from "lucide-react"

const Profile = () => {
  const student = {
    name: "John Doe",
    email: "john.doe@school.edu",
    phone: "+1 (555) 123-4567",
    studentId: "STU2024001",
    major: "Computer Science",
    year: "Sophomore",
    gpa: 3.85,
    expectedGraduation: "May 2026",
    address: "123 Campus Drive, University City, State 12345"
  }

  const currentCourses = [
    { code: "CS201", title: "Data Structures", credits: 4, grade: "A-", progress: 75 },
    { code: "MATH301", title: "Linear Algebra", credits: 3, grade: "B+", progress: 80 },
    { code: "PHYS150", title: "Physics I", credits: 4, grade: "A", progress: 70 },
    { code: "ENG102", title: "Technical Writing", credits: 3, grade: "A-", progress: 85 }
  ]

  const completedCourses = [
    { code: "CS101", title: "Programming Fundamentals", credits: 3, grade: "A", semester: "Fall 2023" },
    { code: "MATH201", title: "Calculus II", credits: 4, grade: "B+", semester: "Fall 2023" },
    { code: "HIST101", title: "World History", credits: 3, grade: "A-", semester: "Spring 2023" },
    { code: "CHEM110", title: "General Chemistry", credits: 4, grade: "B", semester: "Spring 2023" }
  ]

  const achievements = [
    { title: "Dean's List", description: "Fall 2023 Semester", icon: "🏆", date: "Dec 2023" },
    { title: "Math Competition Winner", description: "First place in regional competition", icon: "🥇", date: "Nov 2023" },
    { title: "Study Group Leader", description: "Led 3 successful study groups", icon: "👥", date: "Oct 2023" },
    { title: "Perfect Attendance", description: "No absences in Fall 2023", icon: "📅", date: "Dec 2023" }
  ]

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-grade-a text-success-foreground'
    if (grade.startsWith('B')) return 'bg-grade-b text-warning-foreground'
    if (grade.startsWith('C')) return 'bg-grade-c text-warning-foreground'
    return 'bg-muted text-muted-foreground'
  }

  const totalCredits = currentCourses.reduce((sum, course) => sum + course.credits, 0)
  const completedCredits = completedCourses.reduce((sum, course) => sum + course.credits, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Student Profile</h1>
        <Button>
          <Settings className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl font-bold">
                {student.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{student.name}</h2>
                <p className="text-muted-foreground">{student.major} • {student.year}</p>
                <p className="text-sm text-muted-foreground">Student ID: {student.studentId}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{student.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Graduation: {student.expectedGraduation}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold text-academic-primary">{student.gpa}</div>
              <div className="text-sm text-muted-foreground">Current GPA</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-foreground">{totalCredits}</div>
            <div className="text-sm text-muted-foreground">Current Credits</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-success">{completedCredits}</div>
            <div className="text-sm text-muted-foreground">Completed Credits</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-academic-primary">{currentCourses.length}</div>
            <div className="text-sm text-muted-foreground">Current Courses</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-warning">{achievements.length}</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">Current Courses</TabsTrigger>
          <TabsTrigger value="academic">Academic History</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Current Courses ({currentCourses.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentCourses.map(course => (
                <div key={course.code} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{course.code}</h3>
                      <p className="text-sm text-muted-foreground">{course.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getGradeColor(course.grade)}>
                        {course.grade}
                      </Badge>
                      <Badge variant="outline">{course.credits} credits</Badge>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Course Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Academic History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Overall Statistics</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Current GPA:</span>
                        <span className="font-medium">{student.gpa}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Credits:</span>
                        <span className="font-medium">{completedCredits + totalCredits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completed Courses:</span>
                        <span className="font-medium">{completedCourses.length}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Completed Courses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {completedCourses.map(course => (
                      <div key={`${course.code}-${course.semester}`} className="p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-foreground">{course.code}</h4>
                            <p className="text-sm text-muted-foreground">{course.title}</p>
                            <p className="text-xs text-muted-foreground">{course.semester}</p>
                          </div>
                          <div className="text-right">
                            <Badge className={getGradeColor(course.grade)}>
                              {course.grade}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              {course.credits} credits
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span>{student.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{student.phone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">{student.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Academic Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Student ID:</span>
                        <span>{student.studentId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Major:</span>
                        <span>{student.major}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Year:</span>
                        <span>{student.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expected Graduation:</span>
                        <span>{student.expectedGraduation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Information
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Profile