import React, { useEffect } from 'react'
import second from '../assets/kid_coding.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import  { MdOutlineKeyboardArrowRight }from 'react-icons/md'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:3500});
  })
  return (
    <div name = "home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white animate-pulse mb-3' data-aos="fade-right">I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-6 max-w-md 'data-aos="fade-down" >With 1.5 Year Of Expierence builing and designing Software, <br/>
                I am Proficient in MERN Stack as well as In Automation Through Python With Certification Of AWS Associate Solution Architecture and Have great 
                Knowledge In Machine Learning , Data Science , MYSQL and Linux
            </p>
            <div className='flex flex-row gap-4 md:hidden'>
            <FaGithub size={30} className='text-white cursor-pointer' onClick={()=>{window.open('https://github.com/Jaggishah')}}/>
              <FaLinkedin   size={30}className='text-white cursor-pointer'onClick={()=>{window.open('https://www.linkedin.com/in/jugdeep-singh/')}}/>
              <HiOutlineMail size={30}className='text-white cursor-pointer'onClick={()=>{window.open('mailto:jugdeepshah@gmail.com')}}/>
              <BsFillPersonLinesFill size={30}className='text-white cursor-pointer' 
              onClick={()=>{window.open('/.resume.pdf')}}/>

            </div>
            
            <div>
                <button  data-aos="fade-left"className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            onClick={()=>{var element = document.getElementsByName("portfolio");
            element[0].scrollIntoView({ behavior: "smooth",block: "start",});
         }}
  >
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                    
                </button>
            </div>
           
          

        </div>
        <div data-aos="flip-left">
            <img src={second} alt="my profile" className='rounded-2xl mx-auto w-2/9 md:w-full animate hover:opacity-100 opacity-75'/>
        </div>
      </div>
    </div>
  )
}

export default Home
