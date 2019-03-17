import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Container, theme } from './App.GlobalSyles';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData,
            comment: '',
            comments: []
        };
    }

    componentDidMount = () => {
        this.loadComments();
    };

    loadComments = () => {
        const comments = this.state.data.map( item => {
            return item.comments
        })
        this.setState( prevState => {
            return {
                comments: [ ...prevState.comments, ...comments ]
            }
        })
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleUpdateComments = e => {
        if (e.key === 'Enter') {
            const newComment = this.state.comment;
            const updatedComments = {
                username: 'martinseludo',
                text: newComment
            };
            this.setState(prevState => ({
                comments: [...prevState.comments, updatedComments],
                comment: ''
            }));
        }
    };

    handleHeartClick = () => {
        this.setState({ data: this.state.data.likes + 1 });
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <Container>
                        <SearchBar />
                        <PostContainer
                            data={this.state.data}
                            comments={this.state.comments}
                            comment={this.state.comment}
                            handleChange={this.handleChange}
                            handleUpdateComments={this.handleUpdateComments}
                            handleHeartClick={this.handleHeartClick}
                        />
                    </Container>
                </>
            </ThemeProvider>
        );
    }
}

export default App;
