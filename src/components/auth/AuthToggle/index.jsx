import React from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  position: absolute;
  bottom: 50px;
  right: 40px;
  color: #333;
  cursor: pointer;
`;

const AuthToggle = ({ text, handleCallback }) => {
  return <Toggle onClick={handleCallback}>{text}</Toggle>;
};

export default AuthToggle;
