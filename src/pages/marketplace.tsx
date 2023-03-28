import Image from 'next/image';

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Quotas } from '@/components/Quotas/Quotas';

import styles from '../styles/MarketPlace.module.scss';

export default function marketPlace() {
    return (
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

                    <h1 className={styles.containerTitle}>Cotas Disponíveis</h1>
                    <div className={styles.quotasContainer}>
                        <Quotas />
                        <Quotas />
                        <Quotas />
                        <Quotas />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}