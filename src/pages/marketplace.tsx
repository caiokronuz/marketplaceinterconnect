import Image from 'next/image';

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import solarPlant from '../../public/st-edwiges.jpg';
import styles from '../styles/MarketPlace.module.scss';

export default function marketPlace(){
    return(
        <main className={styles.marketPlace}>
            <div className={styles.page}>
                <Header />
                <div className={styles.container}>
                    <form>
                        <input type="text" placeholder="Consumo" />
                        <input type="text" placeholder="Concessionária" />
                        <input type="text" placeholder="UF" />
                        <button type="submit">Filtrar</button>
                    </form>

                    <div className={styles.quotas}>

                        <div className={styles.solarPlant}>
                            <header>
                                <Image src={solarPlant} alt="Foto da usina"/>
                            </header>
                            <div>
                                <h1 className={styles.title}>Cotas Disponíveis</h1>
                                <span className={styles.amountQuotes}>3 cotas</span>
                                <hr/>
                                <h1 className={styles.amountEnergy}>5.000 kWh</h1>

                                <div className={styles.amountControl}>
                                    <span>+</span>
                                    <span>(1 Cota)</span>
                                    <span>-</span>
                                </div>

                                <button>ASSINAR</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}