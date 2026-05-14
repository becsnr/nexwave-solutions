import styles from './Services.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import web from '../assets/icons/web-icone.png';
import ui from '../assets/icons/ui-icone.png';
import app from '../assets/icons/app-icone.png';
import cyber from '../assets/icons/cyber-icone.png';

function Services() {
    return (
        <section id='services' className={styles.services}>
            <p>Nossos serviços</p>

            <Swiper 
                className={styles.cards}
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },

                    1024: {
                        slidesPerView: 4
                    }
                }}
            >
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src={web} alt="" />

                        <h1>Desenvolvimento Web</h1>

                        <h2>Site, plataformas e sistemas personalizados com tecnologia de ponta.</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.card}>
                        <img src={ui} alt="" />

                        <h1>UI/UX Design</h1>

                        <h2>Experiências intuitivas e interfaces que encantam e convertem.</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.card}>
                        <img src={app} alt="" />
                    
                        <h1>Apps Mobile</h1>

                        <h2>Aplicativos nativos e hibridos para iOS e Android com alta perfomance.</h2>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className={styles.card}>
                        <img src={cyber} alt="" />
                    
                        <h1>Cyber Segurança</h1>

                        <h2>Proteção para sistemas, dados e infraestruturas contra ameaças e vulnerabilidades.</h2>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </section>
    )
}

export default Services