import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './mobilenav/mobilenav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src='./assets/images/Time To Program (4).svg' alt='Logo' />
                    <ul>
                        <li>
                            <a className="menu-item" href="#">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#">Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#">Contact Me</a>
                        </li>
                        
                        <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span 
                            className="material-symbols-outlined" 
                            style={{ fontSize: '1.8rem' }}>
                            {openMenu ? "x" : "-"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
