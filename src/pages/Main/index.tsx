import React, { useContext } from 'react';
import Infobox from '../../components/Infobox';
import { ImNewspaper } from 'react-icons/im';
import {RiCalendar2Line} from 'react-icons/ri'
import {AiOutlineBarChart} from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {BiSearchAlt} from 'react-icons/bi'
import {IoMdBulb} from 'react-icons/io'
import LogoImg from '../../assets/logo.png'
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
import { ThemeContext } from 'styled-components';

interface MainPageProps{
  changeTheme(): void;
}

const MainPage = (props: MainPageProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <ThemeButton onClick={props.changeTheme}>
        {(theme.title === 'light') ? <HiOutlineLightBulb size={20} color={theme.font}/> : <IoMdBulb size={20} color={theme.font}/>}
      </ThemeButton>
      <LogoWrapper src={theme.logo}/>

      <Form>
        <BiSearchAlt size={24} color={theme.font}/>
        <Input placeholder="Buscar cidade..."/>
      </Form>

      <Grid>
        <LeftTitle>Condições climaticas</LeftTitle>
        <RightTitle>Destaques</RightTitle>
        <MainWrapper>
          <Infobox title="Quarta Feira | 13/01/2021" icon={ImNewspaper}>
            Ola mundooo
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
