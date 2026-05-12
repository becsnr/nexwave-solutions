import styles from './About.module.css'

import { FaArrowRight } from 'react-icons/fa'

import logo from '../../public/nexwave.png'

function About() {
    return (
        <section className={styles.about}>

            <div className={styles.slogan}>
                <p>Sobre nós</p>

                <h1>Transformamos ideias em <span>experiências digitais vivas.</span></h1>

                <h2>A NexWave Solutions nasceu com o propósito de unir criatividade, tecnologia e estratégia para criar produtos digitais memoráveis. Acreditamos que cada projeto é uma oportunidade de construir algo único e significativo.</h2>

                <button>Conheça nossos serviços <FaArrowRight /></button>
            </div>

            <div className={styles.logo}>
                <img src={logo} alt="NexWave Solutions" />
            </div>
        </section>
    )
}

export default About