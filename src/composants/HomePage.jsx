import React from 'react';
import { Link } from 'react-router-dom';
import Card3D from './Card3D';

export default function HomePage() {
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

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Hero Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start py-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6">
              <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                Océan et l'Homme : Vers une Nouvelle Conscience
              </h1>
              <div className="mt-4 space-y-4">
                <p className="text-base md:text-lg text-gray-200">
                  Explorez les parallèles fascinants entre
                </p>
                <p className="text-base md:text-lg text-blue-100 font-bold">
                  l'Océan et le corps humain
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Deux systèmes vitaux dont la préservation est essentielle pour l'équilibre de notre planète et notre santé.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/quiz"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700/70 border-2 border-blue-300/30 rounded-full hover:bg-blue-500/70 hover:border-blue-300/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] focus:outline-none transition-all duration-300"
                >
                  Lancez Un Quiz
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Cards Grid Section */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
              <div className="w-full max-w-sm">
                <Card3D
                  IM1={"c1.png"}
                  IM2={"c2.png"}
                  E1={"Le cœur humain"}
                  E2={"la circulation thermohaline"}
                  txt1={"Un dysfonctionnement cardiaque perturbe la circulation sanguine, réduisant l'oxygénation des organes."}
                  txt2={"Un arrêt de la circulation thermohaline modifie le climat mondial, provoquant des dérèglements environnementaux."}
                />
              </div>
              <div className="w-full max-w-sm">
                <Card3D
                  IM1={"c3.png"}
                  IM2={"c4.jpg"}
                  E1={"Poumons humains"}
                  E2={"l'oxygénation marine"}
                  txt1={"Un dysfonctionnement pulmonaire réduit l'oxygénation du corps et perturbe ses fonctions vitales."}
                  txt2={"L'épuisement de l'oxygène marin affecte la vie aquatique et déséquilibre les écosystèmes marins."}
                />
              </div>
              <div className="w-full max-w-sm md:col-span-2 lg:col-span-1">
                <Card3D
                  IM1={"c5.png"}
                  IM2={"c6.jpg"}
                  E1={"Vaisseaux sanguins"}
                  E2={"Circulation océanique"}
                  txt1={"Un dysfonctionnement des vaisseaux sanguins perturbe l'oxygénation des organes."}
                  txt2={"Un dysfonctionnement de la circulation océanique perturbe la régulation thermique du climat."}
                />
              </div>
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
}