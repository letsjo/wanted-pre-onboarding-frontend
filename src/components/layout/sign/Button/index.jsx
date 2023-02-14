import { useEffect, useState } from 'react';
import { Styled } from './style';
import Validator from 'utils/Validator';

const Button = ({ ButtonData }) => {
  const { text, testId, handleClick, userData } = ButtonData;
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (
      Validator.hasEmailAtSign(userData.email) &&
      Validator.hasPasswordMinimumLength(userData.password)
    ) {
      return setActive(true);
    }

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
