import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #03c75b;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  outline-color: #333;
  :hover {
    background-color: #1dd971;
  }
`;

const AuthButton = ({ text, id }) => {
  return <Button data-testid={id}>{text}</Button>;
};

export default AuthButton;
