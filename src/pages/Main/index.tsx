import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Infobox from '../../components/Infobox';
import { ImNewspaper } from 'react-icons/im';
import {RiCalendar2Line} from 'react-icons/ri'
import {AiOutlineBarChart} from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {BiSearchAlt} from 'react-icons/bi'
import {IoMdBulb} from 'react-icons/io'
import { 
  Wrapper,
  MainWrapper,
  TopWrapper,
  LastWrapper,
  Grid,
  Input,
  Form,
  LogoWrapper,
  LeftTitle,
  RightTitle,
  ThemeButton
} from './styled';
import api, { createNewWeatherData } from '../../services/api'
import { ThemeContext } from 'styled-components';
import WeatherTable from '../../components/WeatherTable';
import RankingTable from '../../components/RankingTable';
import PlaceholderBox from '../../components/PlaceholderBox';
import { getLastPicks, getTopPicks, registerSearch } from '../../services/firebase';

interface MainPageProps{
  changeTheme(): void;
}

interface WeatherData{
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

interface RankingData{
  city: string;
  amount: string;
  date: string;
  country: string;
}

const ranking = [
  {city: "Aparecida", country: "BR"},
  {city: "Itajuba", country: "BR"},
  {city: "Guaratingueta", country: "BR"},
  {city: "Piranguinho", country: "BR"},
  {city: "Roseira", country: "BR"},
]

const MainPage = (props: MainPageProps) => {

  const [lastPicks, setLastPicks] = useState<RankingData[]>();
  const [topPicks, setTopPicks] = useState<RankingData[]>();
  const theme = useContext(ThemeContext)
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>()

  const handleFetchWeatherData = useCallback(async(e, city: string) => {
    e.preventDefault();

    const response = await api.get('/weather', {
      params:{
        q:city,
        appid: '80eec7703db8ff327e9706def79ce43e',
        units: 'metric'
      }
    })
    let newData = createNewWeatherData(response);
    registerSearch(newData.city, newData.country);
    setWeatherData(newData)
  },[])

  const fetchLastPicks = useCallback(async()=>{
    let lasPicksData = await getLastPicks()
    setLastPicks(lasPicksData)
  },[])

  const fetchTopPicks = useCallback(async()=>{
    let topPicksData = await getTopPicks()
    setTopPicks(topPicksData)
  },[])

  useEffect(()=>{
    fetchLastPicks();
    fetchTopPicks();
  }, [])

  return (
    <Wrapper>
      <ThemeButton onClick={props.changeTheme}>
        {(theme.title === 'light') ? <HiOutlineLightBulb size={20} color={theme.font}/> : <IoMdBulb size={20} color={theme.font}/>}
      </ThemeButton>
      <LogoWrapper src={theme.logo}/>
      <Form onSubmit={ e => handleFetchWeatherData(e, inputRef.current?.value!)}>
        <BiSearchAlt size={24} color={theme.font}/>
        <Input placeholder="Buscar cidade..." ref={inputRef}/>
      </Form>
      <Grid>
        <LeftTitle>Condições climáticas</LeftTitle>
        <RightTitle>Destaques</RightTitle>
        <MainWrapper>
          <Infobox title="Quarta Feira | 13/01/2021" icon={ImNewspaper}>
            {
            weatherData ? 
              <WeatherTable
                city={weatherData.city}
                country={weatherData.country}
                minTemp={weatherData.minTemp}
                maxTemp={weatherData.maxTemp}
                temp={weatherData.temp}
                clouds={weatherData.clouds}
                humidity={weatherData.humidity}
                rain={weatherData.rain}
                wind={weatherData.wind}
                sensation={weatherData.sensation}
              /> 
            : <PlaceholderBox/>
            }            
          </Infobox>
        </MainWrapper>
        <TopWrapper>
          <Infobox title="Mais pesquisados" icon={AiOutlineBarChart}>
            <RankingTable 
              rankingList={topPicks}
              onClick={handleFetchWeatherData}
            />
          </Infobox>
        </TopWrapper>
        <LastWrapper>
          <Infobox title="Últimas pesquisas" icon={RiCalendar2Line}>
            <RankingTable 
                rankingList={lastPicks}
                onClick={handleFetchWeatherData}
              />
          </Infobox>
        </LastWrapper>
      </Grid>

    </Wrapper>
  )
}

export default MainPage;
