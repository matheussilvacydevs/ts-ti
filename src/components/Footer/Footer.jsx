import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div className="interface">
        <div className="line-footer">
          <div className="flex">
            <div className="btn-social">
              <a href="mailto:contato@tisourcing.com.br">
                <button><FaEnvelope /></button>
              </a>
              <a href="https://wa.me/+559288362227" target="_blank" rel="noopener noreferrer">
                <button><FaWhatsapp /></button>
                </a>

                <a href="https://t.me/+559288362227" target="_blank" rel="noopener noreferrer">
                <button><FontAwesomeIcon icon={faTelegram} /></button>
                </a>

                
            </div>
          </div>
        </div>
        <div className="line-footer borda">
          <p>Copyright © 2024 Cyber devs Team, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
