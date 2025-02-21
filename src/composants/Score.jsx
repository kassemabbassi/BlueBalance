import React from 'react';
import { Link } from 'react-router-dom';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="flex justify-center items-center min-h-screen relative bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400 overflow-hidden px-4">
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

      <div className="max-w-sm w-full bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Votre score final</h2>
        <p className="text-xl text-blue-200">
          Vous avez répondu correctement à{' '}
          <span className="text-blue-100 font-semibold">{score}</span> sur{' '}
          <span className="text-blue-100 font-semibold">{totalQuestions}</span> questions !
        </p>
        <Link
          to="/story"
          className="mt-6 inline-block py-3 px-6 text-sm font-bold text-white bg-blue-700/70 border-2 border-blue-300/30 rounded-full hover:bg-blue-500/70 hover:border-blue-300/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] active:shadow-[0_0_10px_rgba(59,130,246,0.7)] focus:outline-none transition-all duration-300"
        >
          Passer au story !
        </Link>
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

export default Score;