import React,{useState} from 'react'

import simage from '../assests/final.jpg'
import gitimage from '../assests/github2.png'
import linimage from '../assests/IN.png'
import mail from '../assests/mail4.png'

function Profile() {
    const [emailContent, setEmailContent] = useState('');
    const handlemail= (e)=>{
        e.preventDefault()
        const email = 'abdullahaleem2102@gmail.com';
        const subject = 'Email from portfolio';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        window.location.href = mailtoLink;
    }
    return (
        <>
            <div className="flex flex-col overflow-hidden md:flex-row">

                <div className="w-full md:w-2/3 md:mt-20 mt-20 ml-10 flex flex-row ">
                    <div className='w-3/4' >
                        <h1 className="font-bold text-xl md:text-xl lg:text-5xl font-Times New Roman mb-2 text-gray-700">Hi !!! I am </h1>
                        <h1 className="font-bold text-xl md:text-xl lg:text-5xl font-mono italic mb-2 text-green-900">Abdullah Aleem </h1>

                       <p  className='white-space-normal' > I am an enthusiastic and adaptable programmer with a fervent passion for technology.
                        Currently pursuing a degree in Computer Science from the esteemed National University of Sciences and Technology (NUST),
                        my commitment to expanding my programming prowess is resolute. Demonstrating an unwavering dedication to excellence, I
                        exhibit remarkable consistency and a commendable work ethic. My proficiency transcends the confines of web development,
                        as I have undertaken projects in Android and desktop application development. My versatile skill set allows me to swiftly
                        adapt to new programming languages, embracing each challenge as an opportunity for growth. A dynamic learner at heart,
                        I approach every endeavor with an insatiable appetite for knowledge and a thirst for conquering novel challenges. Beyond
                        a mere categorization as a web developer, I embody the spirit of a proactive programmer who is eager to contribute to
                        innovative technological solutions. My journey thus far is a testament to my unwavering commitment, consistent performance,
                        and an unyielding enthusiasm for learning and advancement.
                        </p>
                    </div>
                    <img className="h-16 w-16  md:h-24 md:w-24 rounded-full " src={simage} alt="" />

                </div>
                {/* <div className='w-784 overflow-hidden lg:w-786'>
                </div> */}
                <div className='flex flex-col justify-between ml-5 mt-10 mr-5 mb-5 overflow-hidden rounded-xl  md:ml-10 md:mt-20 bg-gray-200 md:w-1100 md:h-1100 '>

                    <div className='mt-5  ml-5 md:ml-10 flex flex-row'>
                        <img className=" h-8 w-8 md:h-12 md:w-12 rounded-full " src={linimage} alt="" />
                        <a href="https://linkedin.com/in/abdullah-aleem2102"  className='mt-1 md:mt-3 ml-5 text-md md:text-lg font-bold  hover:text-blue-600'>linkedin.com/in/abdullah-aleem2102</a>
                    </div>
                    <div className='mt-5 ml-5  md:ml-10 flex flex-row'> 
                        <img className="h-8 w-8  md:h-12 md:w-12 rounded-full " src={gitimage} alt="" />
                        <a href="https://www.github.com/abdullah-aleem" className='md:mt-3 ml-5 text-md md:text-lg font-bold hover:text-white '>github.com/abdullah-aleem</a>
                    </div>
                    <div className='mt-5 ml-5  md:ml-10 flex flex-row'>
                        <img className="h-8 w-8 md:h-12 md:w-12 rounded-full " src={mail} alt="" />
                        <button className='md:mt-3 ml-5 text-md md:text-lg font-bold  hover:text-red-600 select-none'>abdullahaleem2102@gmail.com</button>
                    </div>
                    <div className='mt-5 ml-5  md:ml-10 flex flex-row mb-5 md:mb-0'>
                        <input
                            value={emailContent}
                            onChange={(e) => setEmailContent(e.target.value)}
                            type="text"
                            className="border rounded-l-md px-4 py-2 w-64 focus:outline-none"
                            placeholder="Contact Directly"
                        />
                        <button className="border rounded-r-md px-4 py-2 bg-gray-300 text-gray-600 hover:bg-gray-400 " onClick={handlemail}>
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