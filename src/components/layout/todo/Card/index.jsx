import { useState } from 'react';
import { Styled } from './style';
import CardDisplay from '../CardDisplay';
import CardModify from '../CardModify';

const Card = ({ todoData }) => {
  const [modify, setModify] = useState(false);
  return (
    <Styled.Container>
      <CardDisplay todoData={todoData} modify={modify} setModify={setModify} />
      <CardModify todoData={todoData} modify={modify} setModify={setModify} />
    </Styled.Container>
  );
};

export default Card;
