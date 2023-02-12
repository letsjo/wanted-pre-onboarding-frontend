import styled from 'styled-components';

export const Styled = {
  Input: styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid #adadad;
    font-size: 16px;
    outline: none;
    :focus {
      border-bottom: 2px solid #333;
    }
  `,
};
