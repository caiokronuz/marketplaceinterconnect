import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai'

import logo from '../../../public/interconnect.png';
import styles from './Header.module.scss';

export function Header() {

    //Estado do dropdown do Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/*Cabeçalho*/}
            <header className={styles.header}>
                <Image src={logo} alt="Logo da empresa Deletrica Interconnect" />
                <GiHamburgerMenu size={25} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <nav className={styles.menu}>
                    <ul>
                        <li className={styles.closeButton}><AiFillCloseCircle size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} /></li>
                        <li><a href="#landing">Início</a></li>
                        <li><a href="#howWorks">Como funciona?</a></li>
                        <li><Link href="/">Planos</Link></li>
                        <li><a href="#commonQuestions">Perguntas frequentes</a></li>
                        <li><a href="#contact">Contato</a></li>
                        <li className={styles.sign}><Link href="/">Assinar</Link></li>
                    </ul>
                </nav>
            </header>
            {/*Fim do cabeçalho*/}

            {/*Menu modal*/}
            {isMenuOpen &&
                <div className={styles.container} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <nav className={styles.menu}>
                        <ul>
                            <li className={styles.closeButton}><AiFillCloseCircle size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} /></li>
                            <li><a href="#landing">Início</a></li>
                            <li><a href="#howWorks">Como funciona?</a></li>
                            <li><Link href="/">Planos</Link></li>
                            <li><a href="#commonQuestions">Perguntas frequentes</a></li>
                            <li><a href="#contact">Contato</a></li>
                            <li className={styles.sign}><Link href="/">Assinar</Link></li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}