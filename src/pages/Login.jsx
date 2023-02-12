import { useState } from 'react';
import styled from 'styled-components';
import Form from 'components/layout/sign/Form';

import { loginData } from 'data/loginData';
import {
  EmailValidation,
  PasswordValidation,
} from 'components/feature/validation';
import { signInApi } from 'apis/sign';
import { useNavigate } from 'react-router-dom';
import useRedirect from 'hooks/useRedirect';

const Container = styled.div`
  position: relative;
  width: 450px;
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
    signInApi(userData)
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        alert('로그인에 성공하였습니다.');
        navigate('/todo');
      })
      .catch(() => {
        alert('로그인 실패! 로그인 정보를 확인해주세요.');
      });
  };

  loginData.inputs['email'].onChange = onChangeEmail;
  loginData.inputs['password'].onChange = onChangePassword;
  loginData.buttonData.userData = userData;
  loginData.buttonData.handleClick = handleClick;

  return (
    <Container>
      <Form data={loginData} />
    </Container>
  );
};

export default Login;
