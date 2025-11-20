import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Award, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
  xpReward: number;
  onComplete: (score: number, xp: number) => void;
}

export const Quiz = ({ title, questions, xpReward, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      const finalScore = selectedAnswer === questions[currentQuestion].correctAnswer ? score + 1 : score;
      const earnedXP = Math.round((finalScore / questions.length) * xpReward);
      setCompleted(true);
      onComplete(finalScore, earnedXP);
    }
  };

  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (completed) {
    const finalScore = score;
    const earnedXP = Math.round((finalScore / questions.length) * xpReward);
    const percentage = (finalScore / questions.length) * 100;

    return (
      <Card className="p-8 text-center bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
        <div className="mb-6">
          <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-muted-foreground">Great work on completing the quiz</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-firstaid/10 border-firstaid/30">
            <p className="text-sm text-muted-foreground mb-1">Score</p>
            <p className="text-2xl font-bold text-firstaid">{finalScore}/{questions.length}</p>
          </Card>
          <Card className="p-4 bg-primary/10 border-primary/30">
            <p className="text-sm text-muted-foreground mb-1">Percentage</p>
            <p className="text-2xl font-bold text-primary">{percentage.toFixed(0)}%</p>
          </Card>
          <Card className="p-4 bg-yellow-500/10 border-yellow-500/30">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <p className="text-sm text-muted-foreground">XP Earned</p>
            </div>
            <p className="text-2xl font-bold text-yellow-500">+{earnedXP}</p>
          </Card>
        </div>

        <Button onClick={() => window.location.reload()} className="w-full sm:w-auto">
          Back to Courses
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
          <Badge variant="secondary" className="w-fit">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg sm:text-xl font-semibold leading-relaxed">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const showCorrect = showExplanation && index === questions[currentQuestion].correctAnswer;
            const showWrong = showExplanation && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  showCorrect
                    ? "border-firstaid bg-firstaid/10"
                    : showWrong
                    ? "border-emergency bg-emergency/10"
                    : isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex-1">{option}</span>
                  {showCorrect && <CheckCircle className="h-5 w-5 text-firstaid flex-shrink-0" />}
                  {showWrong && <XCircle className="h-5 w-5 text-emergency flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <Card className={`p-4 ${isCorrect ? "bg-firstaid/10 border-firstaid/30" : "bg-emergency/10 border-emergency/30"}`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-firstaid flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-emergency flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={`font-semibold mb-1 ${isCorrect ? "text-firstaid" : "text-emergency"}`}>
                  {isCorrect ? "Correct!" : "Incorrect"}
                </p>
                <p className="text-sm text-foreground/90">{questions[currentQuestion].explanation}</p>
              </div>
            </div>
          </Card>
        )}

        <div className="flex gap-3 pt-4">
          {!showExplanation ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full sm:w-auto"
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext} className="w-full sm:w-auto">
              {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
