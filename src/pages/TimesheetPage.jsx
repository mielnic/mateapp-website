import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles';
import TimesheetDetail from '../components/TimesheetDetail';

const TimesheetPage = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.flexCenter}`}>
        <TimesheetDetail />
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

export default TimesheetPage