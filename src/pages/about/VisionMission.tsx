import { motion } from 'framer-motion';

const VisionMission = () => {
  const values = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in education and character development",
      icon: "🏆"
    },
    {
      title: "Innovation",
      description: "Fostering creativity and innovative thinking in learning approaches",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Building strong moral and ethical foundations",
      icon: "⭐"
    },
    {
      title: "Leadership",
      description: "Developing tomorrow's leaders through guidance and opportunity",
      icon: "🎯"
    }
  ];

  return (
    <section className="relative mt-20">
      {/* Vision Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Vision & Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shaping the future through education, innovation, and leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/vision.png"
                  alt="JKKN Vision"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/20 flex items-end">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                    <p className="text-xl text-blue-100">
                      To be a leading Global Innovative Solutions provider for the ever changing needs of the society
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/mission.jpg"
                  alt="JKKN Mission"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-green-900/20 flex items-end">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-xl text-green-100">
                      Enabling a platform for all to seize exponential opportunities thereby facilitating them to become Dynamic Leaders
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our journey towards excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-16 md:mt-24 text-center"
          >
            <blockquote className="text-2xl md:text-3xl text-gray-700 italic max-w-4xl mx-auto">
              "Education is not just about academic excellence; it's about creating leaders who will 
              shape tomorrow's world with innovation, integrity, and compassion."
            </blockquote>
            <p className="mt-4 text-gray-600">- JKKN School Philosophy</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission; 