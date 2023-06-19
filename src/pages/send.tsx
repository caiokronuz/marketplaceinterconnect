import {useState} from 'react';
import { Header } from "@/components/Header/Header";
import { Footer } from '@/components/Footer/Footer';

import styles from '../styles/Send.module.scss';

export default function SendPage() {

    const [billValue, setBillValue] = useState(200);

    return (
        <main className={styles.sendPage}>

            <div className={styles.container}>

                <Header />

                <div className={styles.text}>
                    <h1>REDUZA <strong>ATÉ 15%</strong> NA SUA <strong>CONTA DE ENERGIA</strong>!</h1>
                    <p>Iremos analisar seu consumo e te retornaremos com um proposta. Sem compromisso nenhum!</p>
                </div>

                <form className={styles.forms}>

                    <div className={styles.sliderCounter}>
                        <p>Qual valor médio da sua conta de luz?</p>
                        <div>
                            <span>R$</span>
                            <p>{billValue},00</p>
                        </div>
                        <input type="range" min="200" max="2000" step={50} value={billValue} onChange={e => setBillValue(Number(e.target.value)) }/>
                    </div>
                    
                    <label htmlFor="name">Nome <span>*</span></label>
                    <input type="text" id="name" placeholder="Fulanésio Beltranosil da Silva"/>
                    <label htmlFor="contact">Telefone <span>*</span></label>
                    <input type="text" id="contact" placeholder="(85) 99999-9999"/>

                    <div className={styles.result}>
                        <p>Em um ano sua economia será de:</p>
                        <div>
                            <span>R$</span>
                            <p>{Math.floor((billValue - (billValue * 0.15)) * 12)},00</p>
                        </div>
                        <button type="submit">Quero economizar</button>
                    </div>
                </form>

            </div>

            <Footer />
        </main>
    )
}