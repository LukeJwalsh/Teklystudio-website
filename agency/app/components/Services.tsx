'use client'
import React from 'react'
import { CardHoverEffectDemo } from './snippets/card-hover-effects-snippet'


const Services = () => {
  return (
    <div id="services" className='relative z-20 flex flex-col items-center text-center px-4 pb-20'>
      <h2 className='text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 mt-20'>
        Services
      </h2>
      <p className="max-w-2xl mx-auto pt-4 text-lg md:text-2xl text-gray-700">
        From cloud and DevOps to AI and custom apps, we build solutions that help you grow.
      </p>
      
      <CardHoverEffectDemo/>
    </div>
  )
}

export default Services
