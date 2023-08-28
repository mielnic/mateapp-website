import React from 'react';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { mike } from '../assets';


const ErrorContactForm = () => {

    const[t, i18n] = useTranslation("global")

    return (
        <section id='services' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[570px] sm:flex-row flex-col bg-grey-gradient rounded-[20px] box-shadow`}>
            <div className='flex-1 flex flex-col'>
            <h2 className={`${styles.flexCenter}`}>
                <img src={ mike } alt="Mike" className='w-[250px] h-[250px]'/>
            </h2>
            <p className={`${styles.paragraph} ${styles.flexCenter} mt-5`}>{t("contact.error")}</p>
            </div>
        </section>
    )
}

export default ErrorContactForm