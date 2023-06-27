import api from "@/services/api"
import { GetServerSideProps } from "next"

interface Props{
    proposals: Proposal[]
}

interface Proposal{
    client_id: number,
    client_name: string,
    client_phone: string,
    proposal_value: number, 
}

export default function ProposalsPage({proposals}: Props){
    console.log(proposals);
    return(
        <div>
            <main>
                <h1>Propostas Recebidas</h1>
                {proposals.map((proposal: Proposal)=> (
                    <div>
                        <p>{proposal.client_id}</p>
                        <p>{proposal.client_name}</p>
                        <p>{proposal.client_phone}</p>
                        <p>{proposal.proposal_value}</p>
                    </div>
                ))}
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const {data} = await api.get('proposal');
    const {proposals} = data;
    return {props: {proposals}}
}