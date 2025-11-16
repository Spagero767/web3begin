'use client';

import { useState } from 'react';
import { type QuizQuestion } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, RotateCw } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Quiz Completed!</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-4xl mb-4">
            {score / questions.length > 0.7 ? '🎉' : '👍'}
          </div>
          <p className="text-center text-muted-foreground">
            {score / questions.length > 0.7 
              ? "Excellent work! You've got a great grasp of this concept."
              : "Good job! Keep reviewing to strengthen your understanding."}
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRestartQuiz} className="w-full">
            <RotateCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Question {currentQuestionIndex + 1}/{questions.length}
        </CardTitle>
        <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = index === currentQuestion.correctAnswer;
          const isSelected = index === selectedAnswer;
          
          return (
            <Button
              key={index}
              variant="outline"
              className={cn(
                'w-full justify-start h-auto py-3 text-left',
                isAnswered && isCorrect && 'bg-green-500/10 border-green-500 text-green-500 hover:bg-green-500/20',
                isAnswered && isSelected && !isCorrect && 'bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500/20',
                !isAnswered && isSelected && 'bg-primary/10 border-primary'
              )}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
            >
              {option}
              {isAnswered && isCorrect && <CheckCircle2 className="ml-auto h-5 w-5" />}
              {isAnswered && isSelected && !isCorrect && <XCircle className="ml-auto h-5 w-5" />}
            </Button>
          )
        })}
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        {isAnswered && (
          <div className="w-full p-4 mb-4 rounded-lg bg-muted">
            <h4 className="font-bold mb-1">Explanation</h4>
            <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
          </div>
        )}
        <Button onClick={isAnswered ? handleNextQuestion : handleCheckAnswer} disabled={selectedAnswer === null} className="w-full">
          {isAnswered ? 'Next Question' : 'Check Answer'}
        </Button>
      </CardFooter>
    </Card>
  );
}
