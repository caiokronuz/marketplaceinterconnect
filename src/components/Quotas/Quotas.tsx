import Image from 'next/image';

import solarPlant from '../../../public/st-edwiges.jpg';
import styles from './Quotas.module.scss';

export function Quotas() {
    return (
        <div className={styles.quotas}>
            <div className={styles.solarPlant}>
                <header>
                    <Image src={solarPlant} alt="Foto da usina" />
                </header>
                <div className={styles.description}>
                    <h1 className={styles.title}>Santa Edwiges</h1>
                    <span className={styles.amountQuotes}>3 cotas</span>
                    <hr />
                    <h1 className={styles.amountEnergy}>5.000 kWh</h1>

                    <div className={styles.amountControl}>
                        <span>-</span>
                        <span>(1 Cota)</span>
                        <span>+</span>
                    </div>

                    <button>ASSINAR</button>
                </div>
            </div>
        </div>
    )
}