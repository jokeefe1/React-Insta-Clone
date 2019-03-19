import React from 'react';
import Authenticate from './components/Authentication/Authentication';
import PostsPage from './components/PostsPage/PostsPage';

const App = (props) => {
    return <PostsPage handleLogout={props.handleLogout}/>;
};

export default Authenticate(App);
