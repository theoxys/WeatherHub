import React from 'react';
import { Container, Line } from './styled';

interface LineData{
    city: string;
    country: string;
}

interface RankingTable{
    rankingList: LineData[];
    onClick(e: any, city:string): void;
}

const RankingTable = (props: RankingTable) => {

    return(
        <Container>
            {
                props.rankingList.map((lineData: LineData) =>(  
                    <Line onClick={e => props.onClick(e, lineData.city)}>
                        {lineData.city}, {lineData.country}
                    </Line>
                ))
            }
        </Container>
    )
}

export default RankingTable;