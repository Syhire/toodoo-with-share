import styled , { keyframes }from 'styled-components';

const WOOOP = keyframes`
    0% {
        font-size: 16px;
    }
    100% {
        font-size: 18px;
    }
`

const DOUBLEWOOOP = keyframes`
    0% {
        font-size: 16px;
    }
    100% {
        font-size: 30px;
    }
`

const COLORWOOP = keyframes`
    0% {
        color: gray;
    }
    100% {
        color: #E94949;
    }
`

export const Wrapper = styled.div`
    display: inline;
    flex-direction: row;
    font-size: 16px;
    transition: font-size 0.5s;

    &:hover {
        animation: ${WOOOP} 0.3s ease-in-out 0s;
        font-size: 18px;
    }
`;

export const Texts = styled.div`
    font-weight: 500;
    padding-left: 8px;
    padding-right: 8px;
`;

export const Box = styled.div`
    margin-right: 8px;
    margin-top: 8px;
    padding: 8px;
    border-radius: 8px;
    background-color: lightgray;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Circle = styled.div`
    border-radius: 50%;
    color: gray;
    transition: font-size 0.5s;

    &:hover {
        animation: ${DOUBLEWOOOP} 0.3s ease-in-out 0s;
        font-size: 30px;
    }
`;

export const Circle2 = styled.div`
    border-radius: 50%;
    color: gray;
    transition: color 0.5s;

    &:hover {
        animation: ${COLORWOOP} 0.5s ease-in-out 0s;
        color: #E94949;
    }
`;

