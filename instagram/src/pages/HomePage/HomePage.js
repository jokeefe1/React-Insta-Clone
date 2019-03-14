import React from 'react';
import PostContainer from '../../components/PostContainer/PostContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import PropTypes from 'prop-types'

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

HomePage.propTypes = {
    data: PropTypes.array,
    comment: PropTypes.string,
    handleAddComment: PropTypes.func,
    handleUpdateComments: PropTypes.func
}