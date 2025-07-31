import React from 'react'
import cover_img from '../assets/assets-about/__W_9571-Edit 1.png'
import img2 from '../assets/assets-about/__W_9598-Edit 1.png'
import '../css/about.css'

function About() {
  return (
    <div>
      <img id='cover-img' src={cover_img} alt="" />
      <div className='about-section'>
        <h4 className='about-heading'>About Us</h4>
        <p className='about-text'>EPS was founded in 2013 by Indrawati Sumadi and Lily Ang. We are a general contractor company for commercial and private residentail projects.
          <br /><br />
          We aim to build comfortable homes and residences, to cater to clients' individual needs, and to prioritize 
          quality in all that we do.
          <br /><br />
          Our services include residential construction, renovation, maintenance, and interior jobs.
        </p>
      </div>
      <div className='about-img-container'>
        <img id='about-img2' src={img2} alt="" />
      </div>
      <div className='about-section'>
        <h4 className='about-heading'>Mission</h4>
        <p className='about-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odit pariatur commodi consequatur similique minima a fugit ratione iste dolore.
        </p>
      </div>
      <div className='about-section'>
        <h4 className='about-heading'>Vision</h4>
        <p className='about-text'>
          To become a leading building and design company in Indonesia, delivering exceptional quality and innovative 
          design for residential, commercial, and office spaces.
        </p>
      </div>
    </div>
  )
}

export default About
