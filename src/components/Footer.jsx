import React from 'react';
import styles from '../styles';
import Mate from './Mate';
import { footerLinks, socialMedia } from '../constants';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const[t, i18n] = useTranslation("global")

  const currentYear = new Date().getFullYear();

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <div className='flex flex-row items-center'>
            <Mate className='w-[36px] h-[36px]' />
            <p className={'font-poppins font-normal text-[30px] text-gradient ml-2'}>MateApp</p>
          </div>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Lean solutions for the small business.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-dimBlack'>
              {t(`${footerLink.title}`)}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimBlack hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                    <a href="/construction">{t(`${link.name}`)}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimBlack'>
        &copy; {currentYear} Paulo Mielnichuk. All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Footer