import React from 'react';
import styled from 'styled-components';
import AuthButton from 'components/public/AuthButton';
import AuthInput from 'components/public/AuthInput';
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
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const Toggle = styled.div`
  position: absolute;
  bottom: 50px;
  right: 40px;
  color: #333;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <LoginTitle>로그인</LoginTitle>
        <AuthInput
          type='text'
          placeholder='아이디 또는 이메일'
          id='email-input'
        />
        <AuthInput type='password' placeholder='비밀번호' id='password-input' />
        <AuthButton text={'로그인'} id='signin-button' />
        <AuthToggle text={'아직 회원이 아니신가요? 회원가입'} />
      </LoginForm>
    </Container>
  );
};

export default Login;
