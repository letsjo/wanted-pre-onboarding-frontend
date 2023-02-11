import React from 'react';
import styled from 'styled-components';

import AuthInput from 'components/public/AuthInput';
import AuthButton from 'components/public/AuthButton';
import AuthToggle from 'components/public/AuthToggle';

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

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
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid #333;
    font-size: 16px;
  }
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const Join = () => {
  return (
    <Container>
      <LoginForm>
        <LoginTitle>회원가입</LoginTitle>
        <AuthInput type='email' placeholder='이메일' id='email-input' />
        <AuthInput type='password' placeholder='비밀번호' id='password-input' />
        <AuthButton text='가입하기' id='signup-button' />
        <AuthToggle text='이미 회원이신가요? 로그인' />
      </LoginForm>
    </Container>
  );
};

export default Join;
