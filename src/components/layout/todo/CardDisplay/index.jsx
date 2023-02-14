import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';
import { deleteTodoApi, updateTodoApi } from 'apis/todo';
import { useState } from 'react';

const CardDisplay = ({ todoData, modify, setModify }) => {
  const [todo, setTodo] = useState({ ...todoData });

  const handleModify = () => {
    setModify(true);
  };

  const handleIsCompleted = (e) => {
    updateTodoApi({
      id: todoData.id,
      todo: todoData.todo,
      isCompleted: e.target.checked,
    })
      .then(() => {
        setTodo({ ...todo, isCompleted: e.target.checked });
        e.target.checked
          ? alert(`[${todoData.todo}] 를 완료했습니다.`)
          : alert(`[${todoData.todo}] 를 시작해주세요!`);
      })
      .catch((error) => {
        e.target.checked = todo.isCompleted;
        alert(
          `완료 처리를 실패하였습니다. \nERROR : ${error.response.data.message}`,
        );
      });
  };

  const handleDelete = () => {
    deleteTodoApi({ id: todoData.id })
      .then(() => {
        alert('할 일이 삭제되었습니다.');
      })
      .catch((error) => {
        alert(
          `삭제 처리를 실패하였습니다.\nERROR : ${error.response.data.message}`,
        );
      });
  };

  return (
    <Styled.DisplayWrap style={{ display: modify ? 'none' : 'flex' }}>
      <Styled.CheckBox
        type='checkbox'
        defaultChecked={todo.isCompleted}
        onChange={(e) => handleIsCompleted(e)}
      />
      <Styled.TodoTitle>{todo.todo}</Styled.TodoTitle>
      <SmallButton ButtonData={{ text: '수정', handleClick: handleModify }} />
      <SmallButton ButtonData={{ text: '삭제', handleClick: handleDelete }} />
    </Styled.DisplayWrap>
  );
};

export default CardDisplay;
