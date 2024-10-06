import React from 'react';
import {wins} from '../constants';
import styles from '../styles';
import { useTranslation } from 'react-i18next';


const Wins = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-0 mb-6`}>
      {wins.map ((wins) => (
        <div key={wins.id} className={`flex-1 flex justify-around items-center flex-row m-3`}>
          <p className='font-poppins font-normal xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient uppercase ml-3'>{t(`${wins.title}`)}</p>
        </div>
      ))}
    </section>
  )
}

export default Wins