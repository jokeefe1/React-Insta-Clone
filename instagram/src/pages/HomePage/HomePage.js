import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PostContainer from '../../components/PostContainer/PostContainer';

export default function HomePage(props) {
    return (
        <>
            <SearchBar />
            <PostContainer data={props.data}/>
        </>
    );
}
