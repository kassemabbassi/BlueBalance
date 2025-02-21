import { useState } from "react";

export default function Story() {
  const [coralHealth, setCoralHealth] = useState(50);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const steps = [
    {
      paragraph: (
        <>
          Vous êtes le Voyageur, un explorateur envoyé pour sauver un monde
          océanique vivant. Cet univers est une représentation du corps humain.
          Son système circulatoire (les courants), son système respiratoire (les
          échanges gazeux), et son système immunitaire (les récifs coralliens)
          sont en danger. Vos choix détermineront si vous sauvez ou détruisez ce
          monde.
          <hr />
          <br />
          Les récifs coralliens sont en bonne santé au départ, mais il faut les
          préserver.
        </>
      ),
      choices: [
        { label: "Replanter des coraux", effect: 15 },
        { label: "Laisser la nature suivre son cours", effect: 5 },
        { label: "Ignorer les récifs", effect: -10 },
      ],
    },
    {
      paragraph: "Les températures augmentent et les récifs commencent à se fragiliser.",
      choices: [
        { label: "Réduire la pollution", effect: 20 },
        { label: "Augmenter la température de l'eau", effect: -5 },
        { label: "Rien faire", effect: -15 },
      ],
    },
    {
      paragraph: "Les récifs sont endommagés par la pollution.",
      choices: [
        { label: "Organiser un nettoyage", effect: 25 },
        { label: "Continuer comme ça", effect: -20 },
        { label: "Ignorer la pollution", effect: -30 },
      ],
    },
    {
      paragraph: "Les récifs subissent des dommages importants dus à la surpêche.",
      choices: [
        { label: "Introduire des réglementations strictes", effect: 20 },
        { label: "Laisser la pêche se poursuivre", effect: -10 },
        { label: "Accroître la pêche", effect: -30 },
      ],
    },
    {
      paragraph: "Les températures augmentent de manière significative, et les coraux blanchissent.",
      choices: [
        { label: "Réduire les émissions de gaz à effet de serre", effect: 30 },
        { label: "Accepter l'augmentation de la température", effect: -25 },
        { label: "Ignorer les changements", effect: -40 },
      ],
    },
    {
      paragraph: "Les récifs commencent à se régénérer grâce à une action collective.",
      choices: [
        { label: "Encourager plus de nettoyage", effect: 20 },
        { label: "Réduire les efforts et attendre", effect: -10 },
        { label: "Cesser les efforts", effect: -50 },
      ],
    },
    {
      paragraph: "Les récifs sont presque sauvés grâce aux actions humaines.",
      choices: [
        { label: "Continuer les efforts", effect: 15 },
        { label: "Réduire les efforts", effect: -5 },
        { label: "Arrêter les efforts", effect: -30 },
      ],
    },
  ];

  function handleChoice(choiceEffect) {
    setCoralHealth((prevHealth) => {
      const newHealth = prevHealth + choiceEffect;
      return Math.min(100, Math.max(0, newHealth));
    });
  }

  function goToNextStep() {
    setSelectedOption(null);
    if (currentStep + 1 < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setGameOver(true);
    }
  }

  const getFinalComment = () => {
    if (coralHealth >= 80) {
      return "Félicitations ! Vous avez bien préservé les récifs.";
    } else if (coralHealth >= 50) {
      return "Bon travail, mais quelques améliorations sont nécessaires.";
    } else {
      return "Les récifs sont gravement endommagés. Essayez de faire mieux.";
    }
  };

  const resetGame = () => {
    setCoralHealth(50);
    setCurrentStep(0);
    setSelectedOption(null);
    setGameOver(false);
  };

  const currentStepData = steps[currentStep];

 
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400 overflow-hidden">
      {/* Animated ocean waves background */}
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

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl space-y-6 backdrop-blur-sm bg-white/10 rounded-2xl shadow-2xl p-8 text-white">
          {/* Header Image */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl">
            <img
              src="StoryWallpaper.jpg"
              alt="Ocean Scene"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {!gameOver ? (
              <>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl font-medium text-blue-100 leading-relaxed">
                    Remarque : chaque réponse peut améliorer ou bien détruire l'état des récifs coralliens.
                  </p>
                  <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                    {steps[currentStep].paragraph}
                  </p>
                </div>

                {/* Health Bar */}
                <div className="space-y-2">
                  <p className="text-lg md:text-xl text-blue-100">
                    État actuel des récifs coralliens: {coralHealth} / 100
                  </p>
                  <div className="w-full bg-blue-900/50 rounded-full h-4 p-1">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        coralHealth > 70 ? 'bg-green-400' : coralHealth > 30 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${coralHealth}%` }}
                    >
                      <div className="w-full h-full animate-pulse opacity-75" />
                    </div>
                  </div>
                </div>

                {/* Choices */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {steps[currentStep].choices.map((choice, index) => (
                    <label
                      key={index}
                      className={`relative flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedOption === choice.label
                          ? 'bg-blue-500/40 border-2 border-blue-300'
                          : 'bg-blue-800/30 hover:bg-blue-700/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="option"
                        value={choice.label}
                        className="absolute opacity-0"
                        checked={selectedOption === choice.label}
                        onChange={() => setSelectedOption(choice.label)}
                      />
                      <span className="text-lg text-white">{choice.label}</span>
                    </label>
                  ))}
                </div>

                <button
                  className={`w-full py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 ${
                    selectedOption
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-blue-900/50 text-blue-300 cursor-not-allowed'
                  }`}
                  onClick={() => {
                    if (selectedOption) {
                      const selectedChoice = steps[currentStep].choices.find(
                        (choice) => choice.label === selectedOption
                      );
                      handleChoice(selectedChoice.effect);
                      goToNextStep();
                    }
                  }}
                  disabled={!selectedOption}
                >
                  Continuer
                </button>
              </>
            ) : (
              <div className="space-y-6 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {getFinalComment()}
                </p>
                <p className="text-xl text-blue-100">Score final : {coralHealth} / 100</p>
                <div className="w-full bg-blue-900/50 rounded-full h-4 p-1">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      coralHealth > 70 ? 'bg-green-400' : coralHealth > 30 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${coralHealth}%` }}
                  />
                </div>
                <button
                  className="w-full py-4 text-lg md:text-xl font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300"
                  onClick={resetGame}
                >
                  Essayer de nouveau
                </button>
              </div>
            )}
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
}