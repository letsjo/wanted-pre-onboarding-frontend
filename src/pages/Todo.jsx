import { getTodoApi } from 'apis/todo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useRedirect from 'hooks/useRedirect';

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Todo = () => {
  useRedirect();

  const navigate = useNavigate();
  const [todoData, setTodoData] = useState();

  useEffect(() => {
    const getData = () => {
      getTodoApi()
        .then((res) => {
          setTodoData(res.data);
        })
        .catch(() => {
          navigate('/');
        });
    };
    getData();
  }, []);

  return <Container>Todo</Container>;
};

export default Todo;
