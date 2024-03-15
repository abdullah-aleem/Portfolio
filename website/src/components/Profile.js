import React from 'react'
import coder from '../assests/coder21.png'

import gitimage from '../assests/github-square-svgrepo-com.svg'
import linimage from '../assests/linkedin21.svg'
import mail from '../assests/gmail-svgrepo-com.svg'
import insta from '../assests/instagram-svgrepo-com.svg'


function Profile() {


    
    return (
        <  >
            <div   className="flex flex-row mt-60 md:margin auto   md:flex-row md:pb-0 md: bg-white ">

                <div className="w-full md:w-2/3  ml-5 md:ml-40 flex flex-row  " >
                  
                    <div className='w-full  flex flex-col md:justify-center  [&>h1]:font-bold' >
                      
                        <h1 className="text-2xl md:text-2xl lg:text-8xl font-Times New Roman mb-2 text-gray-700 mt-10">Hi, I am </h1>
                        <h1 className=" text-2xl md:text-2xl lg:text-8xl font-mono  mb-2 text-gray-500 ">Abdullah Aleem </h1>
                        <p className='[font-size:10px] text-cyan font-bold sm:text-lg '>Professional Web Developer & much more...👋</p>
                        <div className="flex flex-row space-x-3">
                        <a href="https://linkedin.com/in/abdullah-aleem2102" target="_blank" rel="noopener noreferrer">
                        <img  className="mt-6  h-8 w-8 md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3"  src={linimage} alt="" />
                        </a>
                        <a href="https://www.github.com/abdullah-aleem" target="_blank" rel="noopener noreferrer">
                        <img className="mt-6 h-8 w-8  md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3" src={gitimage} alt="" />
                        </a>
                        <a href="mailto:abdullahaleem2102" target="_blank" rel='noreferrer' >
                        <img className="mt-6 h-8 w-8 md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3" src={mail} alt="" />
                        </a>
                        <a href="https://instagram.com/abdullah_abdul_aleem?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img className="mt-6 h-8 w-8 md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3" src={insta} alt="" />
                        </a>
                        </div>
                    </div>
                     
                   
   
                </div>
                <div className='w-3/4 mt-0 flex justify-center bg-blue-00 relative ' >
                    <img src={coder} alt="coder" className='absolute h-36 w-36 md:h-img md:w-img ' style={{top:'3%'}}/> 
                </div>              
                
            </div>
        </>
    );
}


export default Profile       