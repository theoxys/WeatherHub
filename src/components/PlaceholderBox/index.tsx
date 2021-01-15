import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Container, Text } from './styled';

const PlaceholderBox = () =>{

    return(
        <Container>
            <BiSearchAlt size={120}/>
            <Text>Digite o nome de sua cidade para buscar por informações climáticas em tempo real!</Text>
        </Container>
    )

}

export default PlaceholderBox;