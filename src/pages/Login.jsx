import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signInApi } from 'apis/sign';
import useRedirect from 'hooks/useRedirect';
import { handleError } from 'utils/handleError';

import Form from 'components/layout/sign/Form';
import Validator from 'utils/Validator';
import { Message } from 'constants/Message';

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 450px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Login = () => {
  useRedirect();
  const navigate = useNavigate();
  const [userData, setUserDate] = useState({
    email: '',
    password: '',
  });

  const onChangeEmail = (e) => {
    setUserDate({ ...userData, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setUserDate({ ...userData, password: e.target.value });
  };

  const handleSignIn = (e, userData) => {
    e.preventDefault();
    if (
      Validator.isValidEmail(userData.email) &&
      Validator.isValidPassword(userData.password)
    ) {
      signInApi(userData)
        .then((res) => {
          handleSuccess(res);
        })
        .catch(() => {
          handleError(Message.process.fail);
        });
    }
  };

  const handleSuccess = (res) => {
    localStorage.setItem('access_token', res.data.access_token);
    alert(Message.process.success);
    navigate('/todo');
  };

  const loginData = {
    title: "TODAY'S TO DO",
    inputs: {
      email: {
        id: 1,
        type: 'text',
        placeholder: '아이디 또는 이메일',
        testId: 'email-input',
        onChange: onChangeEmail,
      },
      password: {
        id: 2,
        type: 'password',
        placeholder: '비밀번호',
        testId: 'password-input',
        autoComplete: 'off',
        onChange: onChangePassword,
      },
    },
    buttonData: {
      text: '로그인',
      testId: 'signin-button',
      userData: userData,
      handleClick: handleSignIn,
    },
    toggleData: {
      text: '아직 회원이 아니신가요? 회원가입',
      handleNavigate: '/signup',
    },
  };

  return (
    <Container>
      <Form data={loginData} />
    </Container>
  );
};

export default Login;
