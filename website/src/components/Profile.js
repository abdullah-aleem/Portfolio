import React from 'react'
import image from '../assests/full.jpg'
function Profile() {
    return (
        <>
        <div className="flex flex-col md:flex-row">
                <div className="w-400 md:w-300 h-300 rounded-xl overflow-hidden max-w-500 md:mr-4">
                <img
                    src={image} // Example image URL
                    alt="Imag"
                        className=" w-500 object-contain"
                />
            </div>
                <div className="md:mt-20 mt-20 ml-10 ">
                    <h1 className="font-bold text-xl md:text-xl lg:text-5xl font-Times New Roman mb-2 text-gray-700">Hi !!! I am </h1>
                    <h1 className="font-bold text-xl md:text-xl lg:text-5xl font-mono italic mb-2 text-green-900">Abdullah Aleem </h1>
                
                <p className="text-sm md:text-base"></p>
            </div>
        </div>
        </>
        );
}        

export default Profile       