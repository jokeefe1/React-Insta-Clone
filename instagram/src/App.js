import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Container, theme } from './App.GlobalSyles';
import dummyData from './dummy-data';
import HomePage from './pages/HomePage/HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            comment: '',
            comments: []
        };
    }

    componentWillMount() {
        this.handleData();
    }

    handleData = () => {
        this.setState(prevState => {
            const updatedComments = dummyData.map(item => item.comments);
            return {
                data: [...prevState.data, ...dummyData],
                comments: [...prevState.comments, ...updatedComments]
            };
        });
    };

    handleAddComment = e => {
        const { value } = e.target;
        this.setState({ comment: value });
    };

    handleUpdateComments = e => {
        const index = Number(e.target.name) - 1;
        if (e.key === 'Enter') {
            this.setState(prevState => {
                return {
                    comments: [
                        ...prevState.comments[index],
                        {
                            text: this.state.comment,
                            username: 'themexican_leprechaun'
                        }
                    ],
                    comment: ''
                };
            });
        }
        console.log(index);
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
                            handleAddComment={this.handleAddComment}
                            handleUpdateComments={this.handleUpdateComments}
                        />
                    </Container>
                </>
            </ThemeProvider>
        );
    }
}

export default App;
