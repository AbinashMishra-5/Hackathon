import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Plus } from "lucide-react"

const Schedule = () => {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  
  const schedule = {
    "Monday": [
      { time: "9:00 AM", subject: "Mathematics", room: "Room 101", instructor: "Dr. Smith" },
      { time: "10:30 AM", subject: "Physics", room: "Lab B", instructor: "Prof. Johnson" },
      { time: "2:00 PM", subject: "Literature", room: "Room 205", instructor: "Ms. Davis" },
    ],
    "Tuesday": [
      { time: "8:30 AM", subject: "Chemistry", room: "Lab C", instructor: "Dr. Wilson" },
      { time: "11:00 AM", subject: "History", room: "Room 203", instructor: "Mr. Brown" },
      { time: "1:30 PM", subject: "Computer Science", room: "Computer Lab", instructor: "Dr. Taylor" },
    ],
    "Wednesday": [
      { time: "9:00 AM", subject: "Mathematics", room: "Room 101", instructor: "Dr. Smith" },
      { time: "10:30 AM", subject: "Biology", room: "Lab A", instructor: "Dr. Garcia" },
      { time: "3:00 PM", subject: "Art", room: "Art Studio", instructor: "Ms. Lee" },
    ],
    "Thursday": [
      { time: "8:30 AM", subject: "Chemistry", room: "Lab C", instructor: "Dr. Wilson" },
      { time: "11:00 AM", subject: "History", room: "Room 203", instructor: "Mr. Brown" },
      { time: "2:30 PM", subject: "Physical Education", room: "Gymnasium", instructor: "Coach Martinez" },
    ],
    "Friday": [
      { time: "9:00 AM", subject: "Mathematics", room: "Room 101", instructor: "Dr. Smith" },
      { time: "10:30 AM", subject: "Physics", room: "Lab B", instructor: "Prof. Johnson" },
      { time: "1:00 PM", subject: "Literature", room: "Room 205", instructor: "Ms. Davis" },
    ]
  }

  const getSubjectColor = (subject: string) => {
    const colors = {
      "Mathematics": "bg-academic-primary text-info-foreground",
      "Physics": "bg-info text-info-foreground",
      "Chemistry": "bg-academic-secondary text-success-foreground",
      "Biology": "bg-success text-success-foreground",
      "History": "bg-warning text-warning-foreground",
      "Literature": "bg-grade-c text-warning-foreground",
      "Computer Science": "bg-primary text-primary-foreground",
      "Art": "bg-secondary text-secondary-foreground",
      "Physical Education": "bg-muted text-muted-foreground"
    }
    return colors[subject as keyof typeof colors] || "bg-muted text-muted-foreground"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Class Schedule</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Class
        </Button>
      </div>

      {/* Week Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {weekDays.map((day) => (
          <Card key={day} className="min-h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5" />
                {day}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {schedule[day as keyof typeof schedule]?.map((class_item, index) => (
                <div key={index} className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">
                    <Clock className="w-3 h-3 mr-2" />
                    {class_item.time}
                  </Badge>
                  <div className={`p-3 rounded-lg ${getSubjectColor(class_item.subject)}`}>
                    <p className="font-semibold text-sm mb-1">{class_item.subject}</p>
                    <div className="space-y-1 text-xs opacity-90">
                      <p className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {class_item.room}
                      </p>
                      <p>{class_item.instructor}</p>
                    </div>
                  </div>
                </div>
              )) || <p className="text-muted-foreground text-center py-8">No classes</p>}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Classes */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Classes (Monday)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {schedule.Monday.map((class_item, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{class_item.subject}</h3>
                  <Badge variant="outline">{class_item.time}</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {class_item.room}
                  </p>
                  <p>{class_item.instructor}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Schedule