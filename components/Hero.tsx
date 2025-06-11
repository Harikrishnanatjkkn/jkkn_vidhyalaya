import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
  const { scrollY } = useScroll();

  // Parallax effects for different elements
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const imageY = useTransform(scrollY, [0, 500], [0, 100]);
  const circleScale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContents.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500"
      />

      {/* Animated Background Elements */}
      <motion.div 
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ opacity }}
      >
        {/* Floating circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          style={{ scale: circleScale }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
            x: [0, 20, 0],
          }}
          style={{ scale: circleScale }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 30, 0],
          }}
          style={{ scale: circleScale }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          style={{ scale: circleScale }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative min-h-[100vh]">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content with Parallax */}
            <motion.div 
              className="relative min-h-[200px]"
              style={{ y: textY }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <motion.h1 
                    className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {heroContents[currentIndex].text}
                  </motion.h1>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-1 bg-gradient-to-r from-white/50 to-white/80"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Image Content with Parallax */}
            <motion.div 
              className="relative h-[400px] lg:h-[500px]"
              style={{ y: imageY }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={heroContents[currentIndex].image}
                    alt="Hero"
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <motion.div 
            className="flex justify-center space-x-4 mt-8"
            style={{ opacity }}
          >
            {heroContents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative"
              >
                <motion.span
                  className={`block w-3 h-3 rounded-full transition-all duration-300 
                    ${index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                    }`}
                  whileHover={{ scale: 1.2 }}
                />
                <motion.span
                  className={`absolute -inset-2 rounded-full transition-all duration-300 
                    ${index === currentIndex 
                      ? 'bg-white/30 animate-ping' 
                      : 'bg-transparent'
                    }`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg 
            className="w-6 h-6 mx-auto animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 