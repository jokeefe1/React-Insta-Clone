import { Flex as BaseFlex } from 'rebass';
import styled from 'styled-components';

export const Flex = styled(BaseFlex)`
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem;
    div:first-child {
        width: 33%;
        display: flex;
        align-items: center;
        div {
            height: 30px;
            border-left: 1px solid ${({ theme }) => theme.black};
            padding: 0 0.5rem;
            margin-left: 1rem;
        }
    }
    img {
        width: 40%;
        height: 40%;
    }

    input {
        width: 30%;
        height: 2rem;
    }

    div:last-child {
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        & > * {
            padding: 0 0.5rem;
        }
    }
`;
