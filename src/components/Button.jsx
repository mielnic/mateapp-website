import React from 'react'

const Button = ({ styles, content }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}>
      {content}
    </button>
  )
}

export default Button