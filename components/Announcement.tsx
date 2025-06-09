import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
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

const Announcement: React.FC<AnnouncementProps> = ({ events }) => {
  return (
    <div className={styles.announcementContainer}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.title}
      >
        Upcoming Events
      </motion.h2>
      <div className={styles.eventList}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={styles.eventCard}
          >
            <Link href={event.link} className={styles.eventLink}>
              <div className={styles.eventContent}>
                <div className={styles.eventInfo}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <div className={styles.dateContainer}>
                    <CalendarIcon className={styles.icon} />
                    <span className={styles.date}>{event.date}</span>
                  </div>
                </div>
                <ArrowRightIcon className={styles.arrowIcon} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Announcement; 