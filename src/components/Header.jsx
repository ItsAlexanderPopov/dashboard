import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mb-10'>
      <p className='text-lg text-gray-400'>
        {category}
      </p>
      <p className='text-3xl text-slate-800 dark:text-white font-extrabold tracking-tight'>
        {title}
      </p>
    </div>
  )
}

export default Header