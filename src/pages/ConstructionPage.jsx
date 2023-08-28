import React from 'react';
import styles from '../styles';
import Navbar from '../components/Navbar';
import Construction from '../components/Construction';
import Footer from '../components/Footer';

const ConstructionPage = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.flexCenter}`}>
          <Construction />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ConstructionPage