import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Box, Link, Text } from 'rebass';
import { Flex } from './SearchBar.styles'

export default function SearchBar() {
    return (
        <Flex
            px={2}
            color="white"
            bg="black"
            alignItems="center"
        >
            <FaInstagram color="#111" />
            <Text p={2} fontWeight="bold">
                Rebass
            </Text>
            <Box mx="auto" />
            <Link href="#!" p={2} color="white">
                Profile
            </Link>
        </Flex>
    );
}
