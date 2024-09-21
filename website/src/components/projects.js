import React from 'react'

import portfolio from '../assests/portfolio.png'
import des from '../assests/des.png'
import airbnb from '../assests/airbnb.png'
import kmean from '../assests/kmean.png'
import otaku from '../assests/otaku.png'
import resolution from '../assests/resolution.png'
function Projects() {


  return (
    <div className=' pb-10 pt-20 md:pt-20 bg-white grid gril-cols-1 gap-6 place-items-center    '>
      <div className='grid-item bg-gray-100 rounded-3xl m-5 md:m-0  md:w-2/3 md:h-ful shadow-primary shadow-xl flex  bg-gradient-to-r from-custom7 to-custom8'>

        <div className='w-full  flex flex-col md:flex-row  gap-4  overflow-hidden     rounded-3xl justify-between   '>


          <div className='m-4 flex flex-col justify-around md:w-1/2 '>
            <h1 className=' text-2xl md:text-5xl text-white font-bold'>PORTFOLIO WEBSITE</h1>
            <p className='text-white block md:hidden'>
            Portfolio website built with React and styled using Tailwind CSS, featuring a modern and responsive design. 
            </p>
            <p className='text-white hidden md:block'>
              Portfolio website built with React and styled using Tailwind CSS, featuring a modern and responsive design. The site ensures a seamless experience across all devices, from desktops to smartphones, adapting effortlessly to various screen sizes. The sleek and intuitive interface showcases my projects, skills, and accomplishments in web development, providing detailed insights into my expertise. Each section is thoughtfully designed to highlight my capabilities, from coding and development projects to freelance work and hackathon achievements. This portfolio is a testament to my commitment to creating dynamic and user-friendly web applications, demonstrating my proficiency in utilizing the MERN stack and other cutting-edge technologies.

            </p>
            <div>
              <div className='flex gap-1 md:gap-4 mt-2 md:mt-6 items-center flex-wrap'>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Reactjs</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Tailwind</p>


              </div>
              <div className='flex mt-4  gap-4'>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://github.com/abdullah-aleem/Portfolio">
                  <span>Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                  </svg>





                </a>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex  space-x-1' href="https://abdullahaleem21.netlify.app/">
                  <span>Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>






                </a>
              </div>
            </div>
          </div>

          <div className='  md:w-2/4 p-1  md:p-4 md:h-1/2 md:mt-10'>
            <img alt="hello" src={portfolio} className='w-full h-full object-cover  rounded-3xl' />
          </div>


        </div>
      </div>
      <div className='grid-item bg-gray-100 m-5 md:m-0 rounded-3xl md:w-2/3 md:h-ful shadow-primary shadow-xl flex  bg-gradient-to-r from-custom3 to-custom4'>

        <div className='w-full  flex flex-col md:flex-row  gap-4  overflow-hidden     rounded-3xl justify-between   '>


          <div className='mx-4 mt-2 md:m-4 flex flex-col justify-around md:w-1/2 '>
            <h1 className=' text-2xl md:text-5xl text-white font-bold'>ENHANCED-DES</h1>
            <p className='text-white block md:hidden'>
            Enhanced-DES is a cutting-edge project featuring a robust backend built with Flask and a sleek frontend crafted using React and Tailwind CSS.
            </p>
            <p className='text-white hidden md:block'>
            Enhanced-DES is a cutting-edge project featuring a robust backend built with Flask and a sleek frontend crafted using React and Tailwind CSS. This project leverages the power of AES and DES encryption algorithms, combining them to enhance security by generating keys through HMAC functions. The website offers a seamless and interactive demo, allowing users to experience the process of encoding and decoding data with this advanced encryption technique. With a focus on both security and user experience, Enhanced DES showcases a sophisticated blend of cryptographic expertise and modern web development.
            </p>
            <div>
              <div className='flex gap-1 md:gap-4 mt-2 md:mt-6 items-center flex-wrap'>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Reactjs</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Tailwind</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Flask</p>
                


              </div>
              <div className='flex mt-4  gap-4'>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://github.com/abdullah-aleem/EnhancedDES">
                  <span>Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                  </svg>





                </a>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex  space-x-1' href="https://enchanced-des.netlify.app">
                  <span>Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>






                </a>
              </div>
            </div>
          </div>

          <div className=' md:w-2/4 p-1 md:p-4 h-1/2 mt-2 md:mt-10'>
            <img alt="hello" src={des} className='w-full h-full object-cover  rounded-3xl' />
          </div>


        </div>
      </div>
      <div className='grid-item bg-gray-100 m-5 md:m-0 rounded-3xl md:w-2/3 md:h-ful shadow-primary shadow-xl flex  bg-gradient-to-r from-custom5 to-custom6'>

        <div className='w-full  flex flex-col md:flex-row gap-4  overflow-hidden     rounded-3xl justify-between   '>


          <div className='m-4 flex flex-col justify-around md:w-1/2 '>
            <h1 className=' text-2xl md:text-5xl text-white font-bold'>BOOKING APPLICATION</h1>
            <p className='text-white block md:hidden'>
            The Booking Application is a comprehensive project developed using the MERN stack, providing a fully functional platform for booking hotels and guest houses online.
            </p>
            <p className='text-white hidden md:block'>
            The Booking Application is a comprehensive project developed using the MERN stack, providing a fully functional platform for booking hotels and guest houses online. With this application, users can effortlessly browse and book accommodations, ensuring a smooth and convenient booking experience. Additionally, property owners and hoteliers can easily post their properties for booking, expanding their reach to potential customers. The application combines MongoDB, Express, React, and Node.js to deliver a seamless, responsive, and user-friendly interface, showcasing the powerful capabilities of modern web development.

            </p>
            <div>
              <div className='flex md:gap-4 gap-1 mt-2 md:mt-6 items-center flex-wrap'>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MongoDB</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>NodeJs</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>ExpressJs</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>JWT</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Reactjs</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Tailwind</p>


              </div>
              <div className='flex mt-4  gap-4'>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://github.com/abdullah-aleem/AirBNB_Booking">
                  <span>Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                  </svg>





                </a>
                {/* <a className='bg-gray-100 px-2 py-1  rounded-xl flex  space-x-1' href="https://somo.com">
                  <span>Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>






                </a> */}
              </div>
            </div>
          </div>

          <div className='md:w-2/4 p-1 md:p-4 md:h-1/2 md:mt-10'>
            <img alt="hello" src={airbnb} className='w-full h-full object-cover  rounded-3xl' />
          </div>


        </div>
      </div>
      <div className='grid-item bg-gray-100 m-5 md:m-0 rounded-3xl md:w-2/3 md:h-ful shadow-primary shadow-xl flex  bg-gradient-to-r from-custom1 to-custom2'>


        <div className='w-full  flex flex-col md:flex-row  gap-4  overflow-hidden     rounded-3xl justify-between   '>


          <div className='m-4 flex flex-col justify-around md:w-1/2 '>
            <h1 className=' text-2xl md:text-5xl text-white font-bold'>OTAKU-GUIDE</h1>
            <p className='text-white block md:hidden'>
            Otaku Guide is an innovative recommendation website for anime enthusiasts, featuring a robust backend built with Flask and a dynamic frontend crafted using React.  
            </p>
            <p className='text-white hidden md:block'>
            Otaku Guide is an innovative recommendation website for anime enthusiasts, featuring a robust backend built with Flask and a dynamic frontend crafted using React. Utilizing cosine similarity, the platform uniquely identifies user preferences, providing highly personalized anime recommendations. The recommendation engine seamlessly integrates both collaborative and content-based filtering, ensuring that users receive suggestions tailored to their unique tastes. With its sleek interface and advanced recommendation algorithms, Otaku Guide offers an engaging and customized experience for anime fans, showcasing the powerful synergy of Flask and React in modern web development.
            </p>
            <div>
              <div className='flex gap-1 md:gap-4 mt-2 md:mt-6 items-center flex-wrap'>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Flask</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Reactjs</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Tailwind</p>


              </div>
              <div className='flex mt-4  gap-4'>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://github.com/abdullah-aleem/OtakuGuide">
                  <span>Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                  </svg>





                </a>
               
              </div>
            </div>
          </div>

          <div className='md:w-2/4 md:p-4 p-1 md:h-1/2 md:mt-10'>
            <img alt="hello" src={otaku} className='w-full h-full object-cover  rounded-3xl' />
          </div>


        </div>
      </div>
      <div className='grid-item bg-gray-100 m-5 md:m-0 rounded-3xl md:w-2/3 md:h-ful shadow-primary shadow-xl flex  bg-gradient-to-r from-custom9 to-custom10'>


        <div className='w-full  flex flex-col md:flex-row  gap-4  overflow-hidden     rounded-3xl justify-between   '>


          <div className='m-4 flex flex-col justify-around md:w-1/2 '>
            <h1 className=' text-2xl md:text-5xl text-white font-bold'>K-MEANS CLUSTERING PARALLELISATION</h1>
            <p className='text-white block md:hidden'>
            KMeans Clustering Parallelization is a powerful library providing an efficient implementation of the KMeans clustering algorithm with parallel processing using MPI for Python (mpi4py).
            </p>
            <p className='text-white hidden md:block'>
            KMeans Clustering Parallelization is a powerful library providing an efficient implementation of the KMeans clustering algorithm with parallel processing using MPI for Python (mpi4py). This library leverages multiprocessing and HDF5 for data serialization, significantly enhancing the efficiency and scalability of clustering large datasets. Key features include Parallel KMeans Clustering, which distributes computation across multiple processors to accelerate processing time, and HDF5 Serialization, allowing efficient handling of large datasets through binary format read/write operations. Designed for easy integration, this library seamlessly fits into existing Python projects requiring advanced KMeans clustering capabilities.
            </p>
            <div>
              <div className='flex gap-1 md:gap-4 mt-2 md:mt-6 items-center flex-wrap'>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>MPI</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>SubProcess</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>IPC</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Threading</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>HDF5</p>


              </div>
              <div className='flex mt-4  gap-4'>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://github.com/abdullah-aleem/Parallelisation-Of-K-Means-Clustering">
                  <span>Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                  </svg>





                </a>
                {/* <a className='bg-gray-100 px-2 py-1  rounded-xl flex  space-x-1' href="https://somo.com">
                  <span>Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>






                </a> */}
              </div>
            </div>
          </div>

          <div className='md:w-2/4 md:p-4 p-1 md:h-1/2 md:mt-10'>
            <img alt="hello" src={kmean} className='w-full h-full object-cover  rounded-3xl' />
          </div>


        </div>
      </div>
      <div className='grid-item bg-gray-100 m-5 md:m-0 rounded-3xl md:w-2/3 md:h-ful shadow-primary shadow-xl flex  bg-gradient-to-r from-custom11 to-custom12'>

        <div className='w-full  flex flex-col md:flex-row gap-4  overflow-hidden     rounded-3xl justify-between   '>


          <div className='m-4 flex flex-col justify-around md:w-1/2 '>
            <h1 className=' text-2xl md:text-5xl text-white font-bold'>Single-Image-Super-Resolution</h1>
            <p className='text-white block md:hidden'>
            Single Image Super Resolution is a cutting-edge project that provides code for training a convolutional neural network (CNN) to enhance image resolution using TensorFlow and Keras.
            </p>
            <p className='text-white hidden md:block'>
            Single Image Super Resolution is a cutting-edge project that provides code for training a convolutional neural network (CNN) to enhance image resolution using TensorFlow and Keras. Super-resolution involves transforming low-resolution images into high-resolution versions, significantly improving their clarity and detail. This project aims to demonstrate the construction of a CNN model specifically for super-resolution tasks. By utilizing a dataset of paired low-resolution and high-resolution images, the model learns to generate high-resolution outputs from low-resolution inputs. Leveraging the powerful capabilities of TensorFlow and Keras, this project highlights the application of deep learning techniques to effectively enhance image quality and resolution.

            </p>
            <div>
              <div className='flex gap-1 md:gap-4 mt-2 md:mt-6 items-center flex-wrap'>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Python</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>TensorFlow</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>Keras</p>
                <p className=' bg-custom8 bg-opacity-80 rounded-xl py-1 px-2  text-gray-200'>BSDS500 DataSet</p>


              </div>
              <div className='flex mt-4  gap-4'>
                <a className='bg-gray-100 px-2 py-1  rounded-xl flex items-center space-x-1' href="https://github.com/abdullah-aleem/Single-Image-Super-Resolution">
                  <span>Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" vieWEBSITEwBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                  </svg>





                </a>
                {/* <a className='bg-gray-100 px-2 py-1  rounded-xl flex  space-x-1' href="https://somo.com">
                  <span>Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>






                </a> */}
              </div>
            </div>
          </div>

          <div className='md:w-2/4 md:p-4 p-1 md:h-1/2 md:mt-10'>
            <img alt="hello" src={resolution} className='w-full h-full object-cover  rounded-3xl' />
          </div>


        </div>
      </div>
      
    </div>
  )
}

export default Projects