import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, theme } from '../../App.GlobalSyles';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: [],
            filterTarget: '',
            likes: 310
        };
    }
    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    increment = prevState => {
        this.setState(prevState => ({ likes: prevState.likes + 1 }));
    };

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    filter = e => {
        this.handleInput(e);
        this.setState(prevState => {
            const filteredPosts = prevState.posts.filter(post => {
                return post.username.includes(prevState.filterTarget);
            });
            return { filteredPosts, filterTarget: '' };
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
