import React from 'react';
import { Styled } from './style';

const AuthInput = ({ InputData }) => {
  const { type, placeholder, testId, onChange } = InputData;
  return (
    <Styled.Input
      data-testid={testId}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default AuthInput;
