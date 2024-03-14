import React, { useState } from 'react'
import './Navbar.css'
import { BiMenu, BiX } from 'react-icons/bi';
import MobileNav from './MobileNav/MobileNav';



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

     <nav className="nav-wrapper">
        <div className="nav-content">
          <img className='logo' src='./assets/images/logo (3).png' alt='TSI logo' />
          <h1 className="logo-title">TI SOURCING</h1>
          <ul>
            <li>
                <a className='menu-item'>Inicio</a>
            </li>
            <li>
                <a href='#services-section' className='menu-item'>Serviços</a>
            </li>
            <li>
            <a className='menu-item'>Sobre Nós</a>
            </li>
            
            <button className='contact-btn' onClick={() => {}}>
            Fale Conosco
              </button>
          </ul>
        
          <button className="menu-btn" onClick={toggleMenu}>
      {openMenu ? (
        <BiX className='icon-menu' style={{ fontSize: '1.8rem' }} />
      ) : (
        <BiMenu className='icon-menu' style={{ fontSize: '1.8rem' }} />
      )}
    </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar
