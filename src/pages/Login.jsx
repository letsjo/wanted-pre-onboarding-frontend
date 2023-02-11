import React from 'react';
import styled from 'styled-components';
import AuthForm from 'components/auth/AuthForm';

import { loginData } from 'data/loginData';

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Login = () => {
  return (
    <Container>
      <AuthForm data={loginData} />
    </Container>
  );
};

export default Login;
