import React from 'react';

const Post = props => {
    return (
        <div>
            <div>
                <img src={props.thumbnail} alt="thumbnail" />
                <div>{props.username}</div>
            </div>
            <img src={props.image} alt="post" />
        </div>
    );
};

export default Post;
