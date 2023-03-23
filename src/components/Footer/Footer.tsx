import Image from 'next/image';

import logo from '../../../public/interconnect.png';

import styles from './Footer.module.scss';
export function Footer() {

    return (
        <>
            {/*Rodapé*/}

            <footer className={styles.footer}>
                <div className={styles.top}>
                    <Image src={logo} alt="Logo da empresa Deletrica Interconnect" />
                    <p className={styles.description}>A solução ideal para você economizar dinheiro com energia solar sem obras, sem burocracia e sem investir.</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.social}>
                        <h1 className={styles.title}>CONHEÇA</h1>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                    </div>

                    <div className={styles.social}>
                        <h1 className={styles.title}>SOCIAL</h1>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                    </div>

                    <div className={styles.social}>
                        <h1 className={styles.title}>CONTATO</h1>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                        <a className={styles.link} href="https://google.com" rel="noopener noreferrer">Lorem Ipsum</a>
                    </div>
                </div>
            </footer>
        </>
    )

}