import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white ' > 
        <div className='max-w-3xl -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] '>
                GROWING WITH DATA ANALYTICS
            </p>
            <h1 className='md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold '>
                Grow with data
            </h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl py-4 sm:text-4xl text-xl font-bold'>Fast, flexible financing for </p>
                <Typed className='md:text-5xl sm:text-4xl  text-xl font-bold pl-2 md:pl-4 '
                 strings={['BTB', 'BTC', 'SASS']}
                  typeSpeed={120} 
                  backSpeed={140} 
                  loop
                   />
            </div>
            <p className='md:text-2xl text-xl p-2 font-bold text-gray-500'>Monitor Your data analytics to increase revenue for BTB, BTC, & SASS platform. </p>
            <button className='bg-[#00df9a] w-48 rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero