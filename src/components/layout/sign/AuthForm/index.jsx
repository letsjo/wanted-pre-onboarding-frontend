import React from 'react';
import { Styled } from './style';

import AuthInput from '../AuthInput';
import AuthButton from '../AuthButton';
import AuthToggle from '../AuthToggle';

const AuthForm = ({ data }) => {
  const { title, inputs, button, toggle } = data;
  return (
    <Styled.Form>
      <Styled.Title>{title}</Styled.Title>
      {Object.values(inputs).map((input) => (
        <AuthInput key={input.id} InputData={input} />
      ))}
      <AuthButton ButtonData={button} />
      <AuthToggle ToggleData={toggle} />
    </Styled.Form>
  );
};

export default AuthForm;
