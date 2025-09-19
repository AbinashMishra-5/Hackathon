import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, CheckSquare, Users, BookOpen, Clock, AlertCircle } from "lucide-react"

const Dashboard = () => {
  const upcomingAssignments = [
    { id: 1, title: "Math Homework Ch. 5", subject: "Mathematics", dueDate: "2024-01-20", priority: "high" },
    { id: 2, title: "History Essay", subject: "History", dueDate: "2024-01-22", priority: "medium" },
    { id: 3, title: "Science Lab Report", subject: "Science", dueDate: "2024-01-25", priority: "low" },
  ]

  const todaySchedule = [
    { id: 1, subject: "Mathematics", time: "9:00 AM", room: "Room 101" },
    { id: 2, subject: "History", time: "10:30 AM", room: "Room 203" },
    { id: 3, subject: "Science", time: "1:00 PM", room: "Lab A" },
  ]

  const recentGrades = [
    { subject: "Mathematics", grade: "A", assignment: "Quiz 3" },
    { subject: "History", grade: "B+", assignment: "Essay 1" },
    { subject: "Science", grade: "A-", assignment: "Lab 2" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <Badge variant="outline" className="text-sm">
          <Clock className="w-4 h-4 mr-1" />
          Spring 2024
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckSquare className="h-8 w-8 text-academic-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-info" />
              <div>
                <p className="text-2xl font-bold text-foreground">6</p>
                <p className="text-sm text-muted-foreground">Classes Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-academic-secondary" />
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Study Groups</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-warning" />
              <div>
                <p className="text-2xl font-bold text-foreground">3.8</p>
                <p className="text-sm text-muted-foreground">GPA</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaySchedule.map((class_item) => (
              <div key={class_item.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{class_item.subject}</p>
                  <p className="text-sm text-muted-foreground">{class_item.room}</p>
                </div>
                <Badge variant="outline">{class_item.time}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5" />
              Upcoming Assignments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{assignment.title}</p>
                  <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={assignment.priority === 'high' ? 'destructive' : assignment.priority === 'medium' ? 'default' : 'secondary'}>
                    {assignment.priority === 'high' && <AlertCircle className="w-3 h-3 mr-1" />}
                    {assignment.dueDate}
                  </Badge>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">View All Assignments</Button>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Recent Grades
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentGrades.map((grade, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{grade.subject}</p>
                  <p className="text-sm text-muted-foreground">{grade.assignment}</p>
                </div>
                <Badge 
                  variant={grade.grade.startsWith('A') ? 'default' : grade.grade.startsWith('B') ? 'secondary' : 'outline'}
                  className={grade.grade.startsWith('A') ? 'bg-grade-a text-success-foreground' : ''}
                >
                  {grade.grade}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-20 flex-col">
              <CheckSquare className="h-6 w-6 mb-2" />
              Add Task
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Users className="h-6 w-6 mb-2" />
              Join Group
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="h-6 w-6 mb-2" />
              View Schedule
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <BookOpen className="h-6 w-6 mb-2" />
              Browse Courses
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard