import React from 'react';
import {
    Container,
    Title,
    Grid,
    TempBox,
    MaxBox,
    MinBox,
    Header
} from './styled'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

interface TableProps{
    city: string;
    country: string;
    temp: string;
    maxTemp: string;
    minTemp: string;
}

const WeatherTable = (props: TableProps) => {

    return(
        <Container>
            <Header>{props.city}, {props.country}</Header>
            <Grid>
                <TempBox>
                    <Title size="18px">Temperatura</Title>
                    <Title size="80px">{props.temp}°</Title>
                </TempBox>
                <MaxBox>
                    <MdKeyboardArrowUp size={32}/>
                    <Title size="18px">Máxima</Title>
                    <Title size="30px">{props.maxTemp}°</Title>
                </MaxBox>
                <MinBox>
                    <MdKeyboardArrowDown size={32}/>
                    <Title size="18px">Minima</Title>
                    <Title size="30px">{props.minTemp}°</Title>
                </MinBox>
            </Grid>
        </Container>
    )
}

export default WeatherTable;