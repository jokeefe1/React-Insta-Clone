import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Container, theme } from './App.GlobalSyles';
import dummyData from './dummy-data';
import HomePage from './pages/HomePage/HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData,
            comment: ''
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleUpdateComments = e => {
        console.log(e.target)
        if (e.key === 'Enter') {
            const newComment = this.state.comment;
            const updatedComments = {
                username: 'martinseludo',
                text: newComment
            };
            this.setState(prevState => ({
                data: [prevState.data, updatedComments]
            }));
        }
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <Container>
                        <HomePage
                            data={this.state.data}
                            comment={this.state.comment}
                            handleChange={this.handleChange}
                            handleUpdateComments={this.handleUpdateComments}
                        />
                    </Container>
                </>
            </ThemeProvider>
        );
    }
}

export default App;
