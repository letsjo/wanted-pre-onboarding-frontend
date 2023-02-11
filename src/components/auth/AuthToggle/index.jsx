import React from 'react';
import { Styled } from './style';

const AuthToggle = ({ text, handleCallback }) => {
  return <Styled.Toggle onClick={handleCallback}>{text}</Styled.Toggle>;
};

export default AuthToggle;
