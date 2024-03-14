import React from 'react';
import './AboutUs.css'; 

const AboutUsSection = () => {
  return (
    <section className="about-us-section" id='about-us-section'>
      <div className="about-us-content">
        <h2>Sobre Nós</h2>
        <div className="line"></div>
        <p>
        A TI Sourcing oferece especialistas em processos terceirizados para as empresas ou instituições com o objetivo de torná-las mais eficientes;​
Através das nossas atividades em Outsourcing, ajudamos as organizações orientando, implantando e implementando as atividades da Tecnologia da Informação para geração de integridade, confiabilidade e autenticidade das informações computacionais nos meios telemáticos.
MISSÃO: Desenvolver atividades terceirizadas em TI garantindo as premissas que regem a Gestão da Segurança da Informação;
VISÃO: Tornarmos uma empresa com referências por indicação no Mercado Local;
VALORES: Integridade, Honestidade e Comprometimento.
        </p>
        <p>
          Nossa missão é utilizar as mais recentes tecnologias e melhores práticas da indústria para ajudar as empresas a alcançar seus objetivos de negócios, superar desafios e prosperar em um ambiente competitivo.
        </p>
      </div>
      <div className="sobre-img">
            <div className="sobre-icon">
                <img src="./assets/images/sobre-img.png" alt="sobre-img" />
            </div>
        </div>
    </section>
  );
};

export default AboutUsSection;
