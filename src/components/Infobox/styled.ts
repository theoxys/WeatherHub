import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;    
    height: 100%;
    background-color: ${p => p.theme.white};
    border-radius:10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0 30px;
    color: ${p => p.theme.font};
`
export const Header = styled.div`
    padding: 30px 0;
    border-bottom: 1px solid ${p => p.theme.hover};
    display: flex;
    margin-bottom: 30px;    
`
export const Title = styled.div`
    font-size: 18px;
    font-weight: 400;
    font-family: 'Work Sans';
    color: ${p => p.theme.font};
    margin-left: 15px;
`