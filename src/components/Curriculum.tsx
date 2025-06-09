import React from 'react';
import { motion } from 'framer-motion';

interface Program {
  level: string;
  grades: string;
  description: string;
  features: string[];
  subjects: string[];
}

const programs: Program[] = [
  {
    level: "Primary Education",
    grades: "Grades 1-5",
    description: "Foundation years focusing on core skills and creative development",
    features: [
      "Activity-based learning",
      "Regular field trips",
      "Digital learning integration",
      "Personalized attention",
      "Continuous assessment"
    ],
    subjects: [
      "English",
      "Mathematics",
      "Environmental Science",
      "Regional Language",
      "Arts & Crafts",
      "Physical Education"
    ]
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    description: "Building critical thinking and analytical skills",
    features: [
      "Project-based learning",
      "STEAM education",
      "Leadership development",
      "Sports activities",
      "Cultural programs"
    ],
    subjects: [
      "English Literature & Language",
      "Advanced Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Studies",
      "Computer Science",
      "Foreign Language"
    ]
  },
  {
    level: "Secondary Education",
    grades: "Grades 9-10",
    description: "Preparing students for board examinations and future specializations",
    features: [
      "Board exam preparation",
      "Career counseling",
      "Advanced labs",
      "Expert faculty",
      "Regular assessments"
    ],
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Science",
      "Information Technology",
      "Physical Education"
    ]
  },
  {
    level: "Higher Secondary",
    grades: "Grades 11-12",
    description: "Specialized streams preparing students for higher education",
    features: [
      "Stream specialization",
      "College preparation",
      "Practical training",
      "Industry exposure",
      "Entrance exam coaching"
    ],
    subjects: [
      "Physics",
      "Chemistry",
      "Biology/Mathematics",
      "Computer Science",
      "English",
      "Physical Education"
    ]
  }
];

const Curriculum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white p-8"
          >
            <h1 className="text-5xl font-playfair font-bold mb-4">Our Curriculum</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Empowering minds through comprehensive education and innovative learning methodologies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Excellence in Education at Every Level
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our curriculum is designed to nurture intellectual curiosity, foster creativity, 
            and develop critical thinking skills. We follow a comprehensive approach that 
            combines traditional learning methods with modern educational technologies.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.level}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.level}</h3>
                <p className="text-blue-600 font-semibold mb-4">{program.grades}</p>
                <p className="text-gray-600 mb-6">{program.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subjects */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Enhanced Learning Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Smart Classrooms</h4>
              <p className="text-gray-600">Interactive digital learning environment with modern teaching aids</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Experienced Faculty</h4>
              <p className="text-gray-600">Highly qualified teachers with years of teaching expertise</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Research Focus</h4>
              <p className="text-gray-600">Emphasis on practical learning and scientific research</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Curriculum; 