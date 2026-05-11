import styles from './Logo.module.css'

import logo from '../../public/nexwave.png'

function Logo() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="NexWave Solutions" />
            <div className={styles.title}>
                <h1>NexWave</h1>
                <h2>Solutions</h2>
            </div>
        </div>
    )
}

export default Logo