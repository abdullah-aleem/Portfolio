import React from 'react'
import coder from '../assests/coder21.png'
import { Emoji } from 'react-emoji';
import simage from '../assests/final.jpg'
import gitimage from '../assests/github-square-svgrepo-com.svg'
import linimage from '../assests/linkedin21.svg'
import mail from '../assests/gmail-svgrepo-com.svg'
import insta from '../assests/instagram-svgrepo-com.svg'
// import bgmy from '../assests/perbest.jpg'


function Profile() {


    // const [emailContent, setEmailContent] = useState('');
    // const handlemail= (e)=>{
    //     e.preventDefault()

    //     fetch('http://localhost:3000/sendMail',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json',
    //         },
    //         body:JSON.stringify({message:emailContent})
    //     }).then(res=>{
    //         if(!res.ok){
    //             throw new Error('Network response was not ok')
    //         }
    //         return res.json();
    //     }).then(data=>{
    //         console.log(data);
    //     })
    //     // const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
    //     // window.location.href = mailtoLink;
    // }

 
    return (
        <  >
            <div   className="flex flex-row pt-40 pb-10 overflow-hidden md:flex-row md:pb-0 md: bg-white [height:400px] md:[height:700px]">

                <div className="w-full md:w-2/3  ml-5 md:ml-40 flex flex-row  " >
                  
                    <div className='w-full  flex flex-col md:justify-center  [&>h1]:font-bold' >
                      
                        <h1 className="text-xl md:text-2xl lg:text-8xl font-Times New Roman mb-2 text-gray-700 ">Hi, I am </h1>
                        <h1 className=" text-xl md:text-2xl lg:text-8xl font-mono  mb-2 text-gray-300 ">Abdullah Aleem </h1>
                        <p className='text-md text-gray-400 font-bold '>Professional Web Developer and DL Engineer 👋</p>
                        <div className="flex flex-row space-x-3">
                        <a href="https://linkedin.com/in/abdullah-aleem2102" target="_blank" rel="noopener noreferrer">
                        <img  className="mt-6  h-8 w-8 md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3"  src={linimage} alt="" />
                        </a>
                        <a href="https://www.github.com/abdullah-aleem" target="_blank" rel="noopener noreferrer">
                        <img className="mt-6 h-4 w-4  md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3" src={gitimage} alt="" />
                        </a>
                        <a href="mailto:abdullahaleem2102" target="_blank" >
                        <img className="mt-6 h-8 w-8 md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3" src={mail} alt="" />
                        </a>
                        <a href="https://instagram.com/abdullah_abdul_aleem?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img className="mt-6 h-8 w-8 md:h-10 md:w-10 rounded-full transition-all duration-300 hover:w-12 hover:h-12 hover:mt-3" src={insta} alt="" />
                        </a>
                        </div>
                    </div>
                     
                   
   
                </div>
                <div className='w-3/4 mt-0 flex justify-center bg-blue-00 relative ' style={{height:700}}>
                    <img src={coder} alt="coder" className='absolute h-36 w-36 md:h-img md:w-img ' style={{top:'3%'}}/> 
                </div>              
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