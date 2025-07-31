import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/eps_white.png'


function Nav() {
  return (
    <>
      <nav className='nav'>
        <Link to='/'><img id='nav-logo' src={logo} alt="" /></Link>
        <ul>
            <li>
                <Link className='link' to='/about'>ABOUT</Link>
            </li>
            <li>
                <Link className='link' to='/projects'>PROJECTS</Link>
            </li>
            <li>
                <Link className='link' to='/contact'>CONTACT</Link>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
