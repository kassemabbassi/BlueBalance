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
  const [timeLeft, setTimeLeft] = useState(120);

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
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setQuizFinished(true);
    }
  }, [timeLeft, quizFinished]);

  const Timer = () => (
    <div className="relative w-32 h-32 bg-transparent flex justify-center items-center rounded-full">
      <div className="absolute w-full h-full bg-blue-900/40 backdrop-blur-sm rounded-full border-2 border-blue-300/30"></div>
      <div
        className="absolute w-full h-full flex justify-center items-center text-4xl font-bold"
        style={{ color: timeLeft < 60 ? '#ff6b6b' : '#fff', backgroundColor: 'transparent' }}
      >
        <span className="animate-pulse">{timeLeft}</span>
      </div>
      <svg className="absolute w-full h-full -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="60"
          fill="none"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="4"
        />
        <circle
          cx="64"
          cy="64"
          r="60"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeDasharray={`${(timeLeft / 120) * 377} 377`}
          className="transition-all duration-1000"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400 overflow-hidden">
      {/* Animated ocean waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-wave-slow bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_40%)]" />
        <div className="absolute inset-0 animate-wave-fast bg-[radial-gradient(circle_at_50%_110%,rgba(255,255,255,0.15)_0%,transparent_35%)]" />
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble animate-float-slow" style={{ left: '10%', animationDelay: '0s' }} />
        <div className="bubble animate-float-medium" style={{ left: '20%', animationDelay: '2s' }} />
        <div className="bubble animate-float-fast" style={{ left: '80%', animationDelay: '1s' }} />
        <div className="bubble animate-float-slow" style={{ left: '60%', animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8 relative">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
          {/* Quiz Card */}
          <div className="w-full lg:flex-1 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 mt-12 lg:mt-24">
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

          {/* Timer Section */}
          <div className="w-full lg:w-48 flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 lg:mt-40">
            <Timer />
            <div className="mt-4 text-center">
              <span className="text-white font-medium text-lg">Temps restant</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, white, rgba(255, 255, 255, 0.2));
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        @keyframes float-slow {
          0% { transform: translateY(100vh) scale(1); }
          100% { transform: translateY(-100px) scale(0.5); }
        }

        @keyframes float-medium {
          0% { transform: translateY(100vh) scale(1.2); }
          100% { transform: translateY(-100px) scale(0.7); }
        }

        @keyframes float-fast {
          0% { transform: translateY(100vh) scale(0.8); }
          100% { transform: translateY(-100px) scale(0.3); }
        }

        @keyframes wave {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }

        .animate-float-slow {
          animation: float-slow 15s linear infinite;
        }

        .animate-float-medium {
          animation: float-medium 12s linear infinite;
        }

        .animate-float-fast {
          animation: float-fast 10s linear infinite;
        }

        .animate-wave-slow {
          animation: wave 8s linear infinite;
        }

        .animate-wave-fast {
          animation: wave 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Quiz;