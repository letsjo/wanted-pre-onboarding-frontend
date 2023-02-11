import React from 'react';
import { Styled } from './style';

import AuthInput from '../AuthInput';
import AuthButton from '../AuthButton';
import AuthToggle from '../AuthToggle';

const AuthForm = ({ data }) => {
  const { title, inputs, button, toggle } = data;
  return (
    <Styled.LoginForm>
      <Styled.LoginTitle>{title}</Styled.LoginTitle>
      {inputs.map((input) => (
        <AuthInput
          key={input.id}
          type={input.type}
          placeholder={input.placeholder}
          id={input.testId}
        />
      ))}
      <AuthButton text={button.text} id={button.testId} />
      <AuthToggle text={toggle.text} handleNavigate={toggle.handleNavigate} />
    </Styled.LoginForm>
  );
};

export default AuthForm;
