import moment from 'moment';
import React from 'react';
import { Flex, Text } from 'rebass';
import { Box } from './CommentSection.styles'

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
                        {/* <Text>{comment.text}</Text> */}
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
