import PropTypes from 'prop-types';
import React from 'react';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { Card, Flex, Image, Text } from 'rebass';
import { Divider } from '../../App.GlobalSyles';
import CommentSection from '../CommentSection/CommentSection';
import { Box, StyledInput } from './PostContainer.styles';

export default function PostContainer(props) {
    const { data, comment, handleAddComment, handleUpdateComments } = props;
    const displayData = data.map(item => {
        return (
            <Box key={item.id} mx="auto" my="2rem">
                <Card
                    p={1}
                    borderRadius={2}
                    boxShadow="0 0 16px rgba(0, 0, 0, .25)"
                >
                    <Box px={2}>
                        <Flex alignItems="center">
                            <Image
                                src={item.thumbnailUrl}
                                borderRadius="50%"
                                width={30}
                                height={30}
                                m="1rem"
                                mr="1rem"
                            />
                            <Text fontSize={2} fontWeight="bold">
                                {item.username}
                            </Text>
                        </Flex>
                    </Box>
                    <Image src={item.imageUrl} />
                    <Box px={1} py={2}>
                        <Flex justifyContent="space-between" width="7%" py={2}>
                            <FaRegHeart />
                            <FaRegComment />
                        </Flex>
                        <Text fontSize={0} fontWeight="bold" pb={2}>
                            {item.likes} likes
                        </Text>
                        <CommentSection comments={item.comments} />
                    </Box>
                    <Divider color="lightGrey" />
                    <Box>
                        <StyledInput
                            type="text"
                            name={item.id}
                            value={comment}
                            onChange={handleAddComment}
                            onKeyPress={handleUpdateComments}
                            placeholder="Add a comment..."
                        />
                    </Box>
                </Card>
            </Box>
        );
    });
    return <div>{displayData}</div>;
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            thumbnailUrl: PropTypes.string,
            username: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            comments: PropTypes.array,
            handleAddComment: PropTypes.func,
            handleUpdateComments: PropTypes.func
        })
    )
};
