import api from "@/services/api"
import { GetServerSideProps } from "next"

import {ProposalModel} from '../components/Proposal/ProposalModel';

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
                <h1>Essas são as propostas disponíveis</h1>
                {proposals.map((proposal: Proposal)=> (
                    <ProposalModel proposal={proposal}/>
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