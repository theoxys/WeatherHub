import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${p => p.theme.font};
    flex-direction: column;
    opacity: 0.4;
`
export const Text = styled.p`
    text-align: center;
    font-size: 24px;
    line-height: 1.5;
    max-width: 400px;
    margin-top: 30px;
`