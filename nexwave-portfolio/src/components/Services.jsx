import styles from './Services.module.css'

function Services() {
    return (
        <section className={styles.services}>
            <p>Serviços</p>

            <div className={styles.cards}>
                <img src="" alt="" />

                <h2>Desenvolvimento Web</h2>

                <h3>Site, plataformas e sistemas personalizados com tecnologia de ponta.</h3>
            </div>

            <div className={styles.cards}>
                <img src="" alt="" />

                <h2>UI/UX Design</h2>

                <h3>Experiências intuitivas e interfaces que encantam e convertem.</h3>
            </div>

            <div className={styles.cards}>
                <img src="" alt="" />

                <h2>Apps Mobile</h2>

                <h3>Aplicativos nativos e hibridos para iOS e Android com alta perfomance.</h3>
            </div>

            <div className={styles.cards}>
                <img src="" alt="" />

                <h2>Cyber Segurança</h2>

                <h3></h3>
            </div>
        </section>
    )
}

export default Services