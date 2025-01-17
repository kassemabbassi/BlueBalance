import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Card3D({ E1, E2, IM1, IM2, txt1, txt2 }) {
    const [rotation, setRotation] = useState(0); // Rotation state
    const [isFlipped, setIsFlipped] = useState(false); // Content toggle state

    useEffect(() => {
        const interval = setInterval(() => {
            // Start rotating
            setRotation(360);

            // Toggle content only after the rotation animation completes
            setTimeout(() => {
                setRotation(0); // Reset rotation to 0
                setIsFlipped((prev) => !prev); // Toggle content
            }, 3000); // Adjusted to match the new rotation duration (3 seconds)

        }, 3000); // Trigger every 3 seconds

        return () => { clearInterval(interval); setRotation(0); }; // Cleanup interval
    }, []);

    return (
        <motion.div
            className=" h-80 w-80 overflow-hidden rounded-lg shadow-xl border-gray-200 transform transition-transform duration-2s" // Extended transition duration for smoother rotation
            style={{ perspective: 1000 }} // Adds a 3D perspective
            animate={{
                rotateY: rotation, // Controlled rotation
            }}
            transition={{
                duration: 2  // Extended duration for smoother rotation
            }}
        >

            <div className="max-w-sm border h-80 w-80 rounded-lg ">
                {isFlipped ? (
                    <div className="flex flex-col items-center p-4">
                        <img
                            className="w-32 h-32 mb-3 rounded-full shadow-lg"
                            src={IM1}
                            alt="Another image"
                        />
                        <h5 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                            {E1}
                        </h5>
                        <span className="text-lg text-gray-400 dark:text-gray-300"
                        >{txt1}</span>
                    </div>
                ) : (
                    <div className="flex flex-col items-center p-4">
                        <img
                            className="w-32 h-32 mb-3 rounded-full shadow-lg"
                            src={IM2}
                            alt="Bonnie image"
                        />
                        <h5 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                            {E2}
                        </h5>
                        <span className="text-lg text-gray-400 dark:text-gray-300"
                        >
                            {txt2}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
