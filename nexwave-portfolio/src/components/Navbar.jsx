import styles from './Navbar.module.css'

import Logo from "./Logo"

import { useState, useEffect, useRef } from "react";

import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const menuRef = useRef(null);
    const btnRef = useRef(null);

    // NAV FIXO
    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // FECHAR MENU QUANDO FORA
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) {
                setMenuAberto(false);
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <nav className={scrolled ? styles.scrolled : ''}>

            <Logo />

            <div className={styles.menuWrap}>
                <button 
                    ref={btnRef} 
                    className={`${styles.menuSVG} ${menuAberto ? styles.menuAtivo : ''}`} 
                    onClick={() => setMenuAberto(!menuAberto)} 
                >
                    {menuAberto ? <FaTimes /> : <FaBars />}
                </button>

                <div ref={menuRef} className={`${styles.menu} ${menuAberto ? styles.menuAtivo : ''}`}>
                
                    <a href='#home'>Home</a>

                    <a href='#about'>Sobre</a>

                    <a href='#services'>Serviços</a>

                    <a href='#contact'>Contato</a>

                </div>
            </div>

        </nav>
    )
}

export default Navbar