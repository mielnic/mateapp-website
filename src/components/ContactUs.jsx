import React from 'react'
import styles from '../styles'
import { useTranslation } from 'react-i18next';
import { envelope } from '../assets'

const GetStarted = () => {

  const [t, i18n] = useTranslation("global")

  return(
  <a href="/contact">
    <div className={`${styles.flexCenter} w-[110px] h-[110px] rounded-full bg-green-gradient p-[2px] cursor-pointer`}>
      
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <p><img src={envelope} alt="arrow" className='w-[60px] h-[60px] object-contain' /></p>
      </div>
      
    </div>
    </a>
  )}

export default GetStarted