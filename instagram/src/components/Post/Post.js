import React from 'react';
import { StyledDiv } from './Post.styles';

const Post = props => {
    return (
        <StyledDiv>
            <div>
                <img src={props.thumbnail} alt="thumbnail" />
                <div>{props.username}</div>
            </div>
            <img src={props.image} alt="post" />
        </StyledDiv>
    );
};

export default Post;
