import { useState } from 'react';
import { Styled } from './style';
import CardDisplay from '../CardDisplay';
import CardModify from '../CardModify';

const Card = () => {
  const [modify, setModify] = useState(false);
  return (
    <Styled.Container>
      <CardDisplay modify={modify} setModify={setModify} />
      <CardModify modify={modify} setModify={setModify} />
    </Styled.Container>
  );
};

export default Card;
