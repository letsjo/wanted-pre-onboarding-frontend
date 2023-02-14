import { useEffect, useState } from 'react';
import Card from '../Card';
import { Styled } from './style';
import { getTodoApi } from 'apis/todo';

const ListSection = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getTodoList = () => {
      getTodoApi()
        .then((res) => {
          setTodoList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTodoList();
  }, []);

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
