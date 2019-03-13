import React from 'react';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { Card, Flex, Image, Text } from 'rebass';
import CommentSection from '../CommentSection/CommentSection';
import { Box } from './PostContainer.styles';
import { Divider } from '../../App.GlobalSyles';

export default function PostContainer(props) {
    const { data } = props;
    const displayData = data.map(item => {
        return (
            <Box key={item.username} mx="auto" my="2rem">
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
                    <Box px={1}>
                        <FaRegHeart />
                        <FaRegComment />
                        <Text fontSize={0}>{item.likes} likes</Text>
                        <CommentSection comments={item.comments} />
                    </Box>
                    <Divider color='lightGrey'/>
                    <Box>
                        <Text color='lightGrey'>
                            Add a comment...
                        </Text>
                    </Box>
                </Card>
            </Box>
        );
    });
    return <div>{displayData}</div>;
}
