import Input from 'components/layout/public/Input';
import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';
import { useState } from 'react';
import { createTodoApi } from 'apis/todo';

const CreateCard = () => {
  const [todo, setTodo] = useState('');

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleCreate = ({ e }) => {
    console.log(e);
    e.preventDefault();
    if (todo.trim().length <= 0) return alert('공백은 추가 할 수 없습니다.');
    if (typeof todo !== 'string') return alert('문자형만 추가할 수 있습니다.');
    createTodoApi({ todo })
      .then(() => {
        setTodo('');
        alert('할 일이 추가되었습니다.');
      })
      .catch((error) => {
        alert(
          `추가에 실패하였습니다. \nERROR : ${error.response.data.message}`,
        );
      });
  };

  return (
    <Styled.Container>
      <Input
        InputData={{
          testId: 'new-todo-input',
          type: 'text',
          placeholder: '할 일을 적어주세요.',
          defaultValue: todo,
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
