import { Header } from "@/components/Header/Header";
import { Footer } from '@/components/Footer/Footer';

import styles from '../styles/Send.module.scss';

export default function sendPage() {
    return (
        <main className={styles.sendPage}>

            <div className={styles.container}>

                <Header />

                <div className={styles.text}>
                    <h1>REDUZA <strong>ATÉ 15%</strong> NA SUA <strong>CONTA DE ENERGIA</strong>!</h1>
                    <p>Iremos analisar seu consumo e te retornaremos com um proposta. Sem compromisso nenhum!</p>
                </div>
                <form className={styles.forms}>
                    <label htmlFor="name">Nome*</label>
                    <input type="text" id="name" placeholder="Fulano da Silva"/>
                    <label htmlFor="contact">Telefone*</label>
                    <input type="text" id="contact" placeholder="(85) 99999-9999)"/>
                    <label htmlFor="bill">Conta de energia*</label>
                    <input type="file" id="bill"/>
                    <button type="submit">Quero economizar</button>
                </form>
            </div>

            <Footer />
        </main>
    )
}