import React from 'react';
import { Link } from 'react-router-dom';
const Score = ({ score, totalQuestions }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="max-w-sm w-full bg-black p-6 rounded-lg shadow-[0_0_10px_5px_rgba(191,123,255,0.7)] text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Votre score final</h2>
        <p className="text-xl text-purple-300">
          Vous avez répondu correctement à{' '}
          <span className="text-purple-400 font-semibold">{score}</span> sur{' '}
          <span className="text-purple-400 font-semibold">{totalQuestions}</span> questions !
        </p>
        <p className="mt-4 text-gray-400"></p>
        <Link
        to='/story'
              className="mt-30 py-4 px-8 text-sm font-bold text-purple-300 bg-purple-700 border-2 border-purple-300 rounded-full shadow-[0_0_4em_1em_rgba(191,123,255,0.781)] hover:text-purple-700 hover:bg-purple-300 hover:shadow-[0_0_4em_2em_rgba(191,123,255,0.781)] active:shadow-[0_0_2.5em_2em_rgba(191,123,255,0.781)] focus:outline-none transition-all duration-300 w-1/2"
            >passer au story !</Link>
      </div>
    </div>
  );
};

export default Score;