import React from 'react';
import { FaInstagram, FaRegCompass, FaRegHeart } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import logo from '../../img/logo.png';
import { Flex } from './SearchBar.styles';

export default function SearchBar() {
    return (
        <Flex px={2} color="white" bg="black" alignItems="center">
            <div>
                <FaInstagram color="#111" size={30} />
                <div />
                <img src={logo} alt="logo" />
            </div>

            <input type="text" placeholder="Search" />
            <div>
                <FaRegCompass size={30} />
                <FaRegHeart size={30} />
                <FiUser size={30} />
            </div>
        </Flex>
    );
}
