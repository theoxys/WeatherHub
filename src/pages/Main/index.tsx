import React, { useCallback, useContext, useRef, useState } from 'react';
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
import api from '../../services/api'
import { ThemeContext } from 'styled-components';
import WeatherTable from '../../components/WeatherTable';

interface MainPageProps{
  changeTheme(): void;
}

interface WeatherData{
  main: {
    temp: string;
    temp_min: string;
    temp_max: string;
  }
  sys:{
    country: string;
  }
  name: string;
}

const MainPage = (props: MainPageProps) => {

  const theme = useContext(ThemeContext)
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>()

  const handleFetchWeatherData = useCallback(async(e) => {
    e.preventDefault();

    const response = await api.get('/weather', {
      params:{
        q:inputRef.current?.value,
        appid: '80eec7703db8ff327e9706def79ce43e',
        units: 'metric'
      }
    })
    let newData = {
      main: {
        temp: response.data.main.temp,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max
      },
      sys:{
        country: response.data.sys.country
      },
      name: response.data.name
    }
    setWeatherData(newData)
  },[])

  return (
    <Wrapper>
      <ThemeButton onClick={props.changeTheme}>
        {(theme.title === 'light') ? <HiOutlineLightBulb size={20} color={theme.font}/> : <IoMdBulb size={20} color={theme.font}/>}
      </ThemeButton>
      <LogoWrapper src={theme.logo}/>

      <Form onSubmit={handleFetchWeatherData}>
        <BiSearchAlt size={24} color={theme.font}/>
        <Input placeholder="Buscar cidade..." ref={inputRef}/>
      </Form>

      <Grid>
        <LeftTitle>Condições climaticas</LeftTitle>
        <RightTitle>Destaques</RightTitle>
        <MainWrapper>
          <Infobox title="Quarta Feira | 13/01/2021" icon={ImNewspaper}>
            {weatherData ? 
            <WeatherTable
              city={weatherData.name}
              country={weatherData.sys.country}
              minTemp={weatherData.main.temp_min}
              maxTemp={weatherData.main.temp_max}
              temp={weatherData.main.temp}
            /> 
            
            : 'Faça uma pesquisa!'}
            
          </Infobox>
        </MainWrapper>
        <TopWrapper>
          <Infobox title="Mais pesquisados" icon={AiOutlineBarChart}/>
        </TopWrapper>
        <LastWrapper>
          <Infobox title="Últimas pesquisas" icon={RiCalendar2Line}/>
        </LastWrapper>
      </Grid>

    </Wrapper>
  )
}

export default MainPage;
