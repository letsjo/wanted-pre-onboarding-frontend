import { useEffect, useState } from 'react';
import { Styled } from './style';

const AuthButton = ({ text, id, data }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (Object.values(data).every((value) => value !== ''))
      return setActive(true);
    setActive(false);
  }, [data]);
  return (
    <Styled.Button data-testid={id} disabled={active ? false : true}>
      {text}
    </Styled.Button>
  );
};

export default AuthButton;
