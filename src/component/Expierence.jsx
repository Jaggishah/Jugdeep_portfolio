import React, { useEffect } from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import nodejs from '../assets/node.png';
import mangodb from '../assets/mangodb.png';
import git from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import sql from '../assets/sql.png';
import automation from '../assets/automation.png';
import aws from '../assets/aws.png';
import machine from '../assets/machine_learning.png';
import python from '../assets/python.png';



import Aos from 'aos';
import 'aos/dist/aos.css'

const Expierence = () => {
    useEffect(()=>{
        Aos.init({duration:1500});
      })
    const techs =[
        {
            id:1,
            src:html,
            title: 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title: 'Javascript',
            style : 'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title: 'React',
            style : 'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title: 'Tailwind',
            style : 'shadow-sky-400'
        },
        {
            id:6,
            src:nodejs,
            title: 'Node JS',
            style : 'shadow-white'
        },
        {
            id:7,
            src:mangodb,
            title: 'MangoDB',
            style : 'shadow-pink-400'
        },
        {
            id:8,
            src:git,
            title: 'GitHub',
            style : 'shadow-gray-400'
        },
        {
            id:9,
            src:sql,
            title: 'SQL',
            style : 'shadow-orange-400'
        },
        {
            id:10,
            src:automation,
            title: 'Automation Scripting',
            style : 'shadow-white'
        },
        {
            id:11,
            src:aws,
            title: 'AWS Cloud',
            style : 'shadow-pink-400'
        },
        {
            id:12,
            src:machine,
            title: 'Machine Learning',
            style : 'shadow-blue-600'
        },
        {
            id:13,
            src:python,
            title: 'Python (Flask,Scripting,Data-Science)',
            style : 'shadow-white'
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Expierence</p>
            <p className='py-6'> This are the Technologies I'Ve Worked With</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0' data-aos="fade-up-right">
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                        </div>
                ))
            }
            

               
           
        </div>
      </div>
    </div>
  )
}

export default Expierence
