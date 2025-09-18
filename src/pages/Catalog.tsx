import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Clock, Users, Star, Search, Filter } from "lucide-react"

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const courses = [
    {
      id: 1,
      code: "MATH101",
      title: "Calculus I",
      department: "Mathematics",
      credits: 4,
      level: "undergraduate",
      instructor: "Dr. Smith",
      description: "Introduction to differential and integral calculus with applications",
      schedule: "MWF 9:00-10:00 AM",
      enrolled: 28,
      capacity: 30,
      rating: 4.5,
      prerequisites: ["High School Algebra"],
      difficulty: "intermediate"
    },
    {
      id: 2,
      code: "HIST201",
      title: "World History",
      department: "History",
      credits: 3,
      level: "undergraduate",
      instructor: "Prof. Johnson",
      description: "Survey of major civilizations and historical developments",
      schedule: "TTh 2:00-3:30 PM",
      enrolled: 25,
      capacity: 35,
      rating: 4.2,
      prerequisites: ["None"],
      difficulty: "beginner"
    },
    {
      id: 3,
      code: "PHYS301",
      title: "Quantum Physics",
      department: "Physics",
      credits: 4,
      level: "undergraduate",
      instructor: "Dr. Wilson",
      description: "Introduction to quantum mechanics and modern physics",
      schedule: "MWF 11:00-12:00 PM",
      enrolled: 15,
      capacity: 20,
      rating: 4.8,
      prerequisites: ["PHYS201", "MATH201"],
      difficulty: "advanced"
    },
    {
      id: 4,
      code: "CS150",
      title: "Programming Fundamentals",
      department: "Computer Science",
      credits: 3,
      level: "undergraduate",
      instructor: "Prof. Davis",
      description: "Introduction to programming concepts using Python",
      schedule: "TTh 10:00-11:30 AM",
      enrolled: 30,
      capacity: 30,
      rating: 4.6,
      prerequisites: ["None"],
      difficulty: "beginner"
    },
    {
      id: 5,
      code: "CHEM220",
      title: "Organic Chemistry",
      department: "Chemistry",
      credits: 4,
      level: "undergraduate",
      instructor: "Dr. Brown",
      description: "Study of carbon-based compounds and their reactions",
      schedule: "MWF 1:00-2:00 PM + Lab",
      enrolled: 22,
      capacity: 24,
      rating: 3.9,
      prerequisites: ["CHEM110"],
      difficulty: "advanced"
    },
    {
      id: 6,
      code: "ENG102",
      title: "Literature Analysis",
      department: "English",
      credits: 3,
      level: "undergraduate",
      instructor: "Ms. Garcia",
      description: "Critical analysis of major literary works",
      schedule: "MWF 10:00-11:00 AM",
      enrolled: 20,
      capacity: 25,
      rating: 4.3,
      prerequisites: ["ENG101"],
      difficulty: "intermediate"
    }
  ]

  const departments = ["all", "Mathematics", "History", "Physics", "Computer Science", "Chemistry", "English"]
  const levels = ["all", "undergraduate", "graduate"]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || course.department === selectedDepartment
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
    
    return matchesSearch && matchesDepartment && matchesLevel
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'success'
      case 'intermediate': return 'warning'
      case 'advanced': return 'destructive'
      default: return 'secondary'
    }
  }

  const getAvailabilityColor = (enrolled: number, capacity: number) => {
    const ratio = enrolled / capacity
    if (ratio >= 1) return 'destructive'
    if (ratio >= 0.8) return 'warning'
    return 'success'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Course Catalog</h1>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Advanced Filters
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map(level => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level.charAt(0).toUpperCase() + level.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
        <div className="flex gap-2">
          <Badge variant="outline">{courses.length} Total Courses</Badge>
          <Badge variant="outline">{departments.length - 1} Departments</Badge>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{course.code}</CardTitle>
                  <h3 className="font-semibold text-foreground mt-1">{course.title}</h3>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-warning" />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline">{course.department}</Badge>
                <Badge variant={getDifficultyColor(course.difficulty) as any}>
                  {course.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{course.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  <span>{course.credits} Credits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{course.enrolled}/{course.capacity} enrolled</span>
                  <Badge 
                    variant={getAvailabilityColor(course.enrolled, course.capacity) as any}
                    className="text-xs"
                  >
                    {course.enrolled >= course.capacity ? "Full" : "Available"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Instructor: {course.instructor}</p>
                <div>
                  <p className="text-sm font-medium mb-1">Prerequisites:</p>
                  <div className="flex gap-1 flex-wrap">
                    {course.prerequisites.map((prereq, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {prereq}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Button 
                className="w-full" 
                disabled={course.enrolled >= course.capacity}
                variant={course.enrolled >= course.capacity ? "secondary" : "default"}
              >
                {course.enrolled >= course.capacity ? "Waitlist" : "Enroll"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all available courses.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Catalog