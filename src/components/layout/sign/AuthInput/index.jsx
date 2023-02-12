import React from 'react';
import { Styled } from './style';

const AuthInput = ({ type, placeholder, id, onChange }) => {
  return (
    <Styled.Input
      data-testid={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default AuthInput;
