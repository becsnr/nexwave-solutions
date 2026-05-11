import styles from './Home.module.css'

import illustration from '../assets/home.png'

function Home() {
    return (
        <section className={styles.home}>

            <div className={styles.imagem}>
                <img src={illustration} />
            </div>

            <div className={styles.slogan}>
                <h1>Tecnologia moldada para <span>grandes ideias</span>.</h1>
                <p>Soluções criadas com inovação, <br /> criatividade e estratégia.</p>

                <button>Fale conosco</button>
            </div>

        </section>
    )
}

export default Home