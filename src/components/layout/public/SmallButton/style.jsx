import styled from 'styled-components';
import { flexCenter } from 'styles/modules';

export const Styled = {
  Button: styled.button`
    ${flexCenter()}
    border: none;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    width: 20%;
    margin: 10px 0px 10px 5px;
    cursor: pointer;
    background-color: #565656;
    color: #fff;
    border-radius: 5px;
    :hover {
      background-color: #6e6e6e;
    }
  `,
};
