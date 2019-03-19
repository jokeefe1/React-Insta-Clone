import PropTypes from 'prop-types';
import React from 'react';
import { Container } from '../../App.GlobalSyles';
import CommentSection from '../CommentSection/CommentSection';
import Icons from '../Icons/Icons';
import Post from '../Post/Post';

const PostContainer = props => {
    if (!props.data.length) {
        return <h1>Loading ...</h1>;
    }

    return (
        <Container>
            <div>
                {props.data.map((data, index) => {
                    return (
                        <div key={data.timestamp}>
                            <Post
                                thumbnail={data.thumbnailUrl}
                                image={data.imageUrl}
                                username={data.username}
                            />
                            <Icons increment={props.increment} />
                            <div>{props.likes} likes</div>
                            <div>
                                <CommentSection comments={data.comments} />
                            </div>
                            <div>2 HOURS AGO</div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
};

export default PostContainer;
