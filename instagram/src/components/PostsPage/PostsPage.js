import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../App.GlobalSyles';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import { Container } from '../../App.GlobalSyles'

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            likes: 370,
            filteredPosts: [],
            filterTarget: ''
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ posts: dummyData });
        }, 500);
    }
    increment = prevState => {
        this.setState(prevState => ({ likes: prevState.likes + 1 }));
    };

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    filter = event => {
        this.handleInput(event);
        this.setState(prevState => {
            const filteredPosts = prevState.posts.filter(post => {
                return post.username.includes(prevState.filterTarget);
            });
            return { filteredPosts };
        });
    };
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <SearchBar
                        changeHandler={this.filter}
                        filterTarget={this.state.filterTarget}
                    />
                    <PostContainer
                        data={
                            this.state.filteredPosts.length > 0
                                ? this.state.filteredPosts
                                : this.state.posts
                        }
                        likes={this.state.likes}
                        increment={this.increment}
                    />
                </Container>
            </ThemeProvider>
        );
    }
}

export default PostsPage;
