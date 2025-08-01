import React from 'react'
import cover_img from '../assets/Contact/Contact.png'
import arrow from '../assets/arrow.png'
import '../css/pages.css'


function Contact() {
  return (
    <div>
      <img id='cover-img' src={cover_img} alt="" />
      <div className='pages-section'>
        <h4 className='pages-heading'>Contact Us</h4>
        <div className='contact-container'>
          <p className='contact-text'>
            Phone Number
            <br />
            adm.epsv@gmail.com
            <br /><br />
            JL. Panglima Polim IV No. 42 <br />
            Melawai, Kebayoran Baru, Jakarta Selatan
          </p>
          <form className='form-container' action="">
            <input className='form-input' type="text" placeholder='Name' />
            <input className='form-input' type="email" placeholder='Email' />
            <textarea className='form-txtArea' placeholder='Message'/>
            <div className='btn-container'>
              <button id='send-btn'>SEND <img id='arrow-img' src={arrow} alt="" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
