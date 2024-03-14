import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <img className='logo' src='./assets/images/logo (3).png' alt='logo' />
        <ul>
          <li>
            <a className='menu-item'>Inicio</a>
          </li>
          <li>
            <a className='menu-item'>Sobre Nós</a>
          </li>
          <li>
            <a className='menu-item'>Serviços</a>
          </li>
          <button className='contact-btn' onClick={() => {}}>
            Fale Conosco
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
