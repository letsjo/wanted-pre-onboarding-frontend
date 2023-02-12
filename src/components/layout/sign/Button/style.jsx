import styled from 'styled-components';

export const Styled = {
  Button: styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4a4a4a;
    color: #fff;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    outline-color: #333;
    :hover {
      background-color: #616161;
    }
    :disabled {
      background-color: #adadad;
      cursor: auto;
    }
  `,
};
