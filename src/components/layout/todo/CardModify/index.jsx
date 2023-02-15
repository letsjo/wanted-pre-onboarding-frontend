import { updateTodoApi } from 'apis/todo';
import { Styled } from './style';
import Input from 'components/layout/public/Input';
import SmallButton from 'components/layout/public/SmallButton';
import { useState, useContext, useRef } from 'react';
import { dispatchContext } from 'context/TodoProvider';

const CardModify = ({ todoData, modify, setModify }) => {
  const dispatch = useContext(dispatchContext);
  const inputRef = useRef();

  const [modifyTodo, setModifyTodo] = useState(todoData.todo);

  const handleUpdate = () => {
    updateTodoApi({
      id: todoData.id,
      todo: modifyTodo,
      isCompleted: todoData.isCompleted,
    })
      .then((res) => {
        dispatch({ type: 'UPDATE', payload: res.data });
        setModify(false);
        alert('할 일이 수정되었습니다.');
      })
      .catch(() => {
        setModify(false);
        inputRef.current.value = todoData.todo;
        alert('할 일 수정에 실패했습니다.');
      });
  };

  const handleCancel = () => {
    inputRef.current.value = todoData.todo;
    setModify(false);
  };

  const onChangeModify = (e) => {
    setModifyTodo(e.target.value);
  };

  return (
    <Styled.ModifyWrap style={{ display: modify ? 'flex' : 'none' }}>
      <Input
        InputData={{
          type: 'text',
          testId: 'modify-input',
          placeholder: '할 일을 적어주세요.',
          onChange: onChangeModify,
          defaultValue: modifyTodo,
          inputRef: inputRef,
        }}
      />
      <SmallButton
        ButtonData={{
          text: '제출',
          testId: 'submit-button',
          handleClick: handleUpdate,
        }}
      />
      <SmallButton
        ButtonData={{
          text: '취소',
          testId: 'cancel-button',
          handleClick: handleCancel,
        }}
      />
    </Styled.ModifyWrap>
  );
};

export default CardModify;
