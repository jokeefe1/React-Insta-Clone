import PropTypes from 'prop-types';
import React from 'react';
import { Flex, Text } from 'rebass';
import { Box } from './CommentSection.styles';

// const nowTime = moment()
//     .startOf('day')
//     .fromNow();

export default function CommentSection(props) {
    const displayComment = props.comments.map(comment => {
        return (
            <Flex key={comment.id}>
                <Box py={1}>
                    <Text>
                        <span>{comment.username}</span>
                        {comment.comments.map(item => item.text)}
                    </Text>
                </Box>
            </Flex>
        );
    });
    return (
        <>
            {displayComment}
            {/* {nowTime} */}
        </>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};
