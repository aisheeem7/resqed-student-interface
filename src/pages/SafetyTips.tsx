import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, AlertTriangle, Shield, Zap, Droplets, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SafetyTips = () => {
  const categories = [
    {
      id: 1,
      name: "Fire Safety",
      icon: Zap,
      color: "fire",
      tips: 12,
      bgColor: "bg-fire/10",
    },
    {
      id: 2,
      name: "Earthquake Safety",
      icon: AlertTriangle,
      color: "earthquake",
      tips: 10,
      bgColor: "bg-earthquake/10",
    },
    {
      id: 3,
      name: "Flood Safety",
      icon: Droplets,
      color: "safetytips",
      tips: 8,
      bgColor: "bg-safetytips/10",
    },
    {
      id: 4,
      name: "Home Safety",
      icon: Home,
      color: "firstaid",
      tips: 15,
      bgColor: "bg-firstaid/10",
    },
    {
      id: 5,
      name: "Personal Security",
      icon: Shield,
      color: "drill",
      tips: 9,
      bgColor: "bg-drill/10",
    },
  ];

  const featuredTips = [
    {
      id: 1,
      title: "Know Your Evacuation Routes",
      description: "Familiarize yourself with at least two exit routes from every room. Practice using them regularly.",
      category: "Emergency Planning",
      priority: "High",
      color: "emergency",
    },
    {
      id: 2,
      title: "Keep Emergency Kit Ready",
      description: "Maintain a kit with water, food, first-aid supplies, flashlight, and important documents.",
      category: "Preparedness",
      priority: "High",
      color: "firstaid",
    },
    {
      id: 3,
      title: "Test Smoke Alarms Monthly",
      description: "Check your smoke alarms every month and replace batteries twice a year.",
      category: "Fire Safety",
      priority: "Critical",
      color: "fire",
    },
  ];

  const quickTips = [
    "Drop, Cover, and Hold during earthquakes",
    "Never use elevators during fire emergencies",
    "Keep emergency numbers on speed dial",
    "Store important documents in waterproof containers",
    "Learn basic first aid skills",
    "Create a family emergency plan",
    "Know the location of fire extinguishers",
    "Keep your phone charged during storms",
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
              <h1 className="text-2xl font-bold">Safety Tips</h1>
              <p className="text-sm text-muted-foreground">Essential guidelines to stay safe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Featured Tips */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Featured Safety Tips
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredTips.map((tip) => (
              <Card
                key={tip.id}
                className="p-6 relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-${tip.color}/10 rounded-full blur-3xl`}
                />

                <div className="relative space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {tip.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${
                        tip.priority === "Critical"
                          ? "bg-emergency/20 border-emergency/30 text-emergency"
                          : "bg-fire/20 border-fire/30 text-fire"
                      }`}
                    >
                      {tip.priority}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className={`p-6 relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl cursor-pointer ${category.bgColor}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-${category.color}/20 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.tips} tips available</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Tips */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Safety Reminders</h2>
          <Card className="p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {quickTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;
