import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';

const CardDisplay = ({ modify }) => {
  return (
    <Styled.DisplayWrap style={{ display: modify ? 'none' : 'flex' }}>
      <Styled.CheckBox type='checkbox' />
      <Styled.TodoTitle>할 일 적기</Styled.TodoTitle>
      <SmallButton ButtonData={{ text: '수정' }} />
      <SmallButton ButtonData={{ text: '삭제' }} />
    </Styled.DisplayWrap>
  );
};

export default CardDisplay;
