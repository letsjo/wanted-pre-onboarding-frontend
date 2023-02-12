import Input from 'components/layout/public/Input';
import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';

const CreateSection = ({ text }) => {
  return (
    <Styled.Container>
      <Input InputData={{ type: 'text', placeholder: '할 일을 적어주세요.' }} />
      <SmallButton text={'추가'} />
    </Styled.Container>
  );
};

export default CreateSection;
