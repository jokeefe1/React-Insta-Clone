import styled from 'styled-components'
import { Flex as BaseFlex, Box as BaseBox } from 'rebass'
import { FaRegHeart as BaseHeart } from 'react-icons/fa'

export const Flex = styled(BaseFlex)`
    display: flex;
`
export const FaRegHeart = styled(BaseHeart)`
    cursor: pointer;
`

export const Box = styled(BaseBox)`
    max-width: 600px;
`
export const StyledInput = styled.input`
    color: lightgrey;
    width: 100%;
    border: none;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    outline: white;
`
export const StyledDiv = styled.div`
    padding-bottom: 2rem;
`