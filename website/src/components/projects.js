import React from 'react'

import portfolio from '../assests/portfolio.png'
import des from '../assests/des.png'
import airbnb from '../assests/airbnb.png'
import kmean from '../assests/kmean.png'
import otaku from '../assests/otaku.png'
import resolution from '../assests/resolution.png'
function Projects() {


  return (
    <div className=' pb-10 pt-10 md:pt-20 bg-white grid gril-cols-1 gap-6 place-items-center    '>
      <div className='grid-item bg-gray-100 rounded-3xl w-2/3 h-ful shadow-primary shadow-xl flex bg-gradient-to-r from-custom7 to-custom8'>

        <div className='w-full h-full flex  gap-4  overflow-hidden     rounded-3xl justify-center  '>
          <div className='w-2/4 p-4'>
            <img alt="hello" src={portfolio} className='w-full h-full object-cover  rounded-3xl' />
          </div>

          <div className='flex flex-col justify-center'>
            <h1 className='text-5xl font-bold'>Portfolio</h1>
            <div className='flex gap-4 mt-6 items-center'>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Reactjs</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Tailwind</p>


            </div>
            <div className='flex mt-4  gap-4'>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://somo.com">
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>





              </a>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center justify-center space-x-1' href="https://somo.com">
                <span>Website</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>






              </a>
            </div>
          </div>




        </div>
      </div>
      <div className='grid-item bg-gray-100 rounded-3xl w-2/3 h-ful shadow-primary shadow-xl flex items-center justify-center bg-gradient-to-r from-custom3 to-custom4'>

        <div className='w-full flex items-center  gap-4  overflow-hidden    rounded-3xl '>
          <div className='w-1/3 p-4'>
            <img alt="hello" src={des} className='w-full h-full object-cover rounded-3xl' />
          </div>

          <div>
            <h1 className='text-2xl font-bold'>K-Means Clustering Parallelisation</h1>
            <div className='flex gap-4 mt-6 items-center'>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MPI</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>IPC</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>OS</p>

            </div>
            <div className='flex mt-4 '>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://somo.com">
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>





              </a>

            </div>
          </div>




        </div>
      </div>
      <div className='grid-item bg-gray-100 rounded-3xl w-2/3 h-ful shadow-primary shadow-xl flex items-center justify-center bg-gradient-to-r from-custom5 to-custom6'>

        <div className='w-full flex items-center  gap-4  overflow-hidden    rounded-3xl '>
          <div className='w-1/3 p-4'>
            <img alt="hello" src={otaku} className='w-full h-full object-cover  rounded-3xl' />
          </div>

          <div>
            <h1 className='text-2xl font-bold'>K-Means Clustering Parallelisation</h1>
            <div className='flex gap-4 mt-6 items-center'>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MPI</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>IPC</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>OS</p>

            </div>
            <div className='flex mt-4 '>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://somo.com">
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>





              </a>

            </div>
          </div>




        </div>
      </div>
      <div className='grid-item bg-gray-100 rounded-3xl w-2/3 h-ful shadow-primary shadow-xl flex items-center justify-center bg-gradient-to-r from-custom1 to-custom2'>

        <div className='w-full flex items-center  gap-4  overflow-hidden    rounded-3xl '>
          <div className='w-1/3 p-4'>
            <img alt="hello" src={airbnb} className='w-full h-full object-cover  rounded-3xl' />
          </div>

          <div>
            <h1 className='text-2xl font-bold'>K-Means Clustering Parallelisation</h1>
            <div className='flex gap-4 mt-6 items-center'>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MPI</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>IPC</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>OS</p>

            </div>
            <div className='flex mt-4 '>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://somo.com">
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>





              </a>

            </div>
          </div>


        </div>
      </div>
      <div className='grid-item bg-gray-100 rounded-3xl w-2/3 h-ful shadow-primary shadow-xl flex items-center justify-center bg-gradient-to-r from-custom9 to-custom10'>

        <div className='w-full flex items-center  gap-4  overflow-hidden    rounded-3xl '>
          <div className='w-1/3 p-4'>
            <img alt="hello" src={kmean} className='w-full h-full object-cover  rounded-3xl' />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>K-Means Clustering Parallelisation</h1>
            <div className='flex gap-4 mt-6 items-center'>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MPI</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>IPC</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>OS</p>

            </div>
            <div className='flex mt-4 '>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://somo.com">
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>





              </a>

            </div>
          </div>




        </div>
      </div>
      <div className='grid-item bg-gray-100 rounded-3xl w-2/3 h-ful shadow-primary shadow-xl flex items-center justify-center bg-gradient-to-r from-custom11 to-custom12'>

        <div className='w-full flex items-center  gap-4  overflow-hidden    rounded-3xl '>
          <div className='w-1/3 p-4'>
            <img alt="hello" src={resolution} className='w-full h-full object-cover  rounded-3xl' />
          </div>

          <div>
            <h1 className='text-2xl font-bold'>K-Means Clustering Parallelisation</h1>
            <div className='flex gap-4 mt-6 items-center'>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MPI</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>IPC</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>OS</p>

            </div>
            <div className='flex mt-4 '>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://somo.com">
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>





              </a>

            </div>
          </div>




        </div>
      </div>
      {/* <div className="container mx-auto  md:mt-20  rounded-3xl pt-10 md:pt-0 pl-10 pr-10 pb-10  mb-10  ">
        <div className='flex flex-col md:flex-row z-10 '>
          <div className='w-ful md:w-1/2  overflow-hidden    rounded-3xl transition-all duration-300 md:hover:scale-110 '>
            <img alt="hello" src={portfolio} className='w-full h-full object-cover  rounded-3xl' />
            <div className='flex  flex-col justify-center items-center break-words mt-2 '>
              <div>
            <h1 className='text-2xl font-bold'>K-Means Clustering Parallelisation</h1>
            <div className='flex gap-4 mt-6 items-center'>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MPI</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>IPC</p>
              <p className=' bg-primary bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>OS</p>

            </div>
            <div className='flex mt-4 '>
              <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://somo.com">
              <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>


                


              </a>

            </div>
          </div>


            </div>
          </div>
          <div className=' md:w-1/2  object-cover overflow-hidden md:h-96   bg-gray-300 rounded-3xl transition-all duration-300 md:hover:scale-110'>
            <img alt="hello" src={des} className='w-full object-cover  rounded-3xl' />
            <div className='flex  flex-col justify-center items-center break-words '>
              <p className='text-center text-md text-black break-words' >A website made to showcase a new type of Encryption Algorithm introduced, the backend is made in Flask while front-end is all React.</p>

 
            </div>
          </div>
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
          <div className=' md:w-1/2  object-cover text  md:h-96  mb-5 md:mb-0  bg-gray-300 rounded-3xl transition-all duration-300 md:hover:scale-110'>
            <img alt="hello" src={airbnb} className='w-full object-cover  rounded-3xl' />
            <div className='flex  flex-col justify-center items-center break-words '>
              <p className='text-center text-md text-black break-words'>A bnb booking website that is a MERN application with all basic functionalities.</p>


            </div>
          </div>
          <div className=' md:w-1/2  object-cover text  md:h-96   bg-gray-300 rounded-3xl transition-all duration-300 md:hover:scale-110'>
            <img alt="hello" src={resolution} className='w-full object-cover  rounded-3xl' />
            <div className='flex  flex-col justify-center items-center break-words '>
              <p className='text-center text-md text-black break-words'>A Python script to increase resolution of low resolution images using CNN.</p>


            </div>
          </div>
        </div>
        <div className='flex mt-5 flex-col md:flex-row'>
          <div className=' md:w-1/2  object-cover text  md:h-96   bg-gray-300 rounded-3xl mb-5 md:mb-0 transition-all duration-300 md:hover:scale-110'>
            <img alt="hello" src={otaku} className='w-full object-cover  rounded-3xl' />
            <div className='flex  flex-col justify-center items-center break-words '>
              <p className='text-center text-md text-black break-words'>An Anime Recommendation System that uses Both collaborative and content based filtering by using a formula to calculate uniqueness of a person.</p>

            </div>
          </div>
          <div className=' md:w-1/2  object-cover text  md:h-96   bg-gray-300 rounded-3xl  transition-all duration-300 md:hover:scale-110'>
            <img alt="hello" src={kmean} className='w-full object-cover  rounded-3xl' />
            <div className='flex  flex-col justify-center items-center break-words '>
              <p className='text-center text-md text-black break-words'>Parallelisation of Kmeans Clustering by dividing the E-Method on multiplte cores.</p>


            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Projects