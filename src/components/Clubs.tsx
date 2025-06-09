import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Club {
  name: string;
  description: string;
  category: string;
  image: string;
  activities: string[];
  coordinator: string;
}

const clubsData: Club[] = [
  {
    name: 'Sports Club',
    description: 'Promoting physical fitness and sportsmanship through various sports activities.',
    category: 'Sports',
    image: '/hero1.png',
    activities: ['Cricket', 'Football', 'Basketball', 'Athletics'],
    coordinator: 'Mr. John Smith'
  },
  {
    name: 'Art & Craft Club',
    description: 'Nurturing creativity and artistic expression through various mediums.',
    category: 'Arts',
    image: '/hero2.png',
    activities: ['Painting', 'Sculpture', 'Photography', 'Crafts'],
    coordinator: 'Ms. Sarah Johnson'
  },
  {
    name: 'Science Club',
    description: 'Exploring scientific concepts through experiments and projects.',
    category: 'Science',
    image: '/hero3.png',
    activities: ['Experiments', 'Research', 'Science Fair', 'Field Trips'],
    coordinator: 'Dr. Robert Williams'
  },
  {
    name: 'Cultural Club',
    description: 'Celebrating diversity and cultural heritage through various events.',
    category: 'Cultural',
    image: '/hero4.jpg',
    activities: ['Dance', 'Music', 'Drama', 'Cultural Festivals'],
    coordinator: 'Mrs. Priya Patel'
  },
  {
    name: 'Eco Club',
    description: 'Promoting environmental awareness and sustainability.',
    category: 'Science',
    image: '/hero5.jpg',
    activities: ['Tree Planting', 'Recycling', 'Environmental Campaigns'],
    coordinator: 'Ms. Emily Green'
  },
  {
    name: 'Literary Club',
    description: 'Fostering love for literature and creative writing.',
    category: 'Arts',
    image: '/story1.jpg',
    activities: ['Creative Writing', 'Book Club', 'Poetry Sessions'],
    coordinator: 'Mr. David Brown'
  },
  {
    name: 'Robotics Club',
    description: 'Building and programming robots for competitions and learning.',
    category: 'Science',
    image: '/story2.jpg',
    activities: ['Robot Building', 'Programming', 'Competitions'],
    coordinator: 'Dr. Michael Chen'
  },
  {
    name: 'Dance Club',
    description: 'Learning various dance forms and performing at events.',
    category: 'Cultural',
    image: '/story3.jpeg',
    activities: ['Classical Dance', 'Contemporary', 'Folk Dance'],
    coordinator: 'Ms. Maria Rodriguez'
  },
  {
    name: 'Athletics Club',
    description: 'Training and competing in various athletic events.',
    category: 'Sports',
    image: '/story6.jpg',
    activities: ['Track Events', 'Field Events', 'Fitness Training'],
    coordinator: 'Mr. James Wilson'
  },
  {
    name: 'Music Club',
    description: 'Learning and performing various forms of music.',
    category: 'Cultural',
    image: '/story7.jpg',
    activities: ['Vocal Music', 'Instrumental', 'Band Practice'],
    coordinator: 'Mr. Thomas Anderson'
  }
];

const categories = ["All", ...Array.from(new Set(clubsData.map(club => club.category)))];

const Clubs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const filteredClubs = selectedCategory === "All"
    ? clubsData
    : clubsData.filter(club => club.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat"
        >
          Student Clubs & Activities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto px-4"
        >
          Explore our vibrant student clubs and extracurricular activities that foster leadership, creativity, and personal growth.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } shadow-md`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Clubs Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedClub(club)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{club.name}</h3>
                <p className="text-gray-600 mb-4">{club.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">{club.category}</span>
                  <button
                    className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedClub(club);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedClub && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClub(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={selectedClub.image}
                  alt={selectedClub.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedClub.name}</h2>
              <p className="text-gray-600 mb-6">{selectedClub.description}</p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Activities</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {selectedClub.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Club Coordinator</h3>
                  <p className="text-gray-900">{selectedClub.coordinator}</p>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedClub(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Clubs; 