import React from 'react';
import { Styled } from './style';
import { useNavigate } from 'react-router-dom';

const AuthToggle = ({ text, handleNavigate }) => {
  const navigate = useNavigate();
  return (
    <Styled.Toggle onClick={() => navigate(handleNavigate)}>
      {text}
    </Styled.Toggle>
  );
};

export default AuthToggle;
