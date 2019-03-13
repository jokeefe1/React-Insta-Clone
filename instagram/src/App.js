import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Container } from './App.GlobalSyles';
import HomePage from './pages/HomePage/HomePage';

const blue = '#07c';
const lightgray = '#f6f6ff';
const black = '#111';
const white = '#fafafa';

const theme = {
    fontSizes: [12, 14, 16, 24, 32, 48, 64],
    colors: {
        blue,
        lightgray,
        black,
        white
    },
    buttons: {
        primary: {
            color: '#fff',
            backgroundColor: blue
        },
        outline: {
            color: blue,
            backgroundColor: 'transparent',
            boxShadow: 'inset 0 0 2px'
        }
    }
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Container>
                    <HomePage />
                </Container>
            </>
        </ThemeProvider>
    );
};

export default App;
