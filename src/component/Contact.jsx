import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
   
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Get In Touch With Me:</p>
            </div>
          
        
        <div className='flex justify-center items-center' data-aos="fade-up">
            <form action="https://getform.io/f/8d34404a-337d-45c6-9538-77677ec69eeb" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text" name="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea   placeholder='Enter Your Message' name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500  px-6 py-3 my-11 mx-auto flex items-center rounded-md duration-300 hover:scale-110 '> Let's Connect</button>
            
            </form>
           
        </div>
       
        </div>
        
        
      </div>
   
  )
}

export default Contact
