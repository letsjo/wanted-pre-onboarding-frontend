import SmallButton from 'components/layout/public/SmallButton';
import { Styled } from './style';
import Input from 'components/layout/public/Input';

const Card = () => {
  return (
    <Styled.Container>
      <Styled.DisplayWrap>
        <Styled.CheckBox type='checkbox' />
        <Styled.TodoTitle>할 일 적기</Styled.TodoTitle>
        <SmallButton text='수정' />
        <SmallButton text='삭제' />
      </Styled.DisplayWrap>
      <Styled.ModifyWrap style={{ display: 'none' }}>
        <Input
          InputData={{ type: 'text', placeholder: '할 일을 적어주세요.' }}
        />
        <SmallButton text={'작성'} />
      </Styled.ModifyWrap>
    </Styled.Container>
  );
};

export default Card;
