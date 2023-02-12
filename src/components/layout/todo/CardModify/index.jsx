import { Styled } from './style';
import Input from 'components/layout/public/Input';
import SmallButton from 'components/layout/public/SmallButton';

const CardModify = ({ modify }) => {
  return (
    <Styled.ModifyWrap style={{ display: modify ? 'flex' : 'none' }}>
      <Input InputData={{ type: 'text', placeholder: '할 일을 적어주세요.' }} />
      <SmallButton text={'작성'} />
    </Styled.ModifyWrap>
  );
};

export default CardModify;
