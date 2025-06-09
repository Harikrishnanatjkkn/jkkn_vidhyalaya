'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { IconType } from 'react-icons';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const institutions = [
  'JKKN Dental College and Hospital',
  'JKKN College of Allied Health Science',
  'JKKN College of Pharmacy',
  'Sresakthimayeil Institute of Nursing and Research',
  'JKKN College of Education',
  'JKKN College of Arts and Science (Autonomous)',
  'JKKN College of Engineering and Technology',
  'JKKN Matriculation Higher Secondary School',
  'Nattraja Vidhyalya'
];

interface SocialLink {
  icon: IconType;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube' },
  { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' }
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img 
          src="/jkkn_logo.png" 
          alt="JKKN Logo" 
          className={styles.logo}
        />
      </div>

      <div className={styles.footerContent}>
        <div className={styles.mapSection}>
          <h3>Our Location</h3>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.966140248449!2d77.72824731479055!3d11.432843891868092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f52bac38f1d%3A0x2a4f3c2b2c9c1e8e!2sNattraja%20Vidhyalya%20School!5e0!3m2!1sen!2sin!4v1709704844044!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nattraja Vidhyalya School Location"
              aria-label="Map showing location of Nattraja Vidhyalya School"
            />
          </div>
        </div>

        <div className={styles.institutionsSection}>
          <h3>Our Institutions</h3>
          <ul>
            {institutions.map((institution, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 10, color: '#4a90e2' }}
              >
                {institution}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3>Contact Us</h3>
          <div className={styles.contactInfo}>
            <motion.p whileHover={{ x: 5 }}>
              <span className={styles.icon}>{FaPhone({ size: 18 })}</span>
              <a href="tel:+919965891999">+91 99658 91999</a>
            </motion.p>
            <motion.p whileHover={{ x: 5 }}>
              <span className={styles.icon}>{FaEnvelope({ size: 18 })}</span>
              <a href="mailto:school@jkkn.org">school@jkkn.org</a>
            </motion.p>
            <motion.p whileHover={{ x: 5 }}>
              <span className={styles.icon}>{FaMapMarkerAlt({ size: 18 })}</span>
              Nattraja Vidhyalya,<br />
              Thiruvalluvar Nagar,<br />
              Kumarapalayam, Namakkal District,<br />
              Tamil Nadu – 638183.
            </motion.p>
          </div>

          <div className={styles.socialSection}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon({ size: 20 })}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <div className={styles.copyrightContent}>
          <img 
            src="/jkkn_logo.png" 
            alt="JKKN Logo" 
            className={styles.smallLogo}
          />
          <p>© {new Date().getFullYear()} Nattraja Vidhyalya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 