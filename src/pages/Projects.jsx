import React from 'react'
import keraton from '../assets/Projects/__W_9601-Edit 2.png'
import townhouse from '../assets/Projects/__W_9601-Edit 4.png'
import verde from '../assets/Projects/__W_9601-Edit 5.png'
import treehouse from '../assets/Projects/__W_9601-Edit 6.png'
import aditiawarman from '../assets/Projects/__W_9601-Edit 7.png'
import ascott from '../assets/Projects/Bedroom 04a 1.png'
import bangka from '../assets/Projects/EST05996 2.png'
import casa_domaine from '../assets/Projects/EST05996 3.png'
import project from '../assets/Projects/EST05996 4.png'
import trainstation from '../assets/Projects/IMG-20180605-WA0063 1.png'
import project2 from '../assets/Projects/IMG-20250131-WA0085 1.png'

import '../css/projects.css'


function Projects() {
  return (
    <div className='projects-container'>
      <a className='project-item' href="">
        <img className='project-img' src={keraton} alt="" />
        <h3 className='project-name'>Keraton Residence</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={project} alt="" />
        <h3 className='project-name'>Project Title</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={treehouse} alt="" />
        <h3 className='project-name'>Treehouse Hotel</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={townhouse} alt="" />
        <h3 className='project-name'>Gaharu Townhouse</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={project2} alt="" />
        <h3 className='project-name'>Project Title</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={bangka} alt="" />
        <h3 className='project-name'>Bangka Residence</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={aditiawarman} alt="" />
        <h3 className='project-name'>Aditiawarman Residence</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={trainstation} alt="" />
        <h3 className='project-name'>TRAINSTATION Studio/Gym</h3>
      </a><a className='project-item'  href="">
        <img className='project-img' src={casa_domaine} alt="" />
        <h3 className='project-name'>Apartment Casa Domaine Karet</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={verde} alt="" />
        <h3 className='project-name'>Apartment Verde</h3>
      </a>
      <a className='project-item'  href="">
        <img className='project-img' src={ascott} alt="" />
        <h3 className='project-name'>Apartment Ascott Thamrin</h3>
      </a>
    </div>
  )
}

export default Projects
