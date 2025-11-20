import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Bell, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Drills = () => {
  const upcomingDrills = [
    {
      id: 1,
      title: "Fire Evacuation Drill",
      type: "Fire Safety",
      date: "2025-11-20",
      time: "10:30 AM",
      location: "Main Building",
      participants: 150,
      color: "fire",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Earthquake Response Simulation",
      type: "Earthquake",
      date: "2025-11-25",
      time: "2:00 PM",
      location: "School Grounds",
      participants: 200,
      color: "earthquake",
      status: "upcoming",
    },
    {
      id: 3,
      title: "First Aid Emergency Practice",
      type: "First Aid",
      date: "2025-11-28",
      time: "11:00 AM",
      location: "Medical Room",
      participants: 30,
      color: "firstaid",
      status: "upcoming",
    },
  ];

  const completedDrills = [
    {
      id: 4,
      title: "Campus Security Drill",
      type: "Security",
      date: "2025-11-10",
      score: 95,
      color: "drill",
      status: "completed",
    },
    {
      id: 5,
      title: "Fire Safety Assessment",
      type: "Fire Safety",
      date: "2025-11-05",
      score: 88,
      color: "fire",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Scheduled Drills</h1>
              <p className="text-sm text-muted-foreground">Your upcoming safety training exercises</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Upcoming Drills */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-drill" />
            Upcoming Drills
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingDrills.map((drill) => (
              <Card
                key={drill.id}
                className="p-6 relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-${drill.color}/10 rounded-full blur-3xl`}
                />

                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge
                      variant="secondary"
                      className={`bg-${drill.color}/20 text-${drill.color} border-${drill.color}/30`}
                    >
                      {drill.type}
                    </Badge>
                    <Badge variant="outline" className="bg-drill/20 border-drill/30 text-drill">
                      Scheduled
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold">{drill.title}</h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(drill.date).toLocaleDateString("en-US", { 
                        month: "long", 
                        day: "numeric", 
                        year: "numeric" 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{drill.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{drill.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{drill.participants} participants</span>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Drills */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-firstaid" />
            Completed Drills
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedDrills.map((drill) => (
              <Card
                key={drill.id}
                className="p-6 relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-${drill.color}/10 rounded-full blur-3xl`}
                />

                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge
                      variant="secondary"
                      className={`bg-${drill.color}/20 text-${drill.color} border-${drill.color}/30`}
                    >
                      {drill.type}
                    </Badge>
                    <Badge variant="outline" className="bg-firstaid/20 border-firstaid/30 text-firstaid">
                      Completed
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold">{drill.title}</h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(drill.date).toLocaleDateString("en-US", { 
                        month: "long", 
                        day: "numeric", 
                        year: "numeric" 
                      })}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Your Score</span>
                      <span className="text-2xl font-bold text-firstaid">{drill.score}%</span>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                    View Details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drills;
