import React from 'react';
import { motion } from 'framer-motion';
import styles from './Announcement.module.css';

interface Event {
  id: string;
  title: string;
  date: string;
  link: string;
}

interface AnnouncementProps {
  events: Event[];
}

const Announcement = ({ events }: AnnouncementProps) => {
  return (
    <section className={styles.announcementSection}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.title}
        >
          Latest News & Events
        </motion.h2>

        <div className={styles.grid}>
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.8,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={styles.eventCard}
            >
              <motion.div 
                className={styles.dateBox}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </motion.div>
              
              <div className={styles.eventContent}>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {event.title}
                </motion.h3>
                <motion.a 
                  href={event.link} 
                  className={styles.learnMore}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={styles.arrow}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.viewAll}
        >
          <motion.button 
            className={styles.viewAllBtn}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Announcement; 