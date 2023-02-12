import { useEffect, useState } from 'react';
import { Styled } from './style';

const Button = ({ ButtonData }) => {
  const { text, testId, handleClick, userData } = ButtonData;
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (Object.values(userData).every((value) => value !== ''))
      return setActive(true);
    setActive(false);
  }, [userData]);
  return (
    <Styled.Button
      data-testid={testId}
      onClick={(e) => handleClick(e, userData)}
      disabled={active ? false : true}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;
