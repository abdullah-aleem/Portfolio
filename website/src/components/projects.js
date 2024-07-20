import React from 'react'

import portfolio from '../assests/portfolio.png'
import des from '../assests/des.png'
import airbnb from '../assests/airbnb.png'
import kmean from '../assests/kmean.png'
import otaku from '../assests/otaku.png'
import resolution from '../assests/resolution.png'
function Projects() {
 

  return (
    <div className=' pb-10 pt-10 md:pt-20 bg-gradient-to-br from-white   to-primary'>
     
      <div className="container mx-auto  md:mt-20  rounded-3xl pt-10 md:pt-0 pl-10 pr-10 pb-10  mb-10  ">
        <div className='flex flex-col md:flex-row z-10 '>
        <div className=' md:w-1/2 mr-5 p-2 md:p-5 md:h-96  mb-5 md:mb-0 bg-primary rounded-3xl transition-all duration-300 md:hover:scale-110 '>
        <img alt="hello" src={portfolio} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center mt-2'>
          <p className='text-center text-md text-white'>A <span className='font-bold'>Portfolio </span>website made entirely on React using Tailwind.Additionally includes React-Router,Context-API.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-primary rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={des} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md text-white'>A website made to showcase a new type of Encryption Algorithm introduced, the backend is made in Flask while front-end is all React.</p>
          

        </div>
        </div>     
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96  mb-5 md:mb-0  bg-primary rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={airbnb} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md text-white'>A bnb booking website that is a MERN application with all basic functionalities.</p>
          

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-primary rounded-3xl transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={resolution} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md text-white'>A Python script to increase resolution of low resolution images using CNN.</p>
          

        </div>
        </div>     
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-primary rounded-3xl mb-5 md:mb-0 transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={otaku} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md text-white'>An Anime Recommendation System that uses Both collaborative and content based filtering by using a formula to calculate uniqueness of a person.</p>

        </div>
        </div>     
        <div className=' md:w-1/2 mr-5 p-2 md:p-5  md:h-96   bg-primary rounded-3xl  transition-all duration-300 md:hover:scale-110'>
        <img alt="hello" src={kmean} className='w-full md:h-72 rounded-3xl'/> 
        <div className='flex  flex-col justify-center items-center '>
          <p className='text-center text-md text-white'>Parallelisation of Kmeans Clustering by dividing the E-Method on multiplte cores.</p>
          

        </div>
        </div>     
        </div>
    </div>
    </div>
  )
}

export default Projects