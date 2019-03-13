import styled from 'styled-components'
import { Flex as BaseFlex, Link } from 'rebass'

export const Flex = styled(BaseFlex)`
    background-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.black}
`