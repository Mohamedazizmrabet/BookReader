import React from 'react';
import styles from './loading.module.css';

function Loading() {
    return (
        <div className={styles.main}>
            <div className={styles.book}>
                <div className={styles.bookPgShadow} />
                <div className={styles.bookPg} />
                <div className={`${styles.bookPg} ${styles.bookPg2}`} />
                <div className={`${styles.bookPg} ${styles.bookPg3}`} />
                <div className={`${styles.bookPg} ${styles.bookPg4}`} />
                <div className={`${styles.bookPg} ${styles.bookPg5}`} />
            </div>
        </div>
    );
}

export default Loading;
