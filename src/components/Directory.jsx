import React from 'react'
import { dir } from '../assets';
import styles, {layout} from '../styles';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const Directory = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <section id="directory" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t("directory.title_1")}<br className='sm:block hidden'/>{t("directory.title_2")}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("directory.text")}</p>
        <Button styles="mt-10" content={t("directory.button")}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={dir} alt="directory" className='w-[80%]'/>
        <div className='absolute z-[4] top-5 w-[100%] h-[100%] rounded-full mategreen__gradient' />
      </div>
    </section>
  )
}

export default Directory