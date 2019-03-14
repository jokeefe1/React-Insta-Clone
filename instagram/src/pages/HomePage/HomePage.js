import React from 'react';
import PostContainer from '../../components/PostContainer/PostContainer';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function HomePage(props) {
    const { data, comment, handleAddComment, handleUpdateComments } = props;
    return (
        <>
            <SearchBar />
            <PostContainer
                data={data}
                comment={comment}
                handleAddComment={handleAddComment}
                handleUpdateComments={handleUpdateComments}
            />
        </>
    );
}
