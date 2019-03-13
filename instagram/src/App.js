import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Container, theme } from './App.GlobalSyles';
import dummyData from './dummy-data';
import HomePage from './pages/HomePage/HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        this.handleData();
    }

    handleData = () => {
        this.setState(prevState => {
            return { data: [...prevState.data, ...dummyData] };
        });
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <Container>
                        <HomePage data={this.state.data} />
                    </Container>
                </>
            </ThemeProvider>
        );
    }
}

export default App;
