import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonialsData } from '../data'
const Testimonials = () => {
  return (
    <div className='pt-20 py-10' >
        <InfiniteMovingCards
        className=''
        items={testimonialsData}
        direction='right'
        speed='slow'
        pauseOnHover= {false}
        >

        </InfiniteMovingCards>
    </div>
  )
}

export default Testimonials