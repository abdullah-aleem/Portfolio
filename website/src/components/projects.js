import React from 'react'

import portfolio from '../assests/portfolio.png'

function Projects() {
 

  return (
    <div className=' pb-10 pt-10 md:pt-20'>
      <div className="container mx-auto  md:mt-20  rounded-3xl  pl-10 pr-10 pb-10 pt-24 mb-10 ">
        <div className='flex flex-col md:flex-row'>
        <div className=' md:w-1/2 mr-5 p-5 md:p-0 md:h-96 border-2 mb-5 md:mb-0 bg-white rounded-3xl transition-all duration-300 md:hover:scale-110 '>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-5 md:p-0 md:h-96 border-2  bg-white rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
        <div className=' md:w-1/2 mr-5 p-5 md:p-0 md:h-96 border-2 mb-5 md:mb-0  bg-white rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-5 md:p-0 md:h-96 border-2  bg-white rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
        <div className=' md:w-1/2 mr-5 p-5 md:p-0 md:h-96 border-2  bg-white rounded-3xl mb-5 md:mb-0 transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-5 md:p-0 md:h-96 border-2  bg-white rounded-3xl  transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        </div>
    </div>
    </div>
  )
}

export default Projects