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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          Latest News & Events
        </motion.h2>

        <div className={styles.grid}>
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.eventCard}
            >
              <div className={styles.dateBox}>
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              <div className={styles.eventContent}>
                <h3>{event.title}</h3>
                <a href={event.link} className={styles.learnMore}>
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
                </a>
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
          <button className={styles.viewAllBtn}>
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Announcement; 