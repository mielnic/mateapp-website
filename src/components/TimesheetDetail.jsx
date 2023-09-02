import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles';
import Button from './Button';

const TimesheetDetail = () => {

    const[t, i18n] = useTranslation ("global")

    return (
        <section id='TimesheetDetail' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} ${styles.boxWidth} bg-white rounded-[20px] box-shadow`}>
             <div className='flex-1 flex flex-col'>
                <h2 className={`${styles.heading3} text-gradient`}>
                    {t("tsdetail.1t")}
                </h2>
                <p className={`${styles.paragraph} mt-5`}>{t("tsdetail.3p")}</p>
                <ul className='ml-5'>
                    <li className={`${styles.paragraph} mt-5`}><span className='font-semibold'>{t("tsdetail.4ul1t")}</span>{t("tsdetail.5ul1p")}</li>
                    <li className={`${styles.paragraph} mt-5`}><span className='font-semibold'>{t("tsdetail.6ul2t")}</span>{t("tsdetail.7ul2p")}</li>
                    <li className={`${styles.paragraph} mt-5`}><span className='font-semibold'>{t("tsdetail.8ul3t")}</span>{t("tsdetail.9ul3p")}</li>
                </ul>
                <p className={`${styles.paragraph} mt-5`}>{t("tsdetail.10p")}</p>
                <ul className='ml-5'>
                    <li className={`${styles.paragraph} mt-5`}><span className='font-semibold'>{t("tsdetail.11ul1t")}</span>{t("tsdetail.12ul1p")}</li>
                    <li className={`${styles.paragraph} mt-5`}><span className='font-semibold'>{t("tsdetail.13ul2t")}</span>{t("tsdetail.14ul2p")}</li>
                    <li className={`${styles.paragraph} mt-5`}><span className='font-semibold'>{t("tsdetail.15ul3t")}</span>{t("tsdetail.16ul3p")}</li>
                </ul>
                <div className={`${styles.flexCenter}flex flex-row flex-warp sm:mt-10 mt-6`}>
                    <Button content={t("timesheet.button")} link="/contact"/>
                </div>
             </div>
        </section>
    )
}

export default TimesheetDetail