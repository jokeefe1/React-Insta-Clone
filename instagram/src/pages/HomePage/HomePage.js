import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PostContainer from '../../components/PostContainer/PostContainer';

export default function HomePage(props) {
    const { data, comment, handleAddComment, handleUpdateComments } = props
    return (
        <>
            <SearchBar />
            <PostContainer data={data} comment={comment} handleAddComment={handleAddComment} handleUpdateComments={handleUpdateComments} />
        </>
    );
}
