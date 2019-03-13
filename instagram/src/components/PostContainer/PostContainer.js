import React from 'react';
import { Box, Card, Heading, Image, Text } from 'rebass';

export default function PostContainer(props) {
    const { username } = props.data[0];
    return (
        <Box width={340} mx="auto">
            <Card
                p={1}
                borderRadius={2}
                boxShadow="0 0 16px rgba(0, 0, 0, .25)"
            >
                <Image src={'https://picsum.photos/500'} />
                <Box px={2}>
                    <Heading as="h3">{username}</Heading>
                    <Text fontSize={0}>Small meta text</Text>
                </Box>
            </Card>
        </Box>
    );
}
