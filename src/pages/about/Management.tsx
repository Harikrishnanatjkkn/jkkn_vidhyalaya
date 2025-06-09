import { motion } from 'framer-motion';

const Management = () => {
  const leaders = [
    {
      name: "SMT.N.SENDAMARAAI",
      title: "Chairperson - JKKN Educational Institutions",
      image: "/Chairperson.jpg",
      content: `Happy to hold the monumental responsibility as Chairperson of "J.K.K.Nattraja Educational Institutions" has made exceptional progress and has achieved a status of one of the most prestigious school. "Leadership and excellence" is our motto, a fact that is evident from our state of art infrastructure and the quality of each individual.

      The institution provides the necessary infrastructure and a team of qualified and motivated faculty all under one roof for the student community. Besides providing world class education, we also inculcate progressive attitude blended with innovation towards the betterment of society. Excellent symbiosis of academic excellence and industrial relevance is the unique feature of NATTRAJA VIDHYALYA. Our hearty welcome to our lush green campus!`,
      quote: "Leadership and excellence is our motto"
    },
    {
      name: "SHRI.S.OMMSHARRAVANA",
      title: "Director - JKKN Educational Institutions",
      image: "/Director.jpg",
      content: `I heartly congratulate the school for taking ardent and intense interest in molding the smart future students. We are set to take the mission of implementing new education methodologies to enable quality learning. It also encourages independent thinking and helps the students in developing wholesome personality so that they can contribute their best to the society and the country. We work together to make JKKN the best temple of learning, guiding and encouraging them in their own way. JKKN aims to produce top notch professionals with their colorful flag flying in the air of success in this pulsating world of competition.`,
      quote: "Molding the smart future students"
    }
  ];

  return (
    <section className="relative mt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding JKKN towards excellence with vision and dedication
          </p>
        </motion.div>

        {/* Leadership Profiles */}
        <div className="space-y-32">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image Section */}
              <motion.div
                className="w-full lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h2>
                  <p className="text-xl text-blue-600 mb-6">
                    {leader.title}
                  </p>
                  <div className="prose prose-lg text-gray-600">
                    {leader.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 border-l-4 border-blue-600 pl-6 italic"
                  >
                    <p className="text-xl text-gray-700">{leader.quote}</p>
                  </motion.blockquote>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-blue-600" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join Us in Shaping the Future
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the difference of education under visionary leadership
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Management; 