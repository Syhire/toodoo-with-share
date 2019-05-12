import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 56px;
    background-color: #FFC107;
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(100,0,0,0.25);
    color: white;
    display: flex;
    flex-flow: row;
    align-items: center;
    z-index: 100;
`;

export const Icon = styled.div`
    line-height: 56px;
    padding: 16px;
    font-size: 24px;
    display: flex;
    flex-flow: row;
    align-items: center;
`
