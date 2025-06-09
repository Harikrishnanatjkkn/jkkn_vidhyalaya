import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CalendarEvent {
  month: string;
  events: {
    date: string;
    title: string;
    type: 'academic' | 'cultural' | 'sports' | 'holiday';
  }[];
}

const calendarData: CalendarEvent[] = [
  {
    month: "June 2024",
    events: [
      { date: "June 1", title: "Academic Year Begins", type: "academic" },
      { date: "June 5", title: "World Environment Day Celebration", type: "cultural" },
      { date: "June 15", title: "Parent Orientation Program", type: "academic" },
      { date: "June 20", title: "Inter-House Sports Meet", type: "sports" }
    ]
  },
  {
    month: "July 2024",
    events: [
      { date: "July 1-5", title: "First Unit Test", type: "academic" },
      { date: "July 15", title: "Science Exhibition", type: "academic" },
      { date: "July 28", title: "Annual Cultural Fest", type: "cultural" }
    ]
  },
  {
    month: "August 2024",
    events: [
      { date: "August 15", title: "Independence Day Celebration", type: "cultural" },
      { date: "August 20-25", title: "Mid-Term Examinations", type: "academic" },
      { date: "August 29", title: "Sports Day", type: "sports" }
    ]
  },
  {
    month: "September 2024",
    events: [
      { date: "September 5", title: "Teachers' Day Celebration", type: "cultural" },
      { date: "September 15", title: "Literary Week", type: "academic" },
      { date: "September 25", title: "Parent-Teacher Meeting", type: "academic" }
    ]
  }
];

const eventTypeColors = {
  academic: 'bg-blue-100 text-blue-800',
  cultural: 'bg-purple-100 text-purple-800',
  sports: 'bg-green-100 text-green-800',
  holiday: 'bg-red-100 text-red-800'
};

const AcademicCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

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
              Academic Calendar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-center max-w-2xl px-4"
            >
              Important dates and events for the academic year
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Calendar Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Event Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(eventTypeColors).map(([type, color]) => (
              <div key={type} className="flex items-center">
                <span className={`w-3 h-3 rounded-full ${color.split(' ')[0]} mr-2`}></span>
                <span className="capitalize">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {calendarData.map((month, index) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden
                ${selectedMonth === month.month ? 'ring-2 ring-blue-500' : ''}
                hover:shadow-xl transition-all duration-300`}
              onClick={() => setSelectedMonth(month.month)}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h3 className="text-xl font-bold text-white">{month.month}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {month.events.map((event, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-16 text-sm font-medium text-gray-600">
                        {event.date}
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <span className={`inline-block px-2 py-1 mt-1 rounded-full text-xs ${eventTypeColors[event.type]}`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Full Calendar</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicCalendar; 