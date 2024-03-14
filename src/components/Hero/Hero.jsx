import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container" id='hero-container'>
        <div className="hero-content">
            <h2>TI SOUCING</h2>
            <p>
            Assessoria especializada 
            em estratégias de tecnologia da informação, 
            incluindo planejamento de infraestrutura, adoção de novas 
            tecnologias, otimização de processos e segurança cibernética.
            </p>
        </div>

        <div className="hero-img">
            <div className="tech-icon">
                <img src="./assets/images/hero-img.png" alt="hero-img" />
            </div>
        </div>
    </section>
  )
}

export default Hero