import React from 'react';
import { motion } from 'framer-motion';

const ChairmanMessage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Chairperson.jpg"
                alt="JKKN School Chairperson"
                className="object-cover object-center w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">SMT.N.SENDAMARAAI</h3>
              <p className="text-sm">Chairperson, JKKN Group</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">Chairman's</span> Message
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Welcome to JKKN School, where excellence meets innovation in education. For over two decades, 
                we have been committed to nurturing young minds and shaping future leaders who will make a 
                meaningful impact on society.
              </p>
              
              <p>
                Our educational philosophy goes beyond traditional academic excellence. We believe in 
                fostering creativity, critical thinking, and emotional intelligence. In today's rapidly 
                evolving world, we prepare our students not just for examinations, but for life itself.
              </p>

              <p>
                At JKKN, we have created a unique learning environment that combines state-of-the-art 
                facilities with experienced educators who are passionate about teaching. Our curriculum 
                integrates modern technology with time-tested teaching methodologies, ensuring that our 
                students receive the best of both worlds.
              </p>

              <blockquote className="border-l-4 border-blue-600 pl-4 italic my-6">
                "Education is not just about academic excellence; it's about building character, 
                fostering creativity, and nurturing future leaders who will make a positive difference 
                in the world."
              </blockquote>

              <p>
                We take pride in our diverse and inclusive community, where students from various 
                backgrounds come together to learn, grow, and inspire each other. Our focus on 
                holistic development ensures that every child discovers their unique potential and 
                develops the confidence to pursue their dreams.
              </p>
            </div>

            <div className="pt-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                <span>Learn more about our vision</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChairmanMessage; 