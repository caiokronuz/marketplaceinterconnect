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
                        <li><Link href="/#landing">Início</Link></li>
                        <li><Link href="/#howWorks">Como funciona?</Link></li>
                        <li><Link href="/marketplace">Planos</Link></li>
                        <li><Link href="/#commonQuestions">Perguntas frequentes</Link></li>
                        <li><Link href="/#contact">Contato</Link></li>
                        <li className={styles.sign}><Link href="/send">Assinar</Link></li>
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
                            <li><Link href="/#landing">Início</Link></li>
                            <li><Link href="/#howWorks">Como funciona?</Link></li>
                            <li><Link href="/marketplace">Planos</Link></li>
                            <li><Link href="/#commonQuestions">Perguntas frequentes</Link></li>
                            <li><Link href="/#contact">Contato</Link></li>
                            <li className={styles.sign}><Link href="/send">Assinar</Link></li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}