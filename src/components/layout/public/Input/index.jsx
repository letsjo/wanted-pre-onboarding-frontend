import { Styled } from './style';

const Input = ({ InputData }) => {
  const { type, placeholder, testId, onChange, autoComplete, defaultValue } =
    InputData;
  return (
    <Styled.Input
      data-testid={testId}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
