import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroContent {
  text: string;
  image: string;
}

const heroContents: HeroContent[] = [
  {
    text: "To be a leading Global Innovative Solutions provider for the ever changing needs of the society.",
    image: "/hero1.png"
  },
  {
    text: "Enabling a platform for all to seize exponential opportunities.",
    image: "/hero2.png"
  },
  {
    text: "Facilitating them to become Dynamic Leaders.",
    image: "/hero3.png"
  },
  {
    text: "Empowering minds, Shaping futures.",
    image: "/hero4.jpg"
  },
  {
    text: "Building tomorrow's leaders today.",
    image: "/hero5.jpg"
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
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-pink-50 via-white to-green-50 overflow-hidden font-poppins">
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
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-100/30"
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
          className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-green-100/30"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/3 w-20 h-20 rounded-lg bg-pink-200/20 rotate-45"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          {/* Text Content */}
          <div className="relative min-h-[200px] md:min-h-[250px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  {heroContents[currentIndex].text}
                </h1>
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-1 bg-gradient-to-r from-pink-300 to-green-300 mt-4"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Content */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-green-200/20 rounded-lg" />
                  <img
                    src={heroContents[currentIndex].image}
                    alt="Hero"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {heroContents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="group relative"
                >
                  <span
                    className={`block w-4 h-4 rounded-full transition-all duration-300 
                      ${index === currentIndex 
                        ? 'bg-gradient-to-r from-pink-400 to-green-400 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                  <span
                    className={`absolute -inset-2 rounded-full transition-all duration-300 
                      ${index === currentIndex 
                        ? 'bg-gradient-to-r from-pink-200/30 to-green-200/30 animate-ping' 
                        : 'bg-transparent'
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 