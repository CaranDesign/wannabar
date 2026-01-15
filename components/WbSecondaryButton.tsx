import React from 'react'
import { Button } from './ui/button'

// extends Button shadcn type to my component for inherit all props directly whitout declaring it
interface WbSecondaryButton extends React.ComponentProps<typeof Button>{
   children: React.ReactNode;
}


export default function WbSecondaryButton({ children, ...props }: WbSecondaryButton) {
  return (
     <Button
         //passing all the props to component
        {...props}
        variant={'secondary'}
        className='cursor-pointer'
      >
         {children}
      </Button>
  )
}
