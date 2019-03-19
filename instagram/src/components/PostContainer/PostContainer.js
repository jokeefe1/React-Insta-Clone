import PropTypes from 'prop-types';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { Container } from '../../App.GlobalSyles';
import CommentSection from '../CommentSection/CommentSection';
import Post from '../Post/Post';
import { StyledDiv } from './PostContainer.styles';

const PostContainer = props => {
    if (!props.data.length) {
        return <h1>Loading ...</h1>;
    }

    return (
        <Container>
            {props.data.map((data, index) => {
                return (
                    <StyledDiv key={data.timestamp}>
                        <Post
                            thumbnail={data.thumbnailUrl}
                            image={data.imageUrl}
                            username={data.username}
                        />
                        <div>
                            <FaRegHeart onClick={props.increment} id={data.id}/>
                            <FiMessageCircle />
                            <div>{props.likes} likes</div>
                        </div>
                        <div>
                            <CommentSection comments={data.comments} />
                        </div>
                        <div>2 HOURS AGO</div>
                    </StyledDiv>
                );
            })}
        </Container>
    );
};

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
};

export default PostContainer;
