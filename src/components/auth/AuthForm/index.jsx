import React from 'react';
import styled from 'styled-components';
import AuthInput from '../AuthInput';
import AuthButton from '../AuthButton';
import AuthToggle from '../AuthToggle';

const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 60px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const AuthForm = ({ data }) => {
  const { title, inputs, button, toggle } = data;
  return (
    <LoginForm>
      <LoginTitle>{title}</LoginTitle>
      {inputs.map((input) => (
        <AuthInput
          key={input.id}
          type={input.type}
          placeholder={input.placeholder}
          id={input.testId}
        />
      ))}
      <AuthButton text={button.text} id={button.testId} />
      <AuthToggle text={toggle.text} />
    </LoginForm>
  );
};

export default AuthForm;
