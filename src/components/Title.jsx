import React from 'react'

const Title = ({title , subTitle ,align ,font}) => {
  return (
    <div className={`flex flex-col py-10 justify-center items-center text-center 
    ${align === 'left' && 'md:items-start md:text-left' }`} >
        <h1 className={`text-4xl md:text-[40px] ${font || 'playfair' } `} >{title}</h1>
        <p className='max-w-173 text-sm  md:text-base text-gray-500/50' >{subTitle}</p>
      
    </div>
  )
}

export default Title
