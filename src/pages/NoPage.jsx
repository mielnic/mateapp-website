import React from 'react'
import Error404 from '../components/Error404'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles';

const NoPage = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.flexCenter}`}>
        <Error404 />
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

export default NoPage