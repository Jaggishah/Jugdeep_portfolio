import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import deploy from '../assets/portfolio/deploy.png';
import flask from '../assets/portfolio/flask-python.jpg'
import movie from '../assets/portfolio/movie_recomendation_system.jpg'
import reactjs from '../assets/portfolio/reactjs.jpg'
import api from '../assets/portfolio/api_mango.jpg'
import vehicle from '../assets/portfolio/prediction_v.jpg'
import notes from '../assets/portfolio/react_notes_app.jpg'

const Portfolio = () => {
   
    useEffect(()=>{
        Aos.init({duration:1500});
      })
    const portfolios = [
        {
            id:1,
            src: reactjs,
            link: "https://github.com/Jaggishah/React_Crud_Form_json_server"
        },
        {
            id:2,
            src: movie,
            link: "https://github.com/Jaggishah/Movie-Recommender-System"
        },
        {
            id:3,
            src: api,
            link: "https://github.com/Jaggishah/Express_mongoose"

        },
        {
            id:4,
            src: vehicle,
            link:'https://github.com/Jaggishah/Vehicle_predictive_analysis'
        },
        {
            id:5,
            src: notes,
            link:"https://github.com/Jaggishah/React_notes_app"
        },
        {
            id:6,
            src: deploy,
            link:"https://github.com/Jaggishah/Docker-Deploy-ML-Model"
        },
        {
            id:7,
            src: flask,
            link:'https://github.com/Jaggishah/Flask-career_website'
        },
    ]

    
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-scrren-lg p-4 mx-auto flex flex-col justify-center w-full h-full'  >
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check Out of My work right here</p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-4 gap-9 px-12 sm:px-12' data-aos="fade-right">
        {
            portfolios.map(({id,src,link})=>(                
         
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                <button className='w-full px-6 py-3 m-3 duration-200 hover:scale-105' onClick={()=>{window.open(link)}}> GitHub Code</button>
              
            </div>
            </div>
          
            )
            )
        }
          </div>
      </div>
    </div>
  )
}

export default Portfolio
