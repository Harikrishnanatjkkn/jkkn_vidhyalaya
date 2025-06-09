import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  views: string;
  likes: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: 'Campus Life at JKKN',
    description: 'Experience a day in the life of our students at JKKN School',
    image: '/story1.jpg',
    views: '2.5K',
    likes: '856'
  },
  {
    id: 2,
    title: 'Science Exhibition 2024',
    description: 'Innovative projects by our young scientists',
    image: '/story2.jpg',
    views: '1.8K',
    likes: '642'
  },
  {
    id: 3,
    title: 'Sports Champions',
    description: 'Our athletes bringing glory to the school',
    image: '/story3.jpeg',
    views: '3.2K',
    likes: '945'
  },
  {
    id: 4,
    title: 'Cultural Performances',
    description: 'Showcasing talent in music and dance',
    image: '/story4.jpg',
    views: '2.1K',
    likes: '738'
  },
  {
    id: 5,
    title: 'Academic Excellence',
    description: 'Celebrating our top performers',
    image: '/story6.jpg',
    views: '1.9K',
    likes: '567'
  },
  {
    id: 6,
    title: 'Innovation Hub',
    description: 'Where ideas come to life',
    image: '/story7.jpg',
    views: '2.7K',
    likes: '892'
  }
];

const EducationalStories = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (selectedStory) {
      const currentIndex = stories.findIndex(story => story.id === selectedStory.id);
      const newIndex = currentIndex > 0 ? currentIndex - 1 : stories.length - 1;
      setSelectedStory(stories[newIndex]);
    }
  };

  const handleNext = () => {
    if (selectedStory) {
      const currentIndex = stories.findIndex(story => story.id === selectedStory.id);
      const newIndex = currentIndex < stories.length - 1 ? currentIndex + 1 : 0;
      setSelectedStory(stories[newIndex]);
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            JKKN Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch and experience the vibrant life at JKKN School
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              className="relative aspect-[9/16] cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedStory(story)}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

                {/* Title and Stats */}
                <div className="absolute bottom-0 left-0 right-0 p-3 transform transition-transform">
                  <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                    {story.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <span>{story.views} views</span>
                    <span>•</span>
                    <span>{story.likes} likes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full md:w-auto md:h-auto md:max-w-md lg:max-w-lg">
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-10 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full bg-black/50 hover:bg-black/70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full bg-black/50 hover:bg-black/70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Story Content */}
              <div className="h-full w-full md:h-[80vh] relative bg-black">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-full object-contain"
                />

                {/* Story Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {selectedStory.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {selectedStory.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                      <span className="text-gray-300">{selectedStory.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="text-gray-300">{selectedStory.likes}</span>
                    </div>
                    <button className="ml-auto bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EducationalStories; 