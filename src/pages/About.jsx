import React from 'react'
import cover_img from '../assets/assets-about/__W_9571-Edit 1.png'
import img2 from '../assets/assets-about/__W_9598-Edit 1.png'
import '../css/about.css'

function About() {
  return (
    <div>
      <img id='cover-img' src={cover_img} alt="" />
      <div>
        <h4>About Us</h4>
        <p>EPS was founded in 2013. We are a general contractor company for commercial and private residentail projects.
          <br />
          We aim to build comfortable homes and residences, to cater to clients' individual needs, and to prioritize 
          quality in all that we do.
          <br />
          Our services include residential construction, renovation, maintenance, and interior jobs.
        </p>
      </div>
      <img src={img2} alt="" />
      <div>
        <h4>Mission</h4>
        <p>

        </p>
      </div>
      <div>
        <h4>Vision</h4>
        <p>
          To become a leading building and design company in Indonesia, delivering exceptional quality and innovative 
          design for residential, commercial, and office spaces.
        </p>
      </div>
    </div>
  )
}

export default About
