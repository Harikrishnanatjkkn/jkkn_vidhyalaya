import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Club {
  id: string;
  name: string;
  category: string;
  description: string;
  activities: string[];
  image: string;
  meetingTime: string;
  coordinator: string;
}

const clubsData: Club[] = [
  {
    id: "science-club",
    name: "Science Explorers Club",
    category: "Academic",
    description: "Fostering scientific curiosity through experiments, research, and innovation",
    activities: [
      "Hands-on experiments",
      "Science fairs",
      "Research projects",
      "Guest lectures",
      "Field trips"
    ],
    image: "/science.jpg",
    meetingTime: "Every Tuesday, 4:00 PM - 5:30 PM",
    coordinator: "Dr. Rajesh Kumar"
  },
  {
    id: "art-club",
    name: "Creative Arts Society",
    category: "Cultural",
    description: "Nurturing artistic talents through various forms of visual and performing arts",
    activities: [
      "Painting workshops",
      "Art exhibitions",
      "Craft sessions",
      "Cultural performances",
      "Art competitions"
    ],
    image: "/art.jpg",
    meetingTime: "Every Wednesday, 4:00 PM - 5:30 PM",
    coordinator: "Ms. Priya Sharma"
  },
  {
    id: "eco-club",
    name: "Green Warriors",
    category: "Environmental",
    description: "Promoting environmental awareness and sustainable practices",
    activities: [
      "Tree planting",
      "Recycling drives",
      "Environmental campaigns",
      "Nature walks",
      "Eco-friendly projects"
    ],
    image: "/eco.jpg",
    meetingTime: "Every Thursday, 4:00 PM - 5:30 PM",
    coordinator: "Mr. Arun Verma"
  },
  {
    id: "tech-club",
    name: "Tech Innovators",
    category: "Technology",
    description: "Exploring the world of technology through coding and robotics",
    activities: [
      "Coding workshops",
      "Robotics projects",
      "Tech competitions",
      "App development",
      "Digital presentations"
    ],
    image: "/tech.jpg",
    meetingTime: "Every Friday, 4:00 PM - 5:30 PM",
    coordinator: "Ms. Sneha Patel"
  },
  {
    id: "sports-club",
    name: "Sports Excellence Club",
    category: "Sports",
    description: "Developing athletic skills and promoting sportsmanship",
    activities: [
      "Sports training",
      "Fitness sessions",
      "Inter-school competitions",
      "Team building activities",
      "Sports events"
    ],
    image: "/sports.jpg",
    meetingTime: "Every Monday & Thursday, 4:00 PM - 5:30 PM",
    coordinator: "Mr. Rahul Singh"
  },
  {
    id: "literary-club",
    name: "Literary Society",
    category: "Academic",
    description: "Fostering love for literature and creative writing",
    activities: [
      "Creative writing workshops",
      "Debate competitions",
      "Book clubs",
      "Poetry sessions",
      "Literary magazines"
    ],
    image: "/literary.jpg",
    meetingTime: "Every Wednesday, 4:00 PM - 5:30 PM",
    coordinator: "Dr. Meera Krishnan"
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
      <div className="relative h-[40vh] bg-cover bg-center" style={{ 
        backgroundImage: 'url("banner.jpg")' 
      }}>
        <div className="absolute inset-0 bg-green-900 bg-opacity-80">
          <div className="h-full flex flex-col items-center justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-center"
            >
              Student Clubs & Activities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-center max-w-2xl px-4"
            >
              Discover and nurture your passions through our diverse range of clubs
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedClub(club)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-3">
                  {club.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
                <p className="text-gray-600 mb-4">{club.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {club.meetingTime}
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedClub(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img
                  src={selectedClub.image}
                  alt={selectedClub.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedClub(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-3">
                  {selectedClub.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedClub.name}</h3>
                <p className="text-gray-600 mb-6">{selectedClub.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Activities</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedClub.activities.map((activity, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{selectedClub.meetingTime}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Coordinator: {selectedClub.coordinator}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Clubs; 