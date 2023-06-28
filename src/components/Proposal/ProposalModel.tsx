import { BsWhatsapp } from 'react-icons/bs';
import styles from './Proposal.module.scss';
import Link from 'next/link';

interface Props{
    proposal: {
        client_id: number,
        client_name: string,
        client_phone: string,
        proposal_value: number,  
    }
}

export function ProposalModel({proposal}: Props){
    return(
        <div className={styles.model}> 
            <h1>{proposal.client_name}</h1>
            <h2>R$ {proposal.proposal_value}</h2>
            <p>Fortaleza-CE</p>
            <Link href={"https://google.com.br"}><BsWhatsapp size={20} color="FFF" />Entrar em contato</Link>
        </div>
    )
}