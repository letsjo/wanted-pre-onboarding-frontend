import React from 'react';
import { Styled } from './style';

const AuthButton = ({ text, id }) => {
  return <Styled.Button data-testid={id}>{text}</Styled.Button>;
};

export default AuthButton;
