import Input from 'components/layout/public/Input';
import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';
import { useState } from 'react';
import { createTodoApi } from 'apis/todo';

const CreateCard = ({ text }) => {
  const [todo, setTodo] = useState('');

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleCreate = ({ e }) => {
    e.preventDefault();
    createTodoApi({ todo })
      .then((res) => {
        console.log(res);
        alert('할 일이 추가되었습니다.');
      })
      .catch((error) => {
        console.log(error);
        alert('할 일 추가에 실패했습니다.');
      });
  };

  return (
    <Styled.Container>
      <Input
        InputData={{
          testId: 'new-todo-input',
          type: 'text',
          placeholder: '할 일을 적어주세요.',
          onChange: onChangeTodo,
        }}
      />
      <SmallButton
        ButtonData={{
          text: '추가',
          testId: 'new-todo-add-button',
          handleClick: handleCreate,
        }}
      />
    </Styled.Container>
  );
};

export default CreateCard;
