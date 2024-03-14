import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './Services.css'; 

const ServicesSection = () => {
  const services = [
    {
      title: 'Segurança da Informação',
      description: 'Proteção completa para dados e sistemas, garantindo confidencialidade, integridade e disponibilidade das informações.',
      icon: './assets/images/card01.jpg',
    },
    {
    
      title: 'Consultoria em Ti',
      description: 'Realizamos uma análise dos processos de gestão e governança, buscando falhas e propondo melhorias no setor de ti.',
      icon: './assets/images/card02.jpg',
    },
    {
    
        title: 'Consultoria Especializada em Redes',
        description: 'Fazemos análise dos componenetes no ecossistema da telecomunicação.',
        icon: './assets/images/card03.jpg',
      },
      {
    
        title: 'Análise de Dados',
        description: 'Fazemos uma análise do processo produtivo das organizações, com o intuito de encontrar caminhos para melhorias e mitigar falhas.',
        icon: './assets/images/card04.jpg',
      },
      
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  return (
    <section className="services-section" id='services-section'>
      <h2>Tipos de Serviços</h2>
      <div className="service-slider">
        <BiLeftArrow className="slider-arrow left" onClick={goToPrevService} />
        <div className="service-cards">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${index === currentIndex ? 'active' : ''}`}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <BiRightArrow className="slider-arrow right" onClick={goToNextService} />
      </div>
    </section>
  );
};

export default ServicesSection;
