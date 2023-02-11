import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
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
`;

const AuthInput = ({ type, placeholder, id }) => {
  return <Input type={type} placeholder={placeholder} data-testid={id} />;
};

export default AuthInput;
