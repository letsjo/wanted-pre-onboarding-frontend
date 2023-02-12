import { useState } from 'react';
import styled from 'styled-components';
import AuthForm from 'components/layout/sign/AuthForm';

import { loginData } from 'data/loginData';
import {
  EmailValidation,
  PasswordValidation,
} from 'components/feature/validation';

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Login = () => {
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

  loginData.inputs['email'].onChange = onChangeEmail;
  loginData.inputs['password'].onChange = onChangePassword;
  loginData.button.data = userData;

  return (
    <Container>
      <AuthForm data={loginData} />
    </Container>
  );
};

export default Login;
