import styles from './About.module.css'

import { FaArrowRight } from 'react-icons/fa'

import logo from '../../public/nexwave.png'

function About() {
    return (
        <section className={styles.about}>

            <div className={styles.slogan}>
                <p>Sobre nós</p>

                <h1>Transformamos ideias em <span>experiências digitais vivas.</span></h1>

                <h2>Somos uma empresa de tecnologia movida pela curiosidade e pela vontade de transformar ideias em experiências digitais vivas. Desenvolvemos soluções inteligentes que conectam pessoas, automatizam processos e impulsionam negócios, com foco em performance, escalabilidade e criatividade no código.</h2>

                <button>Conheça nossos serviços <FaArrowRight /></button>
            </div>

            <div className={styles.logo}>
                <img src={logo} alt="NexWave Solutions" />
            </div>
        </section>
    )
}

export default About