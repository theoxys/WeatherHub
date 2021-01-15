import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Work Sans", sans-serif;
        border: none;

    }
    body #root{
        background-color: ${props => props.theme.background};
        height: 100vh;
    }

`