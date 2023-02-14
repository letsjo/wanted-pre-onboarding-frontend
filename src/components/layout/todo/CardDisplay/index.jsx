import { Styled } from './style';
import SmallButton from 'components/layout/public/SmallButton';
import { deleteTodoApi } from 'apis/todo';

const CardDisplay = ({ todoData, modify, setModify }) => {
  const handleModify = () => {
    setModify(true);
  };

  const handleDelete = ({ e }) => {
    e.preventDefault();
    deleteTodoApi({ id: todoData.id })
      .then((res) => {
        console.log(res);
        alert('할 일이 삭제되었습니다.');
      })
      .catch((error) => {
        console.log(error);
        alert('할 일 삭제에 실패했습니다.');
      });
  };

  return (
    <Styled.DisplayWrap style={{ display: modify ? 'none' : 'flex' }}>
      <Styled.CheckBox type='checkbox' efaultChecked={todoData.isCompleted} />
      <Styled.TodoTitle>{todoData.todo}</Styled.TodoTitle>
      <SmallButton ButtonData={{ text: '수정', handleClick: handleModify }} />
      <SmallButton ButtonData={{ text: '삭제', handleClick: handleDelete }} />
    </Styled.DisplayWrap>
  );
};

export default CardDisplay;
