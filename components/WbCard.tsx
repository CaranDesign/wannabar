import React from 'react'

export default function WbCard({children}:{children:React.ReactNode}) {
  return (
     <div className='border border-yellow-600/20 fade-in-up wb-bg-glass rounded-lg'>
        {children}
      </div>
  )
}
