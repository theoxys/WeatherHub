import React from 'react';
import { Container, Line } from './styled';

interface LineData{
    city: string;
    amount: string;
    date: string;
    country: string;
}

interface RankingTableProps{
    rankingList: LineData[] | undefined;
    onClick(e: any, city:string): void;
}

const RankingTable = (props: RankingTableProps) => {

    return(
        <Container>
            {
                props.rankingList?.map((lineData: LineData) =>(  
                    <Line onClick={e => props.onClick(e, lineData.city)} key={lineData.city}>
                        {lineData.city}, {lineData.country}
                    </Line>
                ))
            }
        </Container>
    )
}

export default RankingTable;