import React from 'react';
import styles from '../styles';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { code } from '../assets';

const Services = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <section id='services' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-grey-gradient rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>
        {t("services.title")}
      </h2>
      <p className={`${styles.paragraph} mt-5`}>{t("services.content")}</p>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-10 mt-10`}>
        <Button content={t("services.button")} link='mailto:contacto@mateapp.ar'/>
      </div>
    </div>
    <div className={`${styles.flexCenter} max-w-[200px] md:block hidden ml-10`}>
        <img src={code} alt="code" />
    </div>
  </section>
  )
}

export default Services