import Input from 'components/layout/public/Input';
import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';

const CreateSection = ({ text }) => {
  return (
    <Styled.Container>
      <Input
        InputData={{
          testId: 'new-todo-input',
          type: 'text',
          placeholder: '할 일을 적어주세요.',
        }}
      />
      <SmallButton
        ButtonData={{
          text: '추가',
          testId: 'new-todo-add-button',
        }}
      />
    </Styled.Container>
  );
};

export default CreateSection;
