import { Styled } from './style';

const Input = ({ InputData }) => {
  const { type, placeholder, testId, onChange, autoComplete } = InputData;
  return (
    <Styled.Input
      data-testid={testId}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
