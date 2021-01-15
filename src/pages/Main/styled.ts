import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 730px 350px;
    grid-template-rows: 30px 1fr 1fr;
    height: 700px;
    grid-template-areas:
        "l-title r-title"
        "main top"
        "main last";
    grid-gap: 30px;
`

export const MainWrapper = styled.div`
    grid-area: main;
`
export const TopWrapper = styled.div`
    grid-area: top;
`
export const LastWrapper = styled.div`
    grid-area: last;
`

export const Input = styled.input`
    width: 100%;
    margin-left: 15px;
    font-size: 18px;
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.font};

    &::placeholder{
        color: ${p => p.theme.font};
        opacity: 0.7;
    }
`

export const Form = styled.form`
    width: 1110px;
    height: 50px;
    border-radius:10px;
    background-color: ${p => p.theme.white};
    margin-bottom: 60px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`

export const LogoWrapper = styled.img`
    width: 400px;
    margin-bottom: 60px;
`

export const Headline = styled.div`
    display: flex;
    margin-bottom: 30px;
`

export const RightTitle = styled.p`
    font-size: 30px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    grid-area: r-title;
    color: ${p => p.theme.font};
`
export const LeftTitle = styled.p`
    font-size: 30px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    grid-area: l-title;
    color: ${p => p.theme.font};
`
export const ThemeButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${p => p.theme.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 30px;
    right: calc(50% - 550px);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: ${p => p.theme.hover};
    }

`