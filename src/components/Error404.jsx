import React from 'react'
import styles from '../styles';
import { mike } from '../assets';

const Error404 = () => {
  return (
    <section id='services' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[570px] sm:flex-row flex-col bg-grey-gradient rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.flexCenter}`}>
            <img src={ mike } alt="Mike" className='w-[250px] h-[250px]'/>
        </h2>
        <p className={`${styles.paragraph} ${styles.flexCenter} mt-5`}>Error 404. Page not Found.</p>
        </div>
    </section>
  )
}

export default Error404