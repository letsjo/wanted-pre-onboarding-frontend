import React from 'react';
import { Styled } from './style';

import Input from '../Input';
import Button from '../Button';
import Toggle from '../Toggle';

const Form = ({ data }) => {
  const { title, inputs, buttonData, toggleData } = data;
  return (
    <Styled.Form>
      <Styled.Title>{title}</Styled.Title>
      {Object.values(inputs).map((input) => (
        <Input key={input.id} InputData={input} />
      ))}
      <Button ButtonData={buttonData} />
      <Toggle ToggleData={toggleData} />
    </Styled.Form>
  );
};

export default Form;
