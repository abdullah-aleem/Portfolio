import React, { useState } from 'react'
import Modal from './model'
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

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState('')
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleClick = (val) => {
    const a = [{ title: "Web Dev", tech: "Reactjs, Nodejs, MySQL, Firebase, Mongo, Expressjs, Django", tex: "I've been a web developer for nearly four years, and during this time, I've gained experience in various aspects of web development. My focus has been on both front-end and back-end development. I've primarily worked with React.js for the front-end and Node.js with Express for the back-end. However, I'm also skilled in using Django and Flask ." },
    { title: "Desktop Dev", tech: "Python, Java, Tkinter, Java Spring", tex: "I have experience in Java for desktop application development, having created various applications for clients, ranging from single-user tools to commercial software. Additionally, I've worked on Point of Sale (POS) systems. I've also utilized Python to develop single-user applications." },
    { title: "CV/ML based", tech: "Python, TensorFlow, Keras, sklearn, Pandas, Numpy, C++", tex: "In recent years, I've ventured into the exciting realm of Machine Learning and Image Processing applications, a field that particularly captivates me as a computer scientist. Within this domain, my work has spanned from image preprocessing tasks to crafting neural network models for predictive purposes." },
    { title: "Mobile Dev", tech: "React Native, Flutter, Java, Firebase, Mongo", tex: "I have a track record of working as an app developer for multiple clients, along with full-time employment as a Flutter developer. In addition, I achieved a notable accomplishment by winning a Hackathon in Java Android development hosted at a respected university.I possess a strong command of Java, React Native, and Flutter, with React Native being my primary area of expertise. I've gained practical experience and proficiency in these technologies through my work." },
    { title: "Automation App", tech: "Python, OS, C++, Bash", tex: "I've developed various automation applications, ranging from a desktop Screen Time Scheduler to a Windows bash file. Lately, I've been actively focused on creating more automation applications." }];

    setValues(a[val - 1]);
    console.log(values);
    openModal()
  }
  return (
    <div className='flex container mx-auto mt-20 w-3/4 md:w-2/4 border-2 border-gray-300 rounded-3xl mb-10' >
      <div className='flex flex-col border-3  border-gray-200  ml-2 md:ml-10 items-centen Relative pt-5 pb-5 '>
        <div className='flex flex-col'>
          <h1 className=' ml-1 md:ml-2 text-2xl md:text-6xl text-black'>Abdullah <span className='text-2xl md:text-6xl text-gray-500'>Aleem</span> </h1>


        </div>
        <h1 className='ml-2 md:ml-4 text-xl md:text-5xl mt-4 md:mt-10 text-gray-400'>Services</h1>
        <div className='flex flex-col mt-2  flex ml-4  relative  pl-2 border-gray-500 border-l-2 border-rounded-xl '>

          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-lg md:text-4xl  text-gray-600'>Web development</h2>
        
      <ul className="grid grid-cols-2 gap-2 w-40 text-sm md:text-lg">
        <li className="flex items-center">
          <span className="mr-2 md">&#8226;</span> MERN
        </li>
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> Django
        </li>
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> Flask
        </li>
       
        
      </ul>
 
          <div className='flex flex-row [&>img]:w-7 [&>img]:h-7 [&>img]:md:w-10 [&>img]:md:h-10 [&>img]:mr-1'>
            <img src={html} />
            <img src={js} />
            <img src={react} />
            <img src={node} />
            <img src={mongo} />
            <img src={mysql} />
          </div>
        </div>
        <div className=' flex flex-col ml-4 relative  pl-2 border-gray-500 border-l-2 border-rounded-xl'>
          <div className='mt-6 '>
            <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
            <h2 className='text-lg md:text-4xl text-gray-600 '>Android development</h2>
            <ul className="grid grid-cols-2 gap-2 w-40 text-sm md:text-lg">
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> Flutter
        </li>
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> Java
        </li>
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> Firebase
        </li>
       
        
      </ul>
            <div className='flex flex-row [&>img]:w-7 [&>img]:h-7 [&>img]:md:w-10 [&>img]:md:h-10 [&>img]:mr-1'>
              <img  src={flutter} />
              <img  src={java} />
              <img  src={react} />
              <img  src={andriod} />
              <img  src={ios} />
              
            </div>
          </div>
        </div>
        <div className='flex flex-col ml-4 relative  pl-2 border-gray-500 border-l-2 border-rounded-xl'>
          <div className='mt-5'>
            <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
            <h2 className='text-lg md:text-4xl text-gray-600'>Automation/Scripting</h2>

            <ul className="grid grid-cols-2 gap-2 w-40 text-sm md:text-lg">
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> Python
        </li>
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> C++
        </li>
        <li className="flex items-center">
          <span className="mr-2">&#8226;</span> C
        </li>
       
       
      </ul>
            <div className='flex flex-row [&>img]:w-7 [&>img]:h-7 [&>img]:md:w-10 [&>img]:md:h-10 [&>img]:mr-1'>
              <img  src={python} />
              <img  src={jupyter} />
              <img  src={anaconda} />
            </div>
          </div>
        </div>
        <h1 className='ml-2 md:ml-4 text-xl md:text-5xl mt-4 md:mt-10 text-gray-400'>Work</h1>
        <div className='flex flex-col mt-2  flex ml-4  relative  pl-2 border-gray-500 border-l-2 border-rounded-xl '>

          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-small text-gray-600 mt-1'>Nov 2023-Present</h2>
          <p>DataEye</p>
          <p>MERN Full Stack Developer</p>
          
        </div>
        <div className='flex flex-col   flex ml-4  relative  pl-2 border-gray-500 border-l-2 border-rounded-xl '>
          <div className='mt-5 '>
          <div className='rounded-xl w-3 h-3 bg-gray-500 absolute -left-1.5 mt-2.5'></div>
          <h2 className='text-small text-gray-600 mt-1'>July 2023-Aug 2023</h2>
          <p>Hamson Tech</p>
          <p>Flutter Junior Developer</p>
         
         </div>
         </div>
         
      </div>
    </div>

  )
}
