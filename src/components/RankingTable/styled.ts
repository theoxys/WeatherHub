import styled from 'styled-components'

export const Line = styled.div`
    height: 30px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: ${props => props.theme.hover};    
    }
`

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 120px);
`