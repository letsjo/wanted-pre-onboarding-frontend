import { Styled } from './style';

const SmallButton = ({ ButtonData }) => {
  const { text, testId, handleClick } = ButtonData;
  return (
    <Styled.Button data-testid={testId} onClick={(e) => handleClick(e)}>
      {text}
    </Styled.Button>
  );
};

export default SmallButton;
