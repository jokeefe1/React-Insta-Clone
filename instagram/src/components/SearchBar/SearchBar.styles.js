import { Flex as BaseFlex } from 'rebass';
import styled from 'styled-components';

export const Flex = styled(BaseFlex)`
    display: flex;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem 0;
    div:first-child {
        width: 33%;
        display: flex;
        align-items: center;
        div {
            height: 30px;
            border-left: 2px solid ${({ theme }) => theme.colors.lightGrey};
            margin: 0 0.5rem;
        }
    }
    img {
        width: 8vmax;
    }

    input {
        width: 33%;
        height: 2rem;
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.lightGrey};
        text-align: center;
    }

    div:last-child {
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        & > * {
            padding: 0 0.2rem;
            cursor: pointer;
        }
    }
`;
