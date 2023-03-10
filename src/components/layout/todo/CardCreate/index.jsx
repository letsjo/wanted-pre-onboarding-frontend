import Input from 'components/layout/public/Input';
import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';
import { useContext, useRef, useState } from 'react';
import { createTodoApi } from 'apis/todo';
import { dispatchContext } from 'context/TodoProvider';
import { handleError } from 'utils/handleError';

const CardCreate = () => {
  const dispatch = useContext(dispatchContext);
  const inputRef = useRef();

  const [todo, setTodo] = useState('');

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleCreate = ({ e }) => {
    e.preventDefault();
    if (todo.trim().length <= 0)
      return handleError('공백은 추가 할 수 없습니다.');
    if (typeof todo !== 'string')
      return handleError('문자형만 추가할 수 있습니다.');
    createTodoApi({ todo })
      .then((res) => {
        inputRef.current.value = '';
        dispatch({ type: 'CREATE', payload: res.data });
        alert('할 일이 추가되었습니다.');
      })
      .catch((error) => {
        handleError(error);
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
          inputRef: inputRef,
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

export default CardCreate;
