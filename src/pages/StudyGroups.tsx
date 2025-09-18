import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Calendar, MapPin, Plus, MessageCircle, Clock } from "lucide-react"

const StudyGroups = () => {
  const myGroups = [
    {
      id: 1,
      name: "Mathematics Study Circle",
      subject: "Mathematics",
      members: 6,
      nextMeeting: "2024-01-20 15:00",
      location: "Library Room A",
      description: "Weekly math problem-solving sessions focusing on calculus and algebra",
      memberAvatars: ["JS", "AM", "RK", "LM"],
      isActive: true
    },
    {
      id: 2,
      name: "History Discussion Group",
      subject: "History",
      members: 8,
      nextMeeting: "2024-01-22 14:00",
      location: "Student Center",
      description: "Exploring historical events and their modern implications",
      memberAvatars: ["DW", "SR", "TN", "PL"],
      isActive: true
    },
    {
      id: 3,
      name: "Science Lab Partners",
      subject: "Physics",
      members: 4,
      nextMeeting: "2024-01-25 16:30",
      location: "Physics Lab B",
      description: "Collaborative lab work and experiment analysis",
      memberAvatars: ["MJ", "KS", "AH"],
      isActive: false
    }
  ]

  const availableGroups = [
    {
      id: 4,
      name: "Literature Book Club",
      subject: "Literature",
      members: 12,
      nextMeeting: "2024-01-21 17:00",
      location: "English Department",
      description: "Monthly book discussions and literary analysis sessions",
      memberAvatars: ["BF", "CG", "NH", "EK"],
      tags: ["Open", "Beginner Friendly"]
    },
    {
      id: 5,
      name: "Computer Science Coding Bootcamp",
      subject: "Computer Science",
      members: 15,
      nextMeeting: "2024-01-23 18:00",
      location: "Computer Lab 1",
      description: "Weekly coding challenges and algorithm practice",
      memberAvatars: ["RR", "ST", "VW", "XY"],
      tags: ["Advanced", "Competitive"]
    },
    {
      id: 6,
      name: "Chemistry Study Group",
      subject: "Chemistry",
      members: 7,
      nextMeeting: "2024-01-24 15:30",
      location: "Chemistry Lab C",
      description: "Organic chemistry problem solving and lab prep",
      memberAvatars: ["QZ", "AB", "CD"],
      tags: ["Intermediate"]
    }
  ]

  const getSubjectColor = (subject: string) => {
    const colors = {
      "Mathematics": "academic-primary",
      "History": "warning",
      "Physics": "info",
      "Literature": "grade-c",
      "Computer Science": "primary",
      "Chemistry": "academic-secondary"
    }
    return colors[subject as keyof typeof colors] || "muted"
  }

  const GroupCard = ({ group, showJoinButton = false }: { group: any, showJoinButton?: boolean }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{group.name}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge className={`bg-${getSubjectColor(group.subject)} text-${getSubjectColor(group.subject)}-foreground`}>
                {group.subject}
              </Badge>
              {group.isActive === false && <Badge variant="secondary">Inactive</Badge>}
              {group.tags?.map((tag: string) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>
          {showJoinButton ? (
            <Button size="sm">Join Group</Button>
          ) : (
            <Button size="sm" variant="outline">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{group.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{group.members} members</span>
            <div className="flex -space-x-2 ml-2">
              {group.memberAvatars.map((avatar: string, index: number) => (
                <Avatar key={index} className="w-6 h-6 border-2 border-background">
                  <AvatarFallback className="text-xs">{avatar}</AvatarFallback>
                </Avatar>
              ))}
              {group.members > group.memberAvatars.length && (
                <Avatar className="w-6 h-6 border-2 border-background">
                  <AvatarFallback className="text-xs">+{group.members - group.memberAvatars.length}</AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Next: {new Date(group.nextMeeting).toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{group.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Study Groups</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Group
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-foreground">{myGroups.length}</div>
            <div className="text-sm text-muted-foreground">My Groups</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-academic-primary">{myGroups.filter(g => g.isActive).length}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-info">{availableGroups.length}</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-success">
              {myGroups.filter(g => {
                const nextMeeting = new Date(g.nextMeeting)
                const today = new Date()
                return nextMeeting.toDateString() === today.toDateString()
              }).length}
            </div>
            <div className="text-sm text-muted-foreground">Today</div>
          </CardContent>
        </Card>
      </div>

      {/* Groups Tabs */}
      <Tabs defaultValue="my-groups" className="space-y-4">
        <TabsList>
          <TabsTrigger value="my-groups">My Groups ({myGroups.length})</TabsTrigger>
          <TabsTrigger value="available">Available Groups ({availableGroups.length})</TabsTrigger>
          <TabsTrigger value="schedule">Meeting Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="my-groups" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myGroups.map(group => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableGroups.map(group => (
              <GroupCard key={group.id} group={group} showJoinButton />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Upcoming Meetings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...myGroups, ...availableGroups]
                  .sort((a, b) => new Date(a.nextMeeting).getTime() - new Date(b.nextMeeting).getTime())
                  .map(group => (
                    <div key={group.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-foreground">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">{group.subject}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="w-4 h-4" />
                          {new Date(group.nextMeeting).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {new Date(group.nextMeeting).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StudyGroups