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
        <AuthInput
          key={input.id}
          id={input.testId}
          type={input.type}
          placeholder={input.placeholder}
          onChange={input.onChange}
        />
      ))}
      <AuthButton id={button.testId} text={button.text} data={button.data} />
      <AuthToggle text={toggle.text} handleNavigate={toggle.handleNavigate} />
    </Styled.Form>
  );
};

export default AuthForm;
