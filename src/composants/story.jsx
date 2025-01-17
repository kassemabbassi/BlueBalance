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
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-4xl p-4 space-y-4 text-center bg-black rounded-lg shadow-lg">
        <div className="w-full">
          <img
            src="StoryWallpaper.jpg"
            alt="Image"
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
        <div>
          {!gameOver ? (
            <>
              <p className="text-lg md:text-xl font-medium text-gray-200 leading-relaxed">
                Remarque : chaque réponse peut améliorer ou bien détruire l'état des récifs coralliens.
              </p>
              <p className="text-lg md:text-xl font-medium text-gray-200 leading-relaxed">
                {currentStepData.paragraph}
              </p>
              <p className="text-lg md:text-xl text-gray-200">
                état actuel des récifs coralliens: {coralHealth} / 100
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${coralHealth}%` }}
                />
              </div>
            </>
          ) : (
            <>
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                {getFinalComment()}
              </p>
              <p className="text-lg md:text-xl text-gray-700">Score final : {coralHealth} / 100</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${coralHealth}%` }}
                />
              </div>
            </>
          )}
        </div>

        {!gameOver && (
          <div className="mt-6 space-y-4">
            {currentStepData.choices.map((choice, index) => (
              <label key={index} className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="option"
                  value={choice.label}
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  checked={selectedOption === choice.label}
                  onChange={() => setSelectedOption(choice.label)}
                />
                <span className="text-lg md:text-xl text-gray-700">{choice.label}</span>
              </label>
            ))}
          </div>
        )}

        {!gameOver && (
          <button
            className="mt-6 w-full py-3 text-lg md:text-xl font-semibold bg-blue-600 text-white rounded-lg"
            onClick={() => {
              if (selectedOption) {
                const selectedChoice = currentStepData.choices.find(
                  (choice) => choice.label === selectedOption
                );
                handleChoice(selectedChoice.effect);
              }
              goToNextStep();
            }}
            disabled={!selectedOption}
          >
            Continuer
          </button>
        )}

        {gameOver && (
          <button
            className="mt-6 w-full py-3 text-lg md:text-xl font-semibold bg-green-600 text-white rounded-lg"
            onClick={resetGame}
          >
            Essayer de nouveau
          </button>
        )}
      </div>
    </div>
  );
}
