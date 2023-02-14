import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signUpApi } from 'apis/sign';
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

const Join = () => {
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

  const handleSignUp = (e, userData) => {
    e.preventDefault();
    if (
      Validator.isValidEmail(userData.email) &&
      Validator.isValidPassword(userData.password)
    ) {
      signUpApi(userData)
        .then(() => {
          handleSuccess();
        })
        .catch(() => {
          handleError(Message.process.fail);
        });
    }
  };

  const handleSuccess = () => {
    alert(Message.process.success);
    navigate('/signin');
  };

  const joinData = {
    title: '회원가입',
    inputs: {
      email: {
        id: 1,
        type: 'text',
        placeholder: '이메일',
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
      text: '가입하기',
      testId: 'signup-button',
      userData: userData,
      handleClick: handleSignUp,
    },
    toggleData: {
      text: '이미 회원이신가요? 로그인',
      handleNavigate: '/signin',
    },
  };

  return (
    <Container>
      <Form data={joinData} />
    </Container>
  );
};

export default Join;
