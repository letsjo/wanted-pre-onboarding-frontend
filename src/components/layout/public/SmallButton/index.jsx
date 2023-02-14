import { Styled } from './style';

const SmallButton = ({ ButtonData }) => {
  const { text, testId, handleClick, data } = ButtonData;
  return (
    <Styled.Button
      data-testid={testId}
      onClick={(e) => handleClick({ e, data })}
    >
      {text}
    </Styled.Button>
  );
};

export default SmallButton;
