import moment from 'moment';
import React from 'react';
import { Box, Flex, Text } from 'rebass';

const nowTime = moment()
    .startOf('day')
    .fromNow();

export default function CommentSection(props) {
    const { comments } = props;
    const displayComment = comments.map(comment => {
        return (
            <Flex key={comment.text}>
                    <Box  py={1}>
                        <Text fontWeight="bold">{comment.username}</Text>
                        <Text>{comment.text}</Text>
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
