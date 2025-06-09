import React from 'react';
import Image from 'next/image';
import styles from './Loading.module.css';
import { useLoading } from '../hooks/useLoading';

interface LoadingProps {
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fullScreen = true }) => {
  return (
    <div className={`${styles.loadingContainer} ${!fullScreen ? styles.inline : ''}`}>
      <div className={styles.loadingWrapper}>
        <Image
          src="/jkkn_logo.png"
          alt="JKKN Logo"
          width={120}
          height={120}
          className={styles.loadingLogo}
          priority
        />
        <div className={styles.loadingRipple}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 