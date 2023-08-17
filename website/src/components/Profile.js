import React from 'react'
import image from '../assests/full.jpg'
import simage from '../assests/final.jpg'
import gitimage from '../assests/github2.png'
import linimage from '../assests/IN.png'
import mail from '../assests/mail4.png'
function Profile() {
    return (
        <>
            <div className="flex flex-col md:flex-row">

                <div className="md:mt-20 mt-20 ml-10 flex flex-row ">
                    <div>
                        <h1 className="font-bold text-xl md:text-xl lg:text-5xl font-Times New Roman mb-2 text-gray-700">Hi !!! I am </h1>
                        <h1 className="font-bold text-xl md:text-xl lg:text-5xl font-mono italic mb-2 text-green-900">Abdullah Aleem </h1>

                        <br />I am an enthusiastic and adaptable programmer with a fervent passion for technology.
                        <br />Currently pursuing a degree in Computer Science from the esteemed National University of Sciences and Technology (NUST),
                        <br />my commitment to expanding my programming prowess is resolute. Demonstrating an unwavering dedication to excellence, I
                        <br />exhibit remarkable consistency and a commendable work ethic. My proficiency transcends the confines of web development,
                        <br />as I have undertaken projects in Android and desktop application development. My versatile skill set allows me to swiftly
                        <br />adapt to new programming languages, embracing each challenge as an opportunity for growth. A dynamic learner at heart,
                        <br />I approach every endeavor with an insatiable appetite for knowledge and a thirst for conquering novel challenges. Beyond
                        <br />a mere categorization as a web developer, I embody the spirit of a proactive programmer who is eager to contribute to
                        <br />innovative technological solutions. My journey thus far is a testament to my unwavering commitment, consistent performance,
                        <br />and an unyielding enthusiasm for learning and advancement.

                    </div>
                    <img className="h-24 w-24 rounded-full " src={simage} alt="" />

                </div>
                <div className='w-784 overflow-hidden md:w-786'>
                </div>
                <div className='flex flex-col justify-between  ml-10 mt-20 bg-gray-200 w-1100 h-1100 rounded-xl  '>

                    <div className='mt-5 ml-10 flex flex-row'>
                        <img className="h-12 w-12 rounded-full " src={linimage} alt="" />
                        <a className='mt-3 ml-5 text-lg font-bold  hover:text-blue-600 select-none' onClick={() => { console.log("hello") }}>linkedin.com/in/abdullah-aleem2102</a>
                    </div>
                    <div className='mt-5 ml-10 flex flex-row'>
                        <img className="h-12 w-12 rounded-full " src={gitimage} alt="" />
                        <a className='mt-3 ml-5 text-lg font-bold hover:text-white select-none'>github.com/abdullah-aleem</a>
                    </div>
                    <div className='mt-5 ml-10 flex flex-row'>
                        <img className="h-12 w-12 rounded-full " src={mail} alt="" />
                        <a className='mt-3 ml-5 text-lg font-bold  hover:text-red-600 select-none'>abdullahaleem2102@gmail.com</a>
                    </div>
                    <div className='mt-5 ml-10 flex flex-row'>
                        <input
                            type="text"
                            className="border rounded-l-md px-4 py-2 w-64 focus:outline-none"
                            placeholder="Contact Directly"
                        />
                        <button className="border rounded-r-md px-4 py-2 bg-gray-300 text-gray-600 hover:bg-gray-400 ">
                            Send
                        </button>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Profile       