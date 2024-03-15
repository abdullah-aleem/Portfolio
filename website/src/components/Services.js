import React from 'react'

import js from '../assests/js.svg'
import mongo from '../assests/mongo.svg'
import node from '../assests/node-js.svg'
import mysql from '../assests/mysql.svg'
import html from '../assests/html-5.svg'
import react from '../assests/react.svg'
import flutter from '../assests/flutter.svg'
import ios from '../assests/ios.svg'
import andriod from '../assests/android1.svg'
import java from '../assests/java.svg'

import python from '../assests/python.svg'
import anaconda from '../assests/anaconda.svg'
import jupyter from '../assests/jupyter.svg'
import bg from '../assests/about10.svg'

export default function Services() {
 
 

  return (
    <>
       <div className="fixed top-0 -right-1/2 -z-10  bg-cover bg-no-repeat bg-center w-screen h-screen"  style={{
        backgroundImage: `url(${bg})`,
       }}>
      </div>
     
    <div className='flex container mx-auto mt-20 w-5/6 md:w-2/4 border-4 border-gray-300 rounded-3xl mb-10 shadow-sm bg-transparent backdrop-blur-sm' >
       
      <div className='flex flex-col border-3  border-gray-200  ml-2 md:ml-10 items-centen Relative pt-5 pb-5 z-10 '>
        <div className='flex flex-col'>
          <h1 className=' ml-1 md:ml-2 text-2xl md:text-5xl text-black'>Abdullah <span className='text-2xl md:text-5xl text-gray-500'>Aleem</span> </h1>


        </div>
        <h1 className='ml-2 md:ml-4 text-xl md:text-4xl mt-4 md:mt-5 text-gray-500'>Services</h1>
        <div className='flex flex-col mt-2   ml-4  relative  pl-3 border-gray-500 border-l-2 border-rounded-xl '>

          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-lg md:text-2xl  text-gray-600'>Web development</h2>
        
      <ul className="grid grid-cols-2 gap-2 w-40 text-sm md:text-lg">
        <li className="flex items-center text-base">
          <span className="mr-2 md ">&#8226;</span> MERN
        </li>
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> Django
        </li>
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> Flask
        </li>
       
        
      </ul>
 
          <div className='flex flex-row [&>img]:w-7 [&>img]:h-7 [&>img]:md:w-10 [&>img]:md:h-10 [&>img]:mr-1'>
            <img alt="hello" src={html} />
            <img alt="hello"  src={js} />
            <img alt="hello" src={react} />
            <img alt="hello" src={node} />
            <img alt="hello" src={mongo} />
            <img alt="hello" src={mysql} />
          </div>
        </div>
        <div className=' flex flex-col ml-4 relative  pl-3 border-gray-500 border-l-2 border-rounded-xl'>
          <div className='mt-6 '>
            <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
            <h2 className='text-lg md:text-2xl text-gray-600 '>Android development</h2>
            <ul className="grid grid-cols-2 gap-2 w-40 text-sm md:text-lg">
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> Flutter
        </li>
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> Java
        </li>
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> Firebase
        </li>
       
        
      </ul>
            <div className='flex flex-row [&>img]:w-7 [&>img]:h-7 [&>img]:md:w-10 [&>img]:md:h-10 [&>img]:mr-1'>
              <img alt="hello"  src={flutter} />
              <img alt="hello"  src={java} />
              <img alt="hello"   src={react} />
              <img alt="hello"  src={andriod} />
              <img alt="hello" src={ios} />
              
            </div>
          </div>
        </div>
        <div className='flex flex-col ml-4 relative  pl-4 border-gray-500 border-l-2 border-rounded-xl'>
          <div className='mt-5'>
            <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
            <h2 className='text-lg md:text-2xl text-gray-600'>Automation/Scripting</h2>

            <ul className="grid grid-cols-2 gap-2 w-40 text-sm md:text-lg">
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> Python
        </li>
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> C++
        </li>
        <li className="flex items-center text-base">
          <span className="mr-2">&#8226;</span> C
        </li>
       
       
      </ul>
            <div className='flex flex-row ml-4 [&>img]:w-7 [&>img]:h-7 [&>img]:md:w-10 [&>img]:md:h-10 [&>img]:mr-1'>
              <img alt="hello"  src={python} />
              <img alt="hello"  src={jupyter} />
              <img alt="hello"  src={anaconda} />
            </div>
          </div>
        </div>
        <h1 className='ml-2 md:ml-4 text-xl md:text-4xl mt-4 md:mt-5 text-gray-500'>Work</h1>
        <div className='flex flex-col mt-2   ml-4  relative  pl-3 border-gray-500 border-l-2 border-rounded-xl '>

          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-small text-gray-600 mt-1'>Nov 2023-Present</h2>
          <p>DataEye</p>
          <p>MERN Full Stack Developer</p>
          
        </div>
        <div className='flex flex-col    ml-4  relative  pl-3 border-gray-500 border-l-2 border-rounded-xl '>
          <div className='mt-5 '>
          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-small text-gray-600 mt-1'>July 2023-Aug 2023</h2>
          <p>Hamson Tech</p>
          <p>Flutter Junior Developer</p>
         
         </div>
         </div>
         <h1 className='ml-2 md:ml-4 text-xl md:text-4xl mt-4 md:mt-5 text-gray-500'>Achievements</h1>
        <div className='flex flex-col mt-2  ml-4  relative  pl-3 border-gray-500 border-l-2 border-rounded-xl '>

          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-small text-gray-600 mt-1'>May 2022</h2>
          <p>First Position</p>
          <p>National Level Software Development Hackathon, FAST</p>
          
        </div>
        <div className='flex flex-col  ml-4  relative  pl-3 border-gray-500 border-l-2 border-rounded-xl '>
          <div className='mt-5 '>
          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-small text-gray-600 mt-1'>June 2019-June 2021</h2>
          <p>President Robotics Society</p>
          <p>Lahore Grammer School</p>
         
         </div>
         </div>
      </div>
    </div>
    </>
  )
}
