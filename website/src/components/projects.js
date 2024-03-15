import React from 'react'

import portfolio from '../assests/portfolio.png'

function Projects() {
 

  return (
    <div className=' pb-10 pt-10 md:pt-20 bg-gradient-to-br from-gray-800  to-cyan'>
     
      <div className="container mx-auto  md:mt-20  rounded-3xl pt-10 md:pt-0 pl-10 pr-10 pb-10  mb-10  ">
        <div className='flex flex-col md:flex-row z-10 '>
        <div className=' md:w-1/2 mr-5 p-2 md:p-5 md:h-96  mb-5 md:mb-0 bg-gray-500 rounded-3xl transition-all duration-300 md:hover:scale-110 '>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center mt-2'>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-gray-500 rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96  mb-5 md:mb-0  bg-gray-500 rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-gray-500 rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-gray-500 rounded-3xl mb-5 md:mb-0 transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-gray-500 rounded-3xl  transition-all duration-300 md:hover:scale-110'>
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