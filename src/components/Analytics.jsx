import React from 'react'
import Laptop from'../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4'  src={Laptop} alt="" />
            <div className='flex flex-col justify-center text-center items-center px-3 md:items-start md:text-left'>
                <p className='text-[#00df9a] font-bold '> DATA ANALYSIS DASHBOARDING</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Data Analyis Centrally</h1>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Commodi in, numquam laboriosam qui facere odit autem! 
                    Praesentium labore est molestiae cum, quis dolores molestias 
                    laudantium, alias corporis perferendis architecto facere. 
                </p>
                <button className='bg-black text-[#00df9a] w-48 rounded-md font-medium my-6 md:mx-0 mx-auto py-3 '>Get Started
                </button>

            </div>
        </div>

    </div>
  )
}

export default Analytics