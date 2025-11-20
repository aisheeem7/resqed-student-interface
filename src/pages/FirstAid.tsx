import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Search, BookOpen, Video, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FirstAid = () => {
  const guides = [
    {
      id: 1,
      title: "CPR (Cardiopulmonary Resuscitation)",
      category: "Critical",
      duration: "10 min",
      steps: 8,
      icon: Heart,
      color: "emergency",
    },
    {
      id: 2,
      title: "Treating Burns",
      category: "Common Injuries",
      duration: "5 min",
      steps: 6,
      icon: BookOpen,
      color: "fire",
    },
    {
      id: 3,
      title: "Managing Fractures",
      category: "Trauma",
      duration: "8 min",
      steps: 7,
      icon: BookOpen,
      color: "earthquake",
    },
    {
      id: 4,
      title: "Choking Response",
      category: "Critical",
      duration: "6 min",
      steps: 5,
      icon: Heart,
      color: "emergency",
    },
    {
      id: 5,
      title: "Wound Care & Bleeding Control",
      category: "Common Injuries",
      duration: "7 min",
      steps: 6,
      icon: BookOpen,
      color: "firstaid",
    },
    {
      id: 6,
      title: "Heat Stroke & Exhaustion",
      category: "Environmental",
      duration: "5 min",
      steps: 5,
      icon: BookOpen,
      color: "fire",
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
            <div className="flex-1">
              <h1 className="text-2xl font-bold">First Aid Guide</h1>
              <p className="text-sm text-muted-foreground">Step-by-step emergency medical assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search & AI Assistant */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for first aid procedures..."
              className="pl-10 py-6 text-base"
            />
          </div>
          
          <Link to="/ai-chatbot">
            <Card className="p-4 bg-firstaid/10 border-firstaid/30 cursor-pointer hover:bg-firstaid/20 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-firstaid/20 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-firstaid" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-firstaid mb-1">AI First Aid Assistant</h3>
                  <p className="text-sm text-muted-foreground">
                    Ask our AI assistant for immediate guidance on any first aid situation
                  </p>
                  <button className="mt-2 text-sm font-semibold text-firstaid hover:underline">
                    Start Conversation →
                  </button>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Quick Access Videos */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Video className="h-5 w-5 text-emergency" />
            Video Tutorials
          </h2>
          <Card className="p-6 bg-gradient-to-r from-emergency/10 to-fire/10 border-emergency/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">Emergency Response Basics</h3>
                <p className="text-sm text-muted-foreground">Watch essential life-saving techniques</p>
              </div>
              <button className="px-6 py-3 bg-emergency text-white rounded-lg font-semibold hover:bg-emergency/90 transition-colors flex items-center gap-2">
                <Video className="h-4 w-4" />
                Watch Now
              </button>
            </div>
          </Card>
        </div>

        {/* First Aid Guides */}
        <div>
          <h2 className="text-xl font-bold mb-4">All Guides</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Card
                  key={guide.id}
                  className="p-6 relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-${guide.color}/10 rounded-full blur-3xl`}
                  />

                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-3 bg-${guide.color}/20 rounded-lg`}
                      >
                        <Icon className={`h-6 w-6 text-${guide.color}`} />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {guide.steps} steps
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{guide.category}</div>
                      <h3 className="text-lg font-bold">{guide.title}</h3>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>📚 {guide.duration} read</span>
                    </div>

                    <button
                      className={`w-full py-2 bg-${guide.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                    >
                      View Guide
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAid;
