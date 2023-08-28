import React from 'react'
import { future } from '../constants';
import styles from '../styles';
import FutureCard from './FutureCard';
import { useTranslation } from 'react-i18next';

const Future = () => {

  const[t, i18n] = useTranslation("global")

  return (
    <section id="future" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[70%] rounded-full blue__gradient' />

    <div className='w-full flex justify-around items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>{t("future.title")}</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left md:max-w-[470px]`}>{t("future.text")}</p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-around justify-center feedback-container w-full relative z-[1]'>
      {future.map((card) => (
        <FutureCard key={card.id} content={t(`${card.content}`)} name={t(`${card.name}`)} title={t(`${card.title}`)} img={card.img}/>
      ))}

    </div>
  </section>
  )
}

export default Future