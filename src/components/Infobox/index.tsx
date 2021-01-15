import react, { useContext } from 'react';
import React from 'react';
import { IconType } from 'react-icons';
import { ThemeContext } from 'styled-components';
import {
    Container,
    Header,
    Title
} from './styled'

interface InfeboxProps{
    title: string;
    icon: IconType;
    children?: React.ReactNode;
}

const Infobox = (props: InfeboxProps): JSX.Element => {

    const { font } = useContext(ThemeContext)
    const Icon = react.createElement(props.icon, { size: 24, color: font })

    return(
        <Container>
            <Header>
                {Icon}
                <Title>{props.title}</Title>
            </Header>
            {props.children}
        </Container>
    )
}

export default Infobox;