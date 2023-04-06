import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:2500});
  })
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 hover:text-red-400 hover:border-gray-200'   >About</p>
        </div> 
        <p className='text-xl mt-20  hover:text-red-400' data-aos="fade-up-left" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate magnam quaerat iusto, ipsum esse nihil odio cum illo iste. Odit autem ratione aliquam sint alias at praesentium dolor ipsam! Rem error itaque quo vero nihil, sit officia?
        </p>
        <br/>
        <p className='text-xl hover:text-red-400 ' data-aos="fade-up-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nam ex, magnam deserunt, perspiciatis veritatis corrupti quaerat nihil delectus nostrum at quasi corporis laboriosam temporibus? Assumenda ipsam, pariatur asperiores debitis voluptatum necessitatibus provident sunt, accusantium sed temporibus id? Odio repellat qui repellendus. Dolorem placeat provident repudiandae incidunt quasi dolorum?
        </p>
      </div>
    </div>
  )
}

export default About
