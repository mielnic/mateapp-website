import React from 'react'

const SolutionCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[15px] max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 future-card'>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-dimBlack mb-10'>
        {content}
      </p>

      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px]' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-dimBlack'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[20px] text-dimBlack'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default SolutionCard