import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Calendar, 
  Heart, 
  Lightbulb, 
  Bell,
  TrendingUp,
  Award,
  Zap,
  AlertCircle,
  Trophy,
  Medal
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ResQEdLogo } from "@/components/ResQEdLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ResQEdLogo size="default" />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors relative">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-emergency rounded-full" />
              </button>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-secondary rounded-lg">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <span className="text-sm sm:text-base font-bold">Level 12</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Welcome Message */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome Back, Aishee! 👋</h2>
          <p className="text-muted-foreground">Ready to continue your safety training journey?</p>
        </div>

        {/* Emergency SOS */}
        <Card className="p-4 sm:p-6 bg-gradient-to-r from-emergency/20 to-fire/20 border-emergency/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emergency/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-bold mb-1 flex items-center justify-center sm:justify-start gap-2">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emergency" />
                Emergency Response
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">One-tap access to emergency services</p>
            </div>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-emergency text-white rounded-xl font-bold text-base sm:text-lg hover:bg-emergency/90 transition-all hover:scale-105 shadow-lg">
              SOS
            </button>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-firstaid/10 border-firstaid/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-firstaid" />
              <span className="text-xs text-muted-foreground">XP Earned</span>
            </div>
            <p className="text-2xl font-bold text-firstaid">1,350</p>
          </Card>
          <Card className="p-4 bg-drill/10 border-drill/30">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-drill" />
              <span className="text-xs text-muted-foreground">Streak</span>
            </div>
            <p className="text-2xl font-bold text-drill">7 Days</p>
          </Card>
          <Card className="p-4 bg-fire/10 border-fire/30">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-fire" />
              <span className="text-xs text-muted-foreground">Courses</span>
            </div>
            <p className="text-2xl font-bold text-fire">4/8</p>
          </Card>
          <Card className="p-4 bg-earthquake/10 border-earthquake/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-earthquake" />
              <span className="text-xs text-muted-foreground">Drills</span>
            </div>
            <p className="text-2xl font-bold text-earthquake">12</p>
          </Card>
        </div>

        {/* Progress */}
        <Card className="p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Your Progress
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Completion</span>
                <span className="text-sm font-bold text-primary">68%</span>
              </div>
              <Progress value={68} className="h-3" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-firstaid/10 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Completed</p>
                <p className="text-lg font-bold text-firstaid">24</p>
              </div>
              <div className="p-3 bg-drill/10 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">In Progress</p>
                <p className="text-lg font-bold text-drill">6</p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Remaining</p>
                <p className="text-lg font-bold">15</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Navigation */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/courses">
            <Card className="p-6 bg-gradient-to-br from-fire/20 to-fire/5 border-fire/30 hover:scale-105 transition-all cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-fire/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="relative">
                <div className="p-3 bg-fire/20 rounded-xl w-fit mb-4">
                  <BookOpen className="h-8 w-8 text-fire" />
                </div>
                <h3 className="text-xl font-bold mb-2">My Courses</h3>
                <p className="text-sm text-muted-foreground mb-3">Interactive safety training modules</p>
                <Badge variant="secondary" className="bg-fire/20 text-fire border-fire/30">
                  4 Active
                </Badge>
              </div>
            </Card>
          </Link>

          <Link to="/drills">
            <Card className="p-6 bg-gradient-to-br from-drill/20 to-drill/5 border-drill/30 hover:scale-105 transition-all cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-drill/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="relative">
                <div className="p-3 bg-drill/20 rounded-xl w-fit mb-4">
                  <Calendar className="h-8 w-8 text-drill" />
                </div>
                <h3 className="text-xl font-bold mb-2">Scheduled Drills</h3>
                <p className="text-sm text-muted-foreground mb-3">Upcoming safety exercises</p>
                <Badge variant="secondary" className="bg-drill/20 text-drill border-drill/30">
                  3 Upcoming
                </Badge>
              </div>
            </Card>
          </Link>

          <Link to="/first-aid">
            <Card className="p-6 bg-gradient-to-br from-firstaid/20 to-firstaid/5 border-firstaid/30 hover:scale-105 transition-all cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-firstaid/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="relative">
                <div className="p-3 bg-firstaid/20 rounded-xl w-fit mb-4">
                  <Heart className="h-8 w-8 text-firstaid" />
                </div>
                <h3 className="text-xl font-bold mb-2">First Aid Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">Emergency medical assistance</p>
                <Badge variant="secondary" className="bg-firstaid/20 text-firstaid border-firstaid/30">
                  24 Guides
                </Badge>
              </div>
            </Card>
          </Link>

          <Link to="/safety-tips">
            <Card className="p-6 bg-gradient-to-br from-safetytips/20 to-safetytips/5 border-safetytips/30 hover:scale-105 transition-all cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-safetytips/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="relative">
                <div className="p-3 bg-safetytips/20 rounded-xl w-fit mb-4">
                  <Lightbulb className="h-8 w-8 text-safetytips" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety Tips</h3>
                <p className="text-sm text-muted-foreground mb-3">Quick safety guidelines</p>
                <Badge variant="secondary" className="bg-safetytips/20 text-safetytips border-safetytips/30">
                  50+ Tips
                </Badge>
              </div>
            </Card>
          </Link>
        </div>

        {/* Leaderboard */}
        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
            <h3 className="text-lg sm:text-xl font-bold">Top Performers</h3>
          </div>
          <div className="space-y-3">
            {[
              { rank: 1, name: "Debopriya Das", xp: 2450, avatar: "🏆", color: "yellow-500", isUser: false },
              { rank: 2, name: "Aishee Mukherjee (You)", xp: 1350, avatar: "🥈", color: "gray-400", isUser: true },
              { rank: 3, name: "Sayantan Sarkar", xp: 1280, avatar: "🥉", color: "orange-500", isUser: false },
              { rank: 4, name: "Amisa Agarwal", xp: 1150, avatar: "👤", color: "primary", isUser: false },
              { rank: 5, name: "Aadipta Sengupta", xp: 990, avatar: "👤", color: "primary", isUser: false },
            ].map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all ${
                  user.isUser
                    ? "bg-primary/20 border-2 border-primary"
                    : "bg-secondary/50 hover:bg-secondary"
                }`}
              >
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-${user.color}/20 font-bold text-sm sm:text-base`}>
                  {user.rank <= 3 ? user.avatar : user.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm sm:text-base truncate">{user.name}</p>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Medal className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                    <p className="text-xs sm:text-sm text-muted-foreground">{user.xp} XP</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <div className="p-2 bg-firstaid/20 rounded-lg flex-shrink-0">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-firstaid" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">Completed "First Aid Basics"</p>
                <p className="text-xs text-muted-foreground">Earned 600 XP • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <div className="p-2 bg-fire/20 rounded-lg flex-shrink-0">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-fire" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">7-day streak achieved!</p>
                <p className="text-xs text-muted-foreground">Keep it going • 1 day ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
