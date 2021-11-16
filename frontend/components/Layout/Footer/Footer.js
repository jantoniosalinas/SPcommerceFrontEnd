//import React from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='content has-text-centered'>
                <p>
                <strong>SPcommerce</strong> by <a href="antonio.salinas@ucamp.utel.edu.mx">José Antonio Salinas Ochoa</a>. 
                <br /> This is a website with educational purposes
                <a href="https://u-camp.utel.edu.mx"> UCAMP</a>
                </p>
                <span className='icon-text'>
                <span className='icon'>
                    <FontAwesomeIcon icon={faHome} />
                </span>
                <a href="/"><span>Home</span></a>

                <span className='icon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <a href="/"><span>LinkedIn</span></a>
                </span>
                
                <span className='icon'>
                    <FontAwesomeIcon icon={faFacebook} />
                </span>
                <a href="/"><span>Facebook</span></a>

                <span className='icon'>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </span>
                <a href="https://www.instagram.com/jasosalinas/"><span>Instagram</span></a>
            </div>
        </footer>
    )
}

export default Footer
