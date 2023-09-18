import React,{ useState} from 'react'

import { Emoji } from 'react-emoji';
import simage from '../assests/final.jpg'
import gitimage from '../assests/github2.png'
import linimage from '../assests/IN.png'
import mail from '../assests/mail4.png'
import bgmy from '../assests/perbest.jpg'


function Profile() {


    const [emailContent, setEmailContent] = useState('');
    const handlemail= (e)=>{
        e.preventDefault()

        fetch('http://localhost:3000/sendMail',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({message:emailContent})
        }).then(res=>{
            if(!res.ok){
                throw new Error('Network response was not ok')
            }
            return res.json();
        }).then(data=>{
            console.log(data);
        })
        // const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        // window.location.href = mailtoLink;
    }

 
    return (
        <  >
            <div   className="flex flex-col mt-7 pb-10 overflow-hidden md:flex-row md:pb-0 md:pt-10 bg-white [height:700px]">

                <div className="w-full md:w-2/3  ml-5 md:ml-10 flex flex-row justify-center " >
                  
                    <div className='w-2/4 flex flex-col justify-center  [&>h1]:font-bold' >
                      
                        <h1 className="text-xl md:text-xl lg:text-5xl font-Times New Roman mb-2 text-gray-700 ">Hi, I am </h1>
                        <h1 className=" text-xl md:text-xl lg:text-5xl font-mono  mb-2 text-gray-300 ">Abdullah Aleem </h1>
                        <p className='text-md text-gray-400 font-bold '>Professional Web Developer and AI/ML Specialist 👋</p>
                        
                       
                    </div>
                    
                   

                </div>
                {/* <div className='w-2/4  flex justify-center bg-blue-00 relative ' style={{height:700}}>
                    <img src={bgmy} className='absolute ' style={{top:'3%',height:650}}/> 
                </div>               */}
                {/* <div className=' hidden  flex-col justify-between ml-5 mt-10 mr-5 mb-5 overflow-hidden rounded-xl  md:ml-10 md:mt-20 bg-gray-600 md:w-1100 md:h-1100 '>

                    <div className='mt-5  ml-5 md:ml-8 flex flex-row'>
                        <img className=" h-8 w-8 md:h-12 md:w-12 rounded-full " src={linimage} alt="" />
                        <a href="https://linkedin.com/in/abdullah-aleem2102"  className='mt-1 md:mt-3 ml-5 text-md md:text-lg font-bold  hover:text-blue-600'>linkedin.com/in/abdullah-aleem2102</a>
                    </div>
                    <div className='mt-5 ml-5  md:ml-8 flex flex-row'> 
                        <img className="h-8 w-8  md:h-12 md:w-12 rounded-full " src={gitimage} alt="" />
                        <a href="https://www.github.com/abdullah-aleem" className='md:mt-3 ml-5 text-md md:text-lg font-bold hover:text-white '>github.com/abdullah-aleem</a>
                    </div>
                    <div className='mt-5 ml-5  md:ml-8 flex flex-row'>
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

                </div> */}
            </div>
        </>
    );
}


export default Profile       