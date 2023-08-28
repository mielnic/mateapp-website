import React from 'react';
import styles from '../styles';
import { useTranslation } from 'react-i18next';

const ThankYou = () => {
    
    const[t, i18n] = useTranslation("global")

    return (
        <section id='services' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[570px] sm:flex-row flex-col bg-grey-gradient rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading3} ${styles.flexCenter}`}>
            {t("contact.thanks")}
        </h2>
        <p className={`${styles.paragraph} ${styles.flexCenter} mt-5`}>{t("contact.thks_phrase")}</p>
        </div>
    </section>
    )
}

export default ThankYou