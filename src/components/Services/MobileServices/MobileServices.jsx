// ServicesSection.jsx
import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './MobileServices.css';

const ServicesSection = () => {
  // Dados dos serviços
  const services = [
    {
      title: 'Serviço 1',
      description: 'Descrição do Serviço 1',
      icon: 'caminho/para/o/icone1.png',
    },
    {
      title: 'Serviço 2',
      description: 'Descrição do Serviço 2',
      icon: 'caminho/para/o/icone2.png',
    },
    // Adicione mais serviços conforme necessário
  ];

  // Estado para controlar o índice do serviço exibido no slider
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Funções para navegar para o próximo e o anterior serviço no slider
  const goToNextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  return (
    <section className="services-section">
      <h2>Tipos de Serviços</h2>
      <div className="service-slider">
        <BiLeftArrow className="slider-arrow left" onClick={goToPrevService} />
        <div className="service-card">
          <img src={services[currentIndex].icon} alt={services[currentIndex].title} />
          <h3>{services[currentIndex].title}</h3>
          <p>{services[currentIndex].description}</p>
        </div>
        <BiRightArrow className="slider-arrow right" onClick={goToNextService} />
      </div>
    </section>
  );
};

export default ServicesSection;
