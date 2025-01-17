import React from 'react';

const Card = ({ question, onAnswer, isAnswered, isCorrect, explanation, onNext, timeLeft }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-sm w-full bg-black p-6 rounded-lg shadow-[0_0_10px_5px_rgba(191,123,255,0.7)] transform transition-all duration-300 hover:scale-105">
        <img src={question.image} alt="question" className="w-full h-48 object-cover rounded-lg shadow-md" />
        <h2 className="text-xl font-semibold mt-4 text-center text-white">{question.question}</h2>

        {/* Affichage des boutons Vrai/Faux */}
        {!isAnswered && timeLeft > 0 ? (
          <div className="mt-6 flex justify-between gap-4">
            <button
              onClick={() => onAnswer(true)}
              className="mt-10 py-4 px-8 text-sm font-bold text-purple-300 bg-purple-700 border-2 border-purple-300 rounded-full shadow-[0_0_4em_1em_rgba(191,123,255,0.781)] hover:text-purple-700 hover:bg-purple-300 hover:shadow-[0_0_4em_2em_rgba(191,123,255,0.781)] active:shadow-[0_0_2.5em_2em_rgba(191,123,255,0.781)] focus:outline-none transition-all duration-300 w-1/2"
            >
              Vrai
            </button>
            <button
              onClick={() => onAnswer(false)}
              className="mt-10 py-4 px-8 text-sm font-bold text-purple-300 bg-purple-700 border-2 border-purple-300 rounded-full shadow-[0_0_4em_1em_rgba(191,123,255,0.781)] hover:text-purple-700 hover:bg-purple-300 hover:shadow-[0_0_4em_2em_rgba(191,123,255,0.781)] active:shadow-[0_0_2.5em_2em_rgba(191,123,255,0.781)] focus:outline-none transition-all duration-300 w-1/2"
            >
              Faux
            </button>
          </div>
        ) : (
          // Affichage de l'explication
          <div className="mt-6 text-center">
            <p className={`text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'} font-semibold`}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </p>
            <p className="mt-2 text-gray-200">{explanation}</p>

            {/* Bouton pour passer à la question suivante */}
            <button
              onClick={onNext}
              className="mt-4 py-2 px-6 text-sm font-bold text-purple-300 bg-purple-700 border-2 border-purple-300 rounded-full shadow-[0_0_4em_1em_rgba(191,123,255,0.781)] hover:text-purple-700 hover:bg-purple-300 hover:shadow-[0_0_4em_2em_rgba(191,123,255,0.781)] active:shadow-[0_0_2.5em_2em_rgba(191,123,255,0.781)] focus:outline-none transition-all duration-300"
            >
              Question suivante
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
