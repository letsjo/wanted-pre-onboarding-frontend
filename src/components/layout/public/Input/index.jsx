import { Styled } from './style';

const Input = ({ InputData }) => {
  const { type, placeholder, testId, onChange, autoComplete, value } =
    InputData;
  return (
    <Styled.Input
      data-testid={testId}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
