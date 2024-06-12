import React from 'react'
import './mobilenav.css'

const mobile = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active":''}`}
    onClick={toggleMenu}>

      <div className='mobile-menu-container'>
        <img className='logo' src='./assets/images/Time To Program (4).svg' alt=''/>

          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>

            <li>
              <a className="menu-item">Skills</a>
            </li>

            <li>
              <a className="menu-item">Experience</a>
            </li>

            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className='contact-btn' onClick={()=>{}}>Hire ME</button>
          </ul>
      </div>
    </div>
    </>
  )
}

export default mobile
