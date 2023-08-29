import React from 'react'
import image from '../assests/final.jpg'
import im2 from '../assests/full.jpg'
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
  return (
    <div className="w-full h-200 bg-gray-900  ">
      <div className='flex flex-col md:flex-row '>

        <img src={exp} className='h-68 w-72 color-white' />
        <p className='mt-16 white-space-normal text-white text-3xl ml-5 font-bold w-2/4'>years of experience in solving computational problems</p>
        <p className='mt-8 white-space-normal text-gray-400 text-2xl md:ml-60 '>*I have been working as a software developer, dedicated to devising effective solutions for the challenges confronted by my clients. While these represent a portion of my core responsibilities, my skill set extends well beyond these realms. </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div class="mt-5 mb-5 ml-5 group h-72 w-60 [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0 bg-gray-700 rounded-xl shadow-xl shadow-black/40">
              {/* <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" /> */}
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img src={webs} className='w-12 h-12 ' />
                  <img src={webs2} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>Web Development</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img src={arrow} className='w-8 h-8 ml-2 mt-2' />
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
            <div class="absolute inset-0 bg-gray-700 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img src={moniter} className='w-12 h-12 ' />
                  <img src={moniter2} className='w-8 h-8 ml-2 mt-2' />
                </div>

                <p className='ml-3 font-bold mt-3'>Desktop Applications</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img src={arrow} className='w-8 h-8 ml-2 mt-2' />
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
            <div class="absolute inset-0 bg-gray-700 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img src={automation} className='w-12 h-12 ' />
                  <img src={automation2} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>Automation Softwares</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img src={arrow} className='w-8 h-8 ml-2 mt-2' />
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
            <div class="absolute inset-0 bg-gray-700 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img src={cv} className='w-12 h-12 ' />
                  <img src={cv2} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>CV And ML Based Apps </p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img src={arrow} className='w-8 h-8 ml-2 mt-2' />
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
            <div class="absolute inset-0 bg-gray-700 rounded-xl shadow-xl shadow-black/40">
              <div className=' mt-32'>
                <div className='ml-5 flex flex-row'>
                  <img src={mobile} className='w-12 h-12 ' />
                  <img src={and} className='w-12 h-12 ml-5' />
                  <img src={ios} className='w-12 h-12 ml-5' />
                </div>

                <p className='ml-3 font-bold mt-3'>Mobile Development</p>
                <div className='flex flex-row '>
                  <p className=' ml-3 mt-3'>Hover to discover more</p>
                  < img src={arrow} className='w-8 h-8 ml-2 mt-2' />
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
    </div>
  )
}
