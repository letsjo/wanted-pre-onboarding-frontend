import { useEffect, useContext } from 'react';
import Card from '../Card';
import { Styled } from './style';
import { getTodoApi } from 'apis/todo';
import { todoContext, dispatchContext } from 'context/TodoProvider';
import { handleError } from 'utils/handleError';

const ListSection = () => {
  const todoList = useContext(todoContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const getTodoList = () => {
      getTodoApi()
        .then((res) => {
          dispatch({ type: 'GET', payload: res.data });
        })
        .catch((error) => {
          handleError(error);
        });
    };
    getTodoList();
  }, [dispatch]);

  return (
    <Styled.Container>
      {todoList &&
        todoList.map((todoData) => (
          <Card key={todoData.id} todoData={todoData} />
        ))}
    </Styled.Container>
  );
};

export default ListSection;
