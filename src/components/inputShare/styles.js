import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
`;

export const Input = styled.input`
  display: flex;
  background-color: lightgray;
  font-size: 18px;
  outline: none;
  border: none;
  box-shadow: none;
  height: 24px;
  border-radius: 8px;
  padding: 8px;
  color: rgba(0,0,0,0.75);

  &:focus {
    box-shadow: inset 0 5px gray;
  }
`;

export const Button = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  color: gray;
  font-size: 24px;
  margin-left: 8px;
`;