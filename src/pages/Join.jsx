import { useState } from 'react';
import styled from 'styled-components';

import AuthForm from 'components/layout/sign/AuthForm';

import { joinData } from 'data/joinData';
import {
  EmailValidation,
  PasswordValidation,
} from 'components/feature/validation';
import { signUpApi } from 'apis/sign';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Join = () => {
  const navigate = useNavigate();
  const [userData, setUserDate] = useState({
    email: '',
    password: '',
  });

  const onChangeEmail = (e) => {
    if (EmailValidation(e.target.value))
      return setUserDate({ ...userData, email: e.target.value });
    setUserDate({ ...userData, email: '' });
  };

  const onChangePassword = (e) => {
    if (PasswordValidation(e.target.value))
      return setUserDate({ ...userData, password: e.target.value });
    setUserDate({ ...userData, password: '' });
  };

  const handleClick = (e, userData) => {
    e.preventDefault();
    console.log(userData);
    signUpApi(userData)
      .then(() => {
        e.target.reset();
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  joinData.inputs['email'].onChange = onChangeEmail;
  joinData.inputs['password'].onChange = onChangePassword;
  joinData.button.userData = userData;
  joinData.button.handleClick = handleClick;

  return (
    <Container>
      <AuthForm data={joinData} />
    </Container>
  );
};

export default Join;
