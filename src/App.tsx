import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/Main';
import GlobalStyle from './styles/global';
import {Light, Dark} from './styles/themes';

const App = () => {
    const [theme, setTheme] = useState(Light);

    const changeTheme = useCallback(()=>{
        setTheme(theme.title === 'light' ? Dark : Light )
    }
    ,[theme])

    return(
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <MainPage changeTheme={changeTheme}/>
    </ThemeProvider>
    )
}

export default App;