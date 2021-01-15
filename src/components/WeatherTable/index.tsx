import React from 'react';
import {
    Container,
    Title,
    Grid,
    TempBox,
    MaxBox,
    MinBox,
    Header,
    CardsWrapper,
    Card,
    Subtitle
} from './styled'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {FaWind} from 'react-icons/fa'
import {BsDropletHalf, BsClockHistory} from 'react-icons/bs'
import {RiCloudLine} from 'react-icons/ri'
import {TiWeatherWindyCloudy} from 'react-icons/ti'

interface TableProps{
    city: string;
    country: string;
    temp: string;
    maxTemp: string;
    minTemp: string;
    wind: string;
    clouds: string;
    humidity: string;
    rain: string;
    sensation: string;
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
            <Subtitle>Condições diversas:</Subtitle>
            <CardsWrapper>
                <Card>
                    <Title size="18">Umidade</Title>
                    <BsDropletHalf size={32}/>
                    <Title size="18">{props.humidity}%</Title>
                </Card>
                <Card>
                    <Title size="18">Vento</Title>
                    <FaWind size={32}/>
                    <Title size="18">{props.wind}m/s</Title>
                </Card>
                <Card>
                    <Title size="18">Pressão</Title>
                    <BsClockHistory size={32}/>
                    <Title size="18">{props.rain}hPa</Title>
                </Card>
                <Card>
                    <Title size="18">Nuvens</Title>
                    <RiCloudLine size={32}/>
                    <Title size="18">{props.clouds}</Title>
                </Card>
                <Card>
                    <Title size="18">Sensação Térmica</Title>
                    <TiWeatherWindyCloudy size={32}/>
                    <Title size="18">{props.sensation}°</Title>
                </Card>
            </CardsWrapper>
        </Container>
    )
}

export default WeatherTable;