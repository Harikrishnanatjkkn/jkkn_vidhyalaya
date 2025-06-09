import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Activity {
  title: string;
  description: string;
  image: string;
  category: string;
}

const activities: Activity[] = [
  {
    title: 'Cultural Festivals',
    description: 'Annual celebrations showcasing diverse cultural performances and traditions',
    image: '/AI-SCHOOL.jpg',
    category: 'Cultural'
  },
  {
    title: 'Sports Events',
    description: 'Inter-house and inter-school competitions promoting sportsmanship',
    image: '/hero1.png',
    category: 'Sports'
  },
  {
    title: 'Science Fair',
    description: 'Annual exhibition of student projects and innovations',
    image: '/hero2.png',
    category: 'Academic'
  },
  {
    title: 'Art Exhibition',
    description: 'Showcase of student artwork and creative expressions',
    image: '/hero3.png',
    category: 'Cultural'
  },
  {
    title: 'Community Service',
    description: 'Social outreach programs and community engagement initiatives',
    image: '/hero4.jpg',
    category: 'Social'
  },
  {
    title: 'Leadership Programs',
    description: 'Student council activities and leadership development workshops',
    image: '/hero5.jpg',
    category: 'Development'
  }
];

const testimonials = [
  {
    text: "The diverse range of activities at JKKN has helped my child develop holistically.",
    author: "Parent of Grade 8 Student",
    role: "Parent"
  },
  {
    text: "I've grown so much as a person through the various opportunities provided here.",
    author: "Priya S.",
    role: "Student Council President"
  },
  {
    text: "The school's focus on both academics and extra-curricular activities is commendable.",
    author: "Dr. Rajesh Kumar",
    role: "Education Expert"
  }
];

const galleryImages = [
  { src: 'hero1.png', alt: 'School Life 1' },
  { src: 'hero2.png', alt: 'School Life 2' },
  { src: 'hero3.png', alt: 'School Life 3' },
  { src: 'hero4.jpg', alt: 'School Life 4' },
  { src: 'hero5.jpg', alt: 'School Life 5' },
  { src: 'story1.jpg', alt: 'School Activities 1' },
  { src: 'story2.jpg', alt: 'School Activities 2' },
  { src: 'story3.jpeg', alt: 'School Activities 3' }
];

const LifeAtJKKN: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(prev => 
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
              className="text-4xl md:text-5xl font-playfair font-bold text-center px-4"
            >
              Life @ JKKN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-center max-w-2xl px-4"
            >
              Experience the vibrant and enriching student life at JKKN School
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Activities Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair text-center">Student Life & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-green-600">
                    {activity.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair text-center">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <svg className="w-8 h-8 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Modal/Lightbox */}
          <AnimatePresence>
            {selectedImage !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  className="relative max-w-7xl w-full h-full flex items-center justify-center"
                  onClick={e => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Previous Button */}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 text-white hover:text-gray-300 z-10"
                  >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Image */}
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="max-h-full max-w-full object-contain"
                  />

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 text-white hover:text-gray-300 z-10"
                  >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                    {selectedImage + 1} / {galleryImages.length}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
};

export default LifeAtJKKN; 