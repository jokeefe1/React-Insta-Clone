import moment from 'moment';
import React from 'react';
import { Flex, Text } from 'rebass';
import { Box } from './CommentSection.styles'
import PropTypes from 'prop-types'

const nowTime = moment()
    .startOf('day')
    .fromNow();

export default function CommentSection(props) {
    const { comments } = props;
    const displayComment = comments.map(comment => {
        return (
            <Flex key={comment.text}>
                    <Box  py={1}>
                        <Text><span>{comment.username}</span>{comment.text}</Text>
                    </Box>
                </Flex>
        );
    });
    return (
        <>
            {displayComment}
            {nowTime}
        </>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}