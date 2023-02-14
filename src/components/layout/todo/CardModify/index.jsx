import { updateTodoApi } from 'apis/todo';
import { Styled } from './style';
import Input from 'components/layout/public/Input';
import SmallButton from 'components/layout/public/SmallButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardModify = ({ todoData, modify, setModify }) => {
  const { id, todo, isCompleted } = todoData;
  const [modifyTodo, setModifyTodo] = useState(todo);
  const handleSubmit = () => {
    updateTodoApi({ id, todo: modifyTodo, isCompleted })
      .then((res) => {
        console.log(res);
        alert('할 일이 수정되었습니다.');
      })
      .catch((error) => {
        console.log(error);
        alert('할 일 수정에 실패했습니다.');
      });
  };

  const handleCancel = () => {
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
        }}
      />
      <SmallButton
        ButtonData={{
          text: '제출',
          testId: 'submit-button',
          handleClick: handleSubmit,
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
