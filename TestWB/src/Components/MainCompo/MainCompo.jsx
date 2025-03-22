import React from 'react'

export const MainCompo = ({children}) => {
  return (
    <div className='flex  md:space-x-4 p-4  md:px-44  gap-5 handleresize'>
    {children}
    </div>
  )
}
