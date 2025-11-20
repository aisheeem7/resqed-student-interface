import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Lock, CheckCircle, Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Quiz } from "@/components/Quiz";
import { toast } from "sonner";

const Courses = () => {
  const [showQuiz, setShowQuiz] = useState<number | null>(null);
  const [totalXP, setTotalXP] = useState(1350);

  const courses = [
    {
      id: 1,
      title: "Fire Safety Fundamentals",
      category: "Fire Safety",
      progress: 75,
      lessons: 8,
      completed: 6,
      level: "Beginner",
      color: "fire",
      locked: false,
      xp: 450,
    },
    {
      id: 2,
      title: "Earthquake Response Training",
      category: "Earthquake",
      progress: 40,
      lessons: 10,
      completed: 4,
      level: "Intermediate",
      color: "earthquake",
      locked: false,
      xp: 300,
    },
    {
      id: 3,
      title: "First Aid Basics",
      category: "First Aid",
      progress: 100,
      lessons: 6,
      completed: 6,
      level: "Beginner",
      color: "firstaid",
      locked: false,
      xp: 600,
    },
    {
      id: 4,
      title: "Flood Emergency Procedures",
      category: "Natural Disasters",
      progress: 0,
      lessons: 7,
      completed: 0,
      level: "Beginner",
      color: "safetytips",
      locked: false,
      xp: 0,
    },
    {
      id: 5,
      title: "Advanced Rescue Operations",
      category: "Emergency Response",
      progress: 0,
      lessons: 12,
      completed: 0,
      level: "Advanced",
      color: "emergency",
      locked: true,
      xp: 0,
    },
  ];

  const quizData: { [key: number]: any } = {
    3: {
      title: "First Aid Basics Quiz",
      xpReward: 200,
      questions: [
        {
          id: 1,
          question: "What is the first step when you encounter an emergency?",
          options: [
            "Call for help immediately",
            "Check for danger and ensure the scene is safe",
            "Start performing CPR",
            "Move the victim to a different location"
          ],
          correctAnswer: 1,
          explanation: "Always ensure the scene is safe before approaching. Your safety comes first - you can't help others if you become a victim too."
        },
        {
          id: 2,
          question: "What does CPR stand for?",
          options: [
            "Cardiac Pressure Relief",
            "Cardiopulmonary Resuscitation",
            "Critical Patient Recovery",
            "Chest Pressure Restoration"
          ],
          correctAnswer: 1,
          explanation: "CPR stands for Cardiopulmonary Resuscitation - a life-saving technique used when someone's heart stops beating or they stop breathing."
        },
        {
          id: 3,
          question: "What is the recommended compression-to-breath ratio for adult CPR?",
          options: [
            "15:2",
            "20:2",
            "30:2",
            "40:2"
          ],
          correctAnswer: 2,
          explanation: "The recommended ratio is 30 chest compressions followed by 2 rescue breaths for adult CPR."
        },
        {
          id: 4,
          question: "How should you treat a minor burn?",
          options: [
            "Apply ice directly to the burn",
            "Apply butter or oil",
            "Run cool (not cold) water over it for 10-20 minutes",
            "Pop any blisters that form"
          ],
          correctAnswer: 2,
          explanation: "Cool running water helps reduce pain and prevents further damage. Never use ice directly, apply butter/oil, or pop blisters."
        },
        {
          id: 5,
          question: "What should you do if someone is choking and can't cough, speak, or breathe?",
          options: [
            "Give them water to drink",
            "Perform the Heimlich maneuver (abdominal thrusts)",
            "Pat them gently on the back",
            "Wait for them to cough it out"
          ],
          correctAnswer: 1,
          explanation: "The Heimlich maneuver is the correct response for a complete airway obstruction. It uses abdominal thrusts to dislodge the object."
        }
      ]
    },
    1: {
      title: "Fire Safety Quiz",
      xpReward: 150,
      questions: [
        {
          id: 1,
          question: "What should you do first if you discover a fire?",
          options: [
            "Try to put it out yourself",
            "Alert others and activate the fire alarm",
            "Gather your belongings",
            "Open windows for ventilation"
          ],
          correctAnswer: 1,
          explanation: "Always alert others first and activate the alarm. Early warning saves lives."
        },
        {
          id: 2,
          question: "What does PASS stand for in fire extinguisher use?",
          options: [
            "Pull, Aim, Squeeze, Sweep",
            "Push, Alert, Stop, Spray",
            "Point, Activate, Spray, Stop",
            "Prepare, Alert, Squeeze, Spray"
          ],
          correctAnswer: 0,
          explanation: "PASS: Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep from side to side."
        },
        {
          id: 3,
          question: "If your clothes catch fire, you should:",
          options: [
            "Run to find water",
            "Stop, Drop, and Roll",
            "Wave your arms to put out the flames",
            "Remove the burning clothes quickly"
          ],
          correctAnswer: 1,
          explanation: "Stop, Drop, and Roll helps smother the flames. Running makes the fire worse."
        }
      ]
    }
  };

  const handleCourseAction = (courseId: number, progress: number) => {
    if (progress === 100 && quizData[courseId]) {
      setShowQuiz(courseId);
    } else {
      toast.info("Course content coming soon!", {
        description: "Interactive lessons will be available here"
      });
    }
  };

  const handleQuizComplete = (score: number, xp: number) => {
    setTotalXP(totalXP + xp);
    toast.success(`Quiz Complete! +${xp} XP`, {
      description: `You scored ${score} out of ${quizData[showQuiz!].questions.length}!`
    });
    setTimeout(() => {
      setShowQuiz(null);
    }, 3000);
  };

  if (showQuiz !== null && quizData[showQuiz]) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <button 
                  onClick={() => setShowQuiz(null)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold">Quiz Time!</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">Test your knowledge</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs sm:text-sm text-muted-foreground">Total XP</p>
                <p className="text-base sm:text-xl font-bold text-primary">{totalXP} XP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Content */}
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
          <Quiz
            title={quizData[showQuiz].title}
            questions={quizData[showQuiz].questions}
            xpReward={quizData[showQuiz].xpReward}
            onComplete={handleQuizComplete}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <Link to="/">
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </Link>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold">My Courses</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Continue your safety training journey</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-right">
                <p className="text-xs sm:text-sm text-muted-foreground">Total XP</p>
                <p className="text-base sm:text-xl font-bold text-primary">{totalXP} XP</p>
              </div>
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`p-4 sm:p-6 relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${
                course.locked ? "opacity-60" : "cursor-pointer"
              }`}
              onClick={() => !course.locked && handleCourseAction(course.id, course.progress)}
            >
              {/* Background Accent */}
              <div
                className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-${course.color}/10 rounded-full blur-3xl`}
              />

              {/* Lock Badge */}
              {course.locked && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                </div>
              )}

              {/* Completion Badge */}
              {course.progress === 100 && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-firstaid" />
                </div>
              )}

              <div className="relative">
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                  <Badge
                    variant="secondary"
                    className={`bg-${course.color}/20 text-${course.color} border-${course.color}/30 text-xs sm:text-sm`}
                  >
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">{course.level}</Badge>
                </div>

                <h3 className="text-base sm:text-xl font-bold mb-2">{course.title}</h3>

                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <span>{course.lessons} Lessons</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                    {course.xp} XP
                  </span>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-1.5 sm:h-2" />
                  <p className="text-xs text-muted-foreground">
                    {course.completed} of {course.lessons} lessons completed
                  </p>
                </div>

                {/* Action Button */}
                {!course.locked && (
                  <button
                    className={`mt-3 sm:mt-4 w-full py-2 sm:py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm sm:text-base ${
                      course.progress === 0
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : course.progress === 100
                        ? "bg-firstaid text-white hover:bg-firstaid/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                    {course.progress === 0
                      ? "Start Course"
                      : course.progress === 100
                      ? quizData[course.id] ? "Take Quiz" : "Review"
                      : "Continue"}
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
