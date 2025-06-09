import React from 'react';
import { motion } from 'framer-motion';

interface Facility {
  name: string;
  description: string;
  icon: string;
  details: string[];
}

const facilities: Facility[] = [
  {
    name: 'Classrooms',
    description: 'Modern and spacious classrooms equipped with smart boards',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    details: ['28 Classrooms', '55 Sq.m each', 'Smart boards', 'Modern furniture']
  },
  {
    name: 'Laboratories',
    description: 'Well-equipped science and computer labs',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    details: ['Computer Lab: 79 Sq.m', 'Chemistry Lab: 79 Sq.m', 'Biology Lab: 67 Sq.m', 'Physics Lab: 66 Sq.m']
  },
  {
    name: 'Library',
    description: 'Extensive collection of books and digital resources',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    details: ['166 Sq.m Area', '10000+ Books', 'Digital Catalogs', 'Reading Zones']
  },
  {
    name: 'Sports Facilities',
    description: 'Multiple sports courts and training areas',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
    details: ['Indoor Sports Hall', 'Outdoor Courts', 'Training Equipment', 'Professional Coaches']
  },
  {
    name: 'Technology',
    description: 'Modern IT infrastructure and internet connectivity',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    details: ['High-speed Internet', 'Computer Labs', 'Digital Learning', 'Smart Classrooms']
  },
  {
    name: 'Other Amenities',
    description: 'Additional facilities for student comfort',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    details: ['Cafeteria', 'Medical Room', 'Transport Facility', 'Security System']
  }
];

const Infrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ 
        backgroundImage: 'url("banner.jpg")' 
      }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
          <div className="h-full flex flex-col items-center justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-center px-4"
            >
              School Infrastructure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-center max-w-2xl px-4"
            >
              State-of-the-art facilities for holistic education
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={facility.icon} />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{facility.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Virtual Tour Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Take a Virtual Tour</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/eLZzxd60VRw"
              title="Virtual Tour"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Infrastructure; 