    import React from 'react';
    import Card3D from './Card3D';
    import { motion } from 'motion/react';
    import { Link } from 'react-router-dom';
    export default function HomePage() {
        return (
            <div className="pt-[81px] bg-gradient-to-b from-indigo-900 to-teal-700 mb-100"
>
                <div className=" grid sm:grid-cols-2 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg mt-10 p-10  flex flex-col items-center justify-center text-center lg:w-full sm:max-w-lg mx-auto min-h-screen">
                        <div className='flex-col pb-20' >
                            <h1 className="text-3xl font-bold tracking-tight text-blue-100 sm:text-5xl lg:text-6xl "

                            >
                                Océan et l'Homme : Vers une Nouvelle Conscience
                            </h1>
                            <p>
                                <p className="mt-4 text-lg sm:text-xl text-gray-200 "
                                >
                                    Explorez les parallèles fascinants entre
                                </p><p className="mt-4 text-lg sm:text-xl text-blue-100 font-bold"
                                >
                                    l’Océan et le corps huamin
                                </p><p className="mt-4 text-lg sm:text-xl text-gray-200">
                                     Deux systèmes vitaux dont la préservation est essentielle pour l’équilibre de notre planète et notre santé.
                                </p>
                            </p>
                            <div className='pt-10 items-center justify-center'>

                                <Link to='/quiz' 
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Lancez Un Quiz
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                                
                            </div>

                        </div>
                    </div>
                    <div /*className="mt-10 p-10 bg-white/50 rounded-lg"*/>
                {/* Decorative image grid */}
                <div
                    aria-hidden="true"
                    className="relative grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center"
                >
                    <div className="justify-center items-center h-70 w-70 mt-24"
                    >
                        <Card3D 
                            IM1={"c1.png"} 
                            IM2={"c2.png"} 
                            E1={"Le cœur humain"} 
                            E2={"la circulation thermohaline"}
                            txt1={"Un dysfonctionnement cardiaque perturbe la circulation sanguine, réduisant l'oxygénation des organes."} 
                            txt2={"Un arrêt de la circulation thermohaline modifie le climat mondial, provoquant des dérèglements environnementaux."} 
                        />
                    </div>

                    <div className="justify-center items-center h-70 w-70 mt-24 ml-20"
                    >
                        <Card3D 
                            IM1={"c3.png"} 
                            IM2={"c4.jpg"} 
                            E1={"Poumons humains"} 
                            E2={"l’oxygénation marine"}
                            txt1={"Un dysfonctionnement pulmonaire réduit l'oxygénation du corps et perturbe ses fonctions vitales."} 
                            txt2={"L'épuisement de l'oxygène marin affecte la vie aquatique et déséquilibre les écosystèmes marins."} 
                        />
                    </div>

                    <div className="justify-center items-center h-70 w-70 mt-10 ml-96"
                    >
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
        );
    }
