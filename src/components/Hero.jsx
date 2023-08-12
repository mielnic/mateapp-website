import React from 'react';
import styles from '../styles';
import { discount } from '../assets';
import { useTranslation } from 'react-i18next';
import Mate from './Mate';
import GetStarted from './GetStarted';

const hero = () => {

  const [t, i18n] = useTranslation("global")

  return (

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-black'>20%</span> Discount for {" "}
          <span className='text-black'>1 Month</span> Account
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-light ss:text-[72px] text-[52px] text-dimBlack ss:leading-[100px] leading-[75px]'>
          {t("hero.smb")}<br className='sm:block hidden'/>{" "}
          <span className='text-gradient font-poppins font-semibold'>{t("hero.solutions")}</span>{" "}
          </h1>
          <div className='sm:flex hidden md:mr-4 mr-20'>
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-light ss:text-[68px] text-[52px] text-dimBlack ss:leading-[100px] leading-[75px] w-full'>
        {t("hero.smb_close")}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("hero.pitch_a")} <br /> {t("hero.pitch_b")}
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-12 mr-12 relative`}>
        <Mate className='w-[50%] h-[auto] relative z-[5]' />
        <div className='absolute z-[0] w-[60%] h-[60%] top-20 green__gradient'/>
        <div className='absolute z-[1] w-[100%] h-[70%] rounded-full bottom-30 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-30 bottom-10 blue__gradient'/>
      </div>

    </section>
  )
}

export default hero