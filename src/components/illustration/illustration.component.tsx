import React from 'react';
import styles from './icons.scss';

const ImportExportIllustrationComponent = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.icon}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C11.4477 24 11 24.4477 11 25V40H8V7H6V41C6 41.5523 6.44772 42 7 42H41V40H39V13C39 12.4477 38.5523 12 38 12H32C31.4477 12 31 12.4477 31 13V40H29V21C29 20.4477 28.5523 20 28 20H22C21.4477 20 21 20.4477 21 21V40H19V25C19 24.4477 18.5523 24 18 24H12Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default ImportExportIllustrationComponent;
