import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <img src="banner.jpg" alt="JKKN Banner" className={styles.bannerImage} />
        <div className={styles.bannerOverlay}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to JKKN
          </motion.h1>
        </div>
      </div>

      {/* Founder Section */}
      <div className={styles.founderSection}>
        <motion.div 
          className={styles.founderImage}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/founder.jpg" alt="Founder" />
          <h2>Founder J.K.K. Rangammal Charitable Trust</h2>
        </motion.div>

        <motion.div 
          className={styles.founderContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.historySection}>
            <p>
              In 1960's, the female children in Kumarapalayam had to walk 2.5 k.m. for their schooling to the nearby town Bhavani. 
              Some parents hesitated to send, some ceased their children schooling. All resulted them to stay either at homes or to 
              work in handlooms and dyeing industries. Realizing the need of women education, a visionary philanthropist of the zone, 
              Shri. J.K.K. Natarajah, initiated a girls school in the town in 1965, four years before the inception of the trust.
            </p>

            <p>
              The trust, J.K.K.Rangammal Charitable Trust was established, (Reg No:33) in 1969 with the motif of providing literacy, 
              women empowerment resulting to upgraded socio-economic status of the people. Walking on the footprints of her father, 
              Shrimathi.N. SENDAMARAAI, Managing trustee, expanded the service by providing multi-disciplinary education to both genders. 
              Now, under the umbrella, there are 10 institutions, inclusive of Dental, Pharmacy, Nursing, Education, Engineering, Arts and 
              Science colleges and Govt. Aided Girls School, Matriculation schools.
            </p>

            <p>
              The trust involves itself in many social service activities inclusive of health oriented services such as free dental camps, 
              free treatments and surgeries, blood donation camps, motivational and entrepreneurship awareness camps. The trust also extends 
              its charitable hands; medical support to the impoverished, helping destitute, natural calamities support, education and 
              scholarship support to poor students and culture support. A pioneering establishment of the zone, since from its inception, 
              its grandeur service to the society not only in terms of educational but also community welfare activities is still immense.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 