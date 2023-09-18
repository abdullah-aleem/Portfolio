import React, { useState } from 'react'
import Modal from './model'


import exp from '../assests/exp3.png'
import webs from '../assests/internet.png'
import webs2 from '../assests/world-wide-web.png'
import arrow from '../assests/diagonal-arrows.png'
import and from '../assests/android.svg'
import ios from '../assests/app-store-ios.svg'
import mobile from '../assests/mobile-solid.svg'
import moniter from '../assests/computer-solid.svg'
import moniter2 from '../assests/computer-mouse-solid.svg'
import automation from '../assests/automation.png'
import automation2 from '../assests/robot-solid.svg'
import cv from '../assests/camera-solid.svg'
import cv2 from '../assests/cpu.png'

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
    <div className="w-full h-200 bg-gray-500 pb-20 pt-10">
      <div className='flex flex-col sm:flex-row '>
        <div className='flex flex-row'>
          <img src={exp} alt="" className='h-48 w-60  md:h-68 md:w-72 color-white' />
          <p className='mt-8 white-space-normal text-white text-2xl md:text-3xl ml-5 font-bold w-2/4'>years of experience in solving computational problems</p>
        </div>
        <p className='mt-8 white-space-normal text-gray-400 text-2xl ml-5 md:ml-60 '>*I have been working as a software developer, dedicated to devising effective solutions for the challenges confronted by my clients. While these represent a portion of my core responsibilities, my skill set extends well beyond these realms. </p>
      </div>
      <div className='hidden sm:flex flex-col md:flex-row justify-between'>
        <div class="mt-5 mb-5 ml-5 group h-72 w-60 [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0 bg-gray-200 rounded-xl shadow-xl shadow-black/40">
              {/* <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" /> */}
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img alt="" src={webs} className='w-12 h-12 ' />
                  <img alt="" src={webs2} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>Web Development</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img alt="" src={arrow} className='w-8 h-8 ml-2 mt-2' />
                </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 pt-8 text-center  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class=" ">

                <p class="text-sm">With a solid four years of hands-on experience in MERN and vanilla JavaScript. Take this very website as a testament to my prowess in frontend development. Beyond that, my backend proficiency in NODE and DJANGO is something to reckon with.</p>
                <a href="https://www.github.com/abdullah-aleem" class="mt-8 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Github</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-5 group h-72 w-60 [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0 bg-gray-200 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img alt="" src={moniter} className='w-12 h-12 ' />
                  <img alt="" src={moniter2} className='w-8 h-8 ml-2 mt-2' />
                </div>

                <p className='ml-3 font-bold mt-3'>Desktop Applications</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img alt="" src={arrow} className='w-8 h-8 ml-2 mt-2' />
                </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 pt-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="">

                <p class="text-sm">I've harnessed the power of both JAVA and Python libraries to craft a range of impactful desktop applications, showcasing my adeptness in coding. A prime example is the App Scheduler, a creation that stands as a testament to my skillset.</p>
                <a href="https://www.github.com/abdullah-aleem" class="mt-4 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Github</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-5 group h-72 w-60 [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0 bg-gray-200 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img alt="" src={automation} className='w-12 h-12 ' />
                  <img alt="" src={automation2} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>Automation Softwares</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img alt="" src={arrow} className='w-8 h-8 ml-2 mt-2' />
                </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 pt-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="">

                <p class="text-sm">
                  I've dived deep into the world of automation projects and data analytics using Python, delivering impactful solutions that drive efficiency and insights. Among these achievements stands a remarkable feat: the creation of a mini search engine</p>
                <a href="https://www.github.com/abdullah-aleem" class="mt-4 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Github</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-5 group h-72 w-60 [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0 bg-gray-200 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img alt="" src={cv} className='w-12 h-12 ' />
                  <img alt="" src={cv2} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>CV And ML Based Apps </p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img alt="" src={arrow} className='w-8 h-8 ml-2 mt-2' />
                </div>
              </div></div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 pt-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="">

                <p class="text-sm">
                  Lately, I've been immersing myself in the dynamic realms of Computer Vision and Machine Learning, crafting applications that showcase innovation and technological advancement. The pinnacle of this journey is my forthcoming research paper.</p>
                <a href="https://www.github.com/abdullah-aleem" class="mt-4 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Github</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-5 mr-5 group h-72 w-60 [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0 bg-gray-200 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img alt="" src={mobile} className='w-12 h-12 ' />
                  <img alt="" src={and} className='w-12 h-12 ml-5' />
                  <img alt="" src={ios} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>Mobile Development</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img alt="" src={arrow} className='w-8 h-8 ml-2 mt-2' />
                </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 pt-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="">

                <p class="text-sm">
                  I've ventured into the realms of Flutter, JAVA, and React Native, crafting compelling app experiences. My journey led me to a pivotal role as a Flutter developer for a thriving startup. With over four years of experience, my expertise in React Native is formidable.</p>
                <a href="https://www.github.com/abdullah-aleem" class="mt-12 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex md:hidden mt-6'>
        <div className='ml-3 w-full flex flex-col '>
          <div className=' flex flex-row justify-between w-3/3'>
            <button className=' h-24 w-3/4 bg-gray-200 rounded-2xl shadow-xl shadow-black/100 font-bold' onClick={(e) => { e.preventDefault(); handleClick(1) }}>
              <div className='flex flex-row'>
                <img alt="" src={webs} className='ml-2 h-8 w-8' />
                <img alt="" src={webs2} className='ml-2 h-8 w-8' />
              </div>
              Web Development
            </button>
            <button className='ml-1 h-24 w-2/4 bg-gray-200 rounded-2xl shadow-xl shadow-black/100 font-bold' onClick={(e) => { e.preventDefault(); handleClick(2) }} >
              <div className='flex flex-row'>
                <img alt="" src={moniter} className='ml-8 h-8 w-8' />

              </div>
              Desktop
              Apps
            </button>
          </div>

          <div className='mt-2 flex flex-row justify-between w-3/3 '>
            <button className=' h-24 w-1/3 bg-gray-200 rounded-2xl shadow-xl shadow-black/100 font-bold' onClick={(e) => { e.preventDefault(); handleClick(3) }} >
              <div className='flex flex-row '>
                <img alt="" src={cv2} className='ml-6 h-8 w-8' />

              </div>
              CV/ML
            </button>
            <button className='ml-1 h-24 w-2/3 bg-gray-200 rounded-2xl shadow-xl shadow-black/100 font-bold' onClick={(e) => { e.preventDefault(); handleClick(4) }} >
              <div className='flex flex-row '>
                <img alt="" src={ios} className='ml-8 h-8 w-8' />
                <img alt="" src={and} className='ml-1 h-8 w-8' />

              </div>
              Mobile Application
            </button>

          </div>
        </div>
        <button className='ml-1 h-50 w-2/4 mr-3 bg-gray-200 rounded-2xl shadow-xl shadow-black/100 font-bold' onClick={(e) => { e.preventDefault(); handleClick(5) }} >
          <div className='flex flex-row'>
            <img alt="" src={automation} className='ml-4 h-8 w-8 [pointerEvents:none]' />
            <img alt="" src={automation2} className='ml-1 h-8 w-8 [pointerEvents:none]' />
          </div>
          Automation
        </button>

      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={values.title}>
        <p>{values.tex}</p>
        <div className="space-x-2">
          <span className="text-xl font-bold ">Technology: </span>

          <span className="text-lg">{values.tech}</span>
        </div>
      </Modal>
    </div>
  )
}
