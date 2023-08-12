import React from 'react'
import { ts } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';
import { useTranslation } from 'react-i18next';


const Timesheet = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <section id="timesheet" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={ts} alt="timesheet" className='w-[70%] relative z-[5]' />
      <div className='absolute z-[4] top-5 w-[100%] h-[100%] rounded-full mategreen__gradient' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[70%] rounded-full mategreen__gradient' />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>{t("timesheet.title_1")}<br className='sm:block hidden'/>{t("timesheet.title_2")}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("timesheet.text")}</p>
      <div className='flex flex-row flex-warp sm:mt-10 mt-6'>
      <Button content={t("timesheet.button")}/>
      </div>
    </div>
  </section>
  )
}

export default Timesheet