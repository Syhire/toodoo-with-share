import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF9C4;
`;

export const ContentArea = styled.div`
    display: flex;
    flex-flow:row;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    padding-bottom: 72px;
    margin-bottom: auto;
`;

export const Column = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
`;

export const TaskTitle = styled.div`
  font-size:18px;
  margin:16px;
  font-weight:700;
  margin-right:auto;
`;

export const TaskHeaderRow = styled.div`
  display:flex;
`;

export const RoundedButton = styled.div`
  border-radius:50%;
  background-color:#FFC107;
  width:24px;
  height:24px;
  box-shadow:0 2px #FFB300;
  margin:16px;
`;

export const RoundedButtonIcon = styled.div`
  color: #ffffff;
  font-size:14px;
  line-height:24px;
  text-align:center;
`;

export const TaskEditorRow = styled.div`
  display:flex;
  flex-direction:row;
  padding:16px;
`;