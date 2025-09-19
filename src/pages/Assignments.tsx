import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarDays, Clock, Plus, AlertCircle, CheckCircle2 } from "lucide-react"

const Assignments = () => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([])

  const toggleTask = (id: number) => {
    setCompletedTasks(prev => 
      prev.includes(id) 
        ? prev.filter(taskId => taskId !== id)
        : [...prev, id]
    )
  }

  const assignments = [
    { 
      id: 1, 
      title: "Math Homework Chapter 5", 
      subject: "Mathematics", 
      dueDate: "2024-01-20", 
      priority: "high",
      description: "Complete exercises 1-20 on quadratic equations",
      status: "pending"
    },
    { 
      id: 2, 
      title: "History Essay: World War II", 
      subject: "History", 
      dueDate: "2024-01-22", 
      priority: "medium",
      description: "Write a 1500-word essay on the causes of WWII",
      status: "pending"
    },
    { 
      id: 3, 
      title: "Science Lab Report", 
      subject: "Science", 
      dueDate: "2024-01-25", 
      priority: "low",
      description: "Document findings from the chemistry experiment",
      status: "pending"
    },
    { 
      id: 4, 
      title: "Literature Analysis", 
      subject: "Literature", 
      dueDate: "2024-01-15", 
      priority: "high",
      description: "Analyze themes in 'To Kill a Mockingbird'",
      status: "completed"
    },
    { 
      id: 5, 
      title: "Physics Problem Set", 
      subject: "Physics", 
      dueDate: "2024-01-18", 
      priority: "medium",
      description: "Solve motion and force problems",
      status: "completed"
    }
  ]

  const pendingAssignments = assignments.filter(a => a.status === "pending")
  const completedAssignments = assignments.filter(a => a.status === "completed")

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive'
      case 'medium': return 'default'
      case 'low': return 'secondary'
      default: return 'outline'
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const AssignmentCard = ({ assignment, showCheckbox = false }: { assignment: any, showCheckbox?: boolean }) => {
    const daysUntil = getDaysUntilDue(assignment.dueDate)
    const isOverdue = daysUntil < 0
    const isDueSoon = daysUntil <= 2 && daysUntil >= 0

    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {showCheckbox && (
                  <Checkbox 
                    checked={completedTasks.includes(assignment.id)}
                    onCheckedChange={() => toggleTask(assignment.id)}
                  />
                )}
                <h3 className="font-semibold text-foreground">{assignment.title}</h3>
                <Badge variant={getPriorityColor(assignment.priority) as any}>
                  {assignment.priority}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{assignment.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  📚 {assignment.subject}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  Due: {assignment.dueDate}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              {isOverdue ? (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Overdue
                </Badge>
              ) : isDueSoon ? (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Due Soon
                </Badge>
              ) : assignment.status === "completed" ? (
                <Badge variant="default" className="bg-success text-success-foreground flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Completed
                </Badge>
              ) : (
                <Badge variant="outline">
                  {daysUntil} days left
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Assignments</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Assignment
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-foreground">{pendingAssignments.length}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-success">{completedAssignments.length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-destructive">
              {pendingAssignments.filter(a => getDaysUntilDue(a.dueDate) <= 2).length}
            </div>
            <div className="text-sm text-muted-foreground">Due Soon</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-warning">
              {pendingAssignments.filter(a => a.priority === 'high').length}
            </div>
            <div className="text-sm text-muted-foreground">High Priority</div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments Tabs */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending ({pendingAssignments.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedAssignments.length})</TabsTrigger>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingAssignments.map(assignment => (
            <AssignmentCard key={assignment.id} assignment={assignment} showCheckbox />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedAssignments.map(assignment => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {assignments.map(assignment => (
            <AssignmentCard key={assignment.id} assignment={assignment} showCheckbox />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Assignments