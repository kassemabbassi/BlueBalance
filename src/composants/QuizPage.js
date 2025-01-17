import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';  // Importation de Router, Routes et Route
import Model from '../Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Card from './Card';

function App() {
  const navigate = useNavigate();  // Déclaration de useNavigate pour la redirection
  const [answerStatus, setAnswerStatus] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10); // 10 secondes pour la démonstration
  const [score, setScore] = useState(0); // Suivi du score
  const [quizEnded, setQuizEnded] = useState(false);

  const updateAnswerStatus = (status, isCorrect) => {
    setAnswerStatus(status);
    if (isCorrect) {
      setScore(score + 0.5);
    } else {
      setScore(score - 1);
    }
  };

  // Décrémenter le timer chaque seconde
 useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0 && !quizEnded) {
        setTimeLeft(timeLeft - 1);
      } else if (timeLeft === 0) {
        setQuizEnded(true);
        alert(`Temps écoulé ! Votre score est : ${score}`);
        clearInterval(timer);

        // Redirection automatique vers la page des résultats après que le quiz est terminé
        navigate('/result', { state: { score } });  // Utilisation de navigate pour aller à /result avec le score
      }
    }, 1000);

    return () => clearInterval(timer); // Nettoyage du timer lors du démontage du composant
  }, [timeLeft, quizEnded, score, navigate]);

  // Lorsque le quiz est terminé, affiche le score
  useEffect(() => {
    if (quizEnded) {
      alert(`Quiz terminé ! Votre score est : ${score}`);
    }
  }, [quizEnded, score]);

  return (
    <div className='pt-[81px]  bg-blue-950 h-screen'
      >

      <div className="grid sm:grid-cols-2 gap-5 ">
        {/* Section du quiz : centrée */}
        <div >
          <Card updateAnswerStatus={updateAnswerStatus} />
        </div>

        {/* Section du modèle 3D : positionnée à droite */}
        <div >
          <Canvas camera={{ position: [-10, 0, 30], fov: 75 }} className="w-full h-full">
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 0, 5]} intensity={1} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>
      </div>

      {/* Affichage du timer */}
      quizEnded && (
        <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full">
          Temps restant : {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </div>
      )
    </div>
  );
}

function Result() {
  const navigate = useNavigate();
  const location = useNavigate();
  const { state } = location;
  const { score } = state || { score: 0 }; // Récupérer le score passé depuis App.js

  // Fonction pour rejouer
  const handleRejouer = () => {
    navigate('/');  // Rediriger vers le quiz
  };

  // Fonction pour passer au storie
  const handlePasserAuStorie = () => {
    // Changez cette logique en fonction de l'endroit où vous souhaitez aller pour le storie
    navigate('/storie');  // Exemple de redirection vers une autre page (ajoutez votre propre route si nécessaire)
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold">Résultats</h1>
        <p className="text-xl mt-4">Votre score est : {score}</p>
        <div className="mt-6">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            onClick={handleRejouer}
          >
            Rejouer
          </button>
        </div>
        <div className="mt-4">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700"
            onClick={handlePasserAuStorie}
          >
            Passer au Storie
          </button>
        </div>
      </div>
    </div>
  );
}

// Le composant principal avec Router, Routes et Route
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />  {/* La route principale pour le quiz */}
        <Route path="/result" element={<Result />} />  {/* La route pour afficher les résultats */}
        <Route path="/storie" element={<div>Storie Page</div>} />  {/* Exemple de page pour le storie */}
      </Routes>
    </Router>
  );
}

export default Main;
