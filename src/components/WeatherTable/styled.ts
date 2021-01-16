import styled from 'styled-components'

interface TitleProps{
    size: string;
}

export const Title = styled.p<TitleProps>`
    font-size: ${props => props.size};
    font-family: "Work Sans";
    margin: 15px;
    text-align: center;
`
export const Container = styled.div`
    width: 100%;
    height: 400px;
    color: ${p => p.theme.font};
`
export const Header = styled.p`
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 15px;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "temp max"
        "temp min";
    grid-gap: 15px;
    height: 180px;
`
export const TempBox = styled.div`
    background-color: ${props => props.theme.hover};
    border-radius: 10px;
    grid-area: temp;
    display: flex;
    align-items: flex-start;
    padding: 15px;
    justify-content: center;
    flex-direction: column;
`
export const MaxBox = styled.div`
    background-color: ${props => props.theme.hover};
    border-radius: 10px;
    grid-area: max;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const MinBox = styled.div`
    background-color: ${props => props.theme.hover};
    border-radius: 10px;
    grid-area: min;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardsWrapper = styled.div`
    width: 100%;
    height: 185px;
    display: flex;
    justify-content: space-between;
`
export const Card = styled.div`
    width: 122px;
    height: 185px;
    background-color: ${p => p.theme.hover};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Subtitle = styled.p`
    font-family: "Work Sans";
    font-size: 24px;
    margin-top:30px;
    margin-bottom: 30px;
`