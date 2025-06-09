import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeroContent {
  text: string;
  image: string;
}

const heroContents: HeroContent[] = [
  {
    text: "To be a leading Global Innovative Solutions provider for the ever changing needs of the society.",
    image: "/hero1.jpg"
  },
  {
    text: "Enabling a platform for all to seize exponential opportunities.",
    image: "/hero2.jpg"
  },
  {
    text: "Facilitating them to become Dynamic Leaders.",
    image: "/hero3.jpg"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContents.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-100/30"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-indigo-100/30"
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  {heroContents[currentIndex].text}
                </h1>
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Content */}
          <div className="relative h-[400px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={heroContents[currentIndex].image}
                  alt="Hero"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-lg" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-8">
          {heroContents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative"
            >
              <span
                className={`block w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-400 to-indigo-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
              <span
                className={`absolute -inset-2 rounded-full transition-all duration-300 
                  ${index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-200/30 to-indigo-300/30 animate-ping' 
                    : 'bg-transparent'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero; 