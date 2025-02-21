import React from 'react';

const Card = ({ question, onAnswer, isAnswered, isCorrect, explanation, onNext, timeLeft }) => {
  return (
    <div className="p-6">
      <div className="relative backdrop-blur-sm transform transition-all duration-300">
        {/* Image avec overlay gradient */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl">
          <img 
            src={question.image} 
            alt="question" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
        </div>

        {/* Question */}
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Boutons de réponse */}
        {!isAnswered && timeLeft > 0 ? (
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => onAnswer(true)}
              className="group relative px-8 py-4 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300
                bg-gradient-to-r from-blue-400/20 to-blue-600/20 hover:from-blue-400/40 hover:to-blue-600/40
                border border-blue-300/30 hover:border-blue-300/50
                text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10">Vrai</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => onAnswer(false)}
              className="group relative px-8 py-4 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300
                bg-gradient-to-r from-blue-400/20 to-blue-600/20 hover:from-blue-400/40 hover:to-blue-600/40
                border border-blue-300/30 hover:border-blue-300/50
                text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10">Faux</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {/* Résultat */}
            <div className="text-center space-y-4">
              <p className={`text-2xl font-bold ${
                isCorrect 
                  ? 'text-green-400 animate-pulse' 
                  : 'text-red-400 animate-pulse'
              }`}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </p>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-blue-50 text-lg">{explanation}</p>
              </div>
            </div>

            {/* Bouton suivant */}
            <div className="flex justify-center">
              <button
                onClick={onNext}
                className="group relative px-8 py-4 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300
                  bg-gradient-to-r from-blue-500/30 to-blue-700/30 hover:from-blue-500/50 hover:to-blue-700/50
                  border border-blue-300/30 hover:border-blue-300/50
                  text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <span className="relative z-10">Question suivante</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        )}

        {/* Effet de brillance sur les bords */}
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-shimmer" />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Card;