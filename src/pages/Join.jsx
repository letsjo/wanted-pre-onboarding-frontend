import React from 'react';
import styled from 'styled-components';

import AuthForm from 'components/public/AuthForm';

import { joinData } from 'data/joinData';

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Join = () => {
  return (
    <Container>
      <AuthForm data={joinData} />
    </Container>
  );
};

export default Join;
