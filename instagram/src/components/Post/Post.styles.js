import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        align-items: center;
        padding: 1rem;
        img {
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
        }
        div {
            padding-left: 1rem;
            font-weight: 900;
        }
    }
    img {
        width: 100%;
        padding-bottom: 1rem;
    }
`;
