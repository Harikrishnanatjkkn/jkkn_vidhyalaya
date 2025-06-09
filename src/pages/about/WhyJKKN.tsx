import { motion } from 'framer-motion';
import { useState } from 'react';

const WhyJKKN = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const statistics = [
    { number: "50+", label: "Years of Excellence" },
    { number: "10K+", label: "Alumni Worldwide" },
    { number: "100+", label: "Expert Faculty" },
    { number: "95%", label: "Placement Rate" }
  ];

  const features = [
    {
      title: "Academic Excellence",
      description: "State-of-the-art facilities and innovative teaching methodologies",
      icon: "🎓"
    },
    {
      title: "Holistic Development",
      description: "Focus on sports, arts, and character building",
      icon: "🌟"
    },
    {
      title: "Global Exposure",
      description: "International collaborations and exchange programs",
      icon: "🌍"
    },
    {
      title: "Industry Integration",
      description: "Strong industry partnerships and practical training",
      icon: "🤝"
    }
  ];

  const achievements = [
    "NAAC 'A+' Accreditation",
    "ISO 9001:2015 Certified",
    "Best Educational Institution Award 2023",
    "Green Campus Initiative Recognition",
    "Excellence in Sports Education Award"
  ];

  return (
    <section className="relative mt-20">
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/why.png"
          alt="Why Choose JKKN"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Why Choose JKKN?
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                A legacy of excellence, innovation, and holistic development
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Legacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Legacy of Excellence
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 1969 by the visionary Shri J.K.K. Nattraja Ayya, our organization has fostered 
              an environment of inspiration, commitment, innovation, and enterprise. With a strong emphasis 
              on excellence, we have consistently upheld our mission to empower individuals through knowledge.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We firmly believe that information holds immense power, and through education, we lay the 
              foundation for progress in every society and every family. At our institution, we strive to 
              create an environment that promotes growth, learning, and the pursuit of excellence, making us 
              a leading destination for those seeking quality education and a brighter future.
            </p>
          </motion.div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-50 text-blue-800 px-6 py-3 rounded-full font-medium"
                >
                  {achievement}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the JKKN Family
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards a brighter future. Discover the opportunities that await you at JKKN.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJKKN; 