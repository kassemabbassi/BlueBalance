import React, { useState, useEffect } from 'react';
import questions from './questions';
import Card from './Card';
import Score from './Score';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 10 seconds for testing

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const correctAnswer = currentQuestion.answer;
    setIsCorrect(answer === correctAnswer);
    setIsAnswered(true);
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setIsAnswered(false);
      setIsCorrect(null);
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup
    } else if (timeLeft === 0) {
      setQuizFinished(true); // End quiz when time runs out
    }
  }, [timeLeft, quizFinished]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-4xl flex justify-between items-center space-x-8">
        <div className="flex-1">
          {quizFinished ? (
            <Score score={score} totalQuestions={questions.length} />
          ) : (
            <Card
              question={currentQuestion}
              onAnswer={handleAnswer}
              isAnswered={isAnswered}
              isCorrect={isCorrect}
              explanation={currentQuestion.explanation}
              onNext={nextQuestion}
              timeLeft={timeLeft}
            />
          )}
        </div>

        <div className="relative w-48 h-48 bg-transparent flex justify-center items-center rounded-full ml-8">
          <div className="absolute w-full h-full bg-gray-800 rounded-full"></div>
          <div className="absolute w-full h-full flex justify-center items-center text-6xl font-bold"
               style={{ color: timeLeft < 60 ? 'red' : 'white', backgroundColor: 'transparent' }}>
            <span className="animate-pulse">{timeLeft}</span>
          </div>
          <div
            className="absolute w-full h-full bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
            style={{
              clipPath: `polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%, 50% 50%)`,
              transform: `rotate(${(300 - timeLeft) / 300 * 360}deg)`,
              transition: 'transform 1s linear',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;