import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <img className='logo' src='./assets/images/logo (3).png' alt='logo' />
        <ul>
          <li>
            <a href='#hero-container' className='menu-item'>Inicio</a>
          </li>
          <li>
            <a href='#divider' className='menu-item'>Serviços</a>
          </li>
          <li>
            <a href='#about-us-section' className='menu-item'>Sobre Nós</a>
          </li>
          <button className='contact-btn'>
  <a href="mailto:contato@tisourcing.com.br" style={{ textDecoration: 'none', color: 'inherit' }}>
    Fale Conosco
  </a>
</button>

        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
