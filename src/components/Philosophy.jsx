import React from 'react'
import styles, { layout } from '../styles';
import { features } from '../constants';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-dimBlack text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins text-dimBlack text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
  
  const Philosophy = () => {

    const [t, i18n] = useTranslation("global")

    return (
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>{t("philosophy.title")}</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}> <i>{t("philosophy.quote")}</i> <br /> <b>{t("philosophy.author")}</b> <br /> <br /> {t("philosophy.text")} </p>
  
          <Button styles='mt-10' content={t("philosophy.button")} />
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} icon={feature.icon} title={t(`${feature.title}`)}  content={t(`${feature.content}`)} index={index}/>
          ))}
        </div>
      </section>
    )
  }
  
  export default Philosophy