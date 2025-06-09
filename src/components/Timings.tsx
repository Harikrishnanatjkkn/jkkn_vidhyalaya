import React from 'react';
import { motion } from 'framer-motion';

interface TimeSchedule {
  grade: string;
  schedule: {
    time: string;
    activity: string;
  }[];
}

const scheduleData: TimeSchedule[] = [
  {
    grade: "Primary (Grades 1-5)",
    schedule: [
      { time: "8:00 AM", activity: "School Opens" },
      { time: "8:15 AM - 8:30 AM", activity: "Assembly" },
      { time: "8:30 AM - 10:30 AM", activity: "Morning Classes" },
      { time: "10:30 AM - 10:45 AM", activity: "Short Break" },
      { time: "10:45 AM - 12:45 PM", activity: "Mid-Morning Classes" },
      { time: "12:45 PM - 1:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM - 3:30 PM", activity: "Afternoon Classes" },
      { time: "3:30 PM", activity: "School Ends" }
    ]
  },
  {
    grade: "Middle School (Grades 6-8)",
    schedule: [
      { time: "8:00 AM", activity: "School Opens" },
      { time: "8:15 AM - 8:30 AM", activity: "Assembly" },
      { time: "8:30 AM - 11:00 AM", activity: "Morning Classes" },
      { time: "11:00 AM - 11:15 AM", activity: "Short Break" },
      { time: "11:15 AM - 1:15 PM", activity: "Mid-Morning Classes" },
      { time: "1:15 PM - 2:00 PM", activity: "Lunch Break" },
      { time: "2:00 PM - 3:45 PM", activity: "Afternoon Classes" },
      { time: "3:45 PM", activity: "School Ends" }
    ]
  },
  {
    grade: "Secondary (Grades 9-10)",
    schedule: [
      { time: "8:00 AM", activity: "School Opens" },
      { time: "8:15 AM - 8:30 AM", activity: "Assembly" },
      { time: "8:30 AM - 11:30 AM", activity: "Morning Classes" },
      { time: "11:30 AM - 11:45 AM", activity: "Short Break" },
      { time: "11:45 AM - 1:45 PM", activity: "Mid-Morning Classes" },
      { time: "1:45 PM - 2:30 PM", activity: "Lunch Break" },
      { time: "2:30 PM - 4:00 PM", activity: "Afternoon Classes" },
      { time: "4:00 PM", activity: "School Ends" }
    ]
  }
];

const additionalInfo = [
  {
    title: "Extra Classes",
    description: "Special coaching and remedial classes are conducted from 4:00 PM to 5:00 PM",
    icon: "📚"
  },
  {
    title: "Sports Activities",
    description: "Sports training sessions are scheduled from 4:00 PM to 5:30 PM on designated days",
    icon: "🏃‍♂️"
  },
  {
    title: "Club Activities",
    description: "Various club activities are conducted on Saturdays from 9:00 AM to 12:00 PM",
    icon: "🎨"
  },
  {
    title: "Library Hours",
    description: "The library is open from 8:00 AM to 5:00 PM on all working days",
    icon: "📖"
  }
];

const Timings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ 
        backgroundImage: 'url("banner.jpg")' 
      }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80">
          <div className="h-full flex flex-col items-center justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-center px-4"
            >
              School Timings
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-center max-w-2xl px-4"
            >
              Structured schedules designed for optimal learning and development
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Schedule Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {scheduleData.map((data, index) => (
            <motion.div
              key={data.grade}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h3 className="text-xl font-bold text-white">{data.grade}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {data.schedule.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-4 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-32 text-sm font-medium text-purple-600">
                        {item.time}
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-gray-900">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-purple-50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Additional Activities & Timings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Important Notice</h3>
              <p className="mt-2 text-yellow-700">
                Students are expected to arrive at least 15 minutes before their scheduled start time. 
                The school gates will be closed 5 minutes after the scheduled start time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timings; 