import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo_white from '../assets/eps_white.png'
import logo_black from '../assets/eps-black.png'



function Nav() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  const navClassName = isProjectsPage ? 'nav-project' : 'nav';
  const linkClass = isProjectsPage ? 'link-project' : 'link';
  const logo = isProjectsPage ? logo_black : logo_white;

  return (
    <>
      <nav className={navClassName}>
        <Link to='/'><img id='nav-logo' src={logo} alt="" /></Link>
        <ul>
          <li>
            <Link className={linkClass} to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link className={linkClass}  to='/projects'>PROJECTS</Link>
          </li>
          <li>
            <Link className={linkClass} to='/contact'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
