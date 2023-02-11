import React from 'react';
import { Styled } from './style';

const AuthInput = ({ type, placeholder, id, handleInput }) => {
  return (
    <Styled.Input
      data-testid={id}
      type={type}
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};

export default AuthInput;
