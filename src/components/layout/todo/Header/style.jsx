import styled from 'styled-components';
import { flexBox, flexCenter } from 'styles/modules';

export const Styled = {
  Container: styled.div`
    ${flexBox({ content: 'space-between', items: 'center' })}
    margin: 0px 50px;
    padding-top: 30px;
    padding-bottom: 20px;
    width: 80%;
    border-bottom: 1px solid #e5e5e5;
  `,
  Title: styled.div`
    font-size: 30px;
    font-weight: bold;
  `,
  Button: styled.button`
    ${flexCenter('row')}
    background-color: #03c75b;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    padding: 12px;
    border-radius: 5px;
    :hover {
      background-color: #1dd971;
    }
  `,
};
