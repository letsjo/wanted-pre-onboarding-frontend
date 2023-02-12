import { getTodoApi } from 'apis/todo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useRedirect from 'hooks/useRedirect';
import Header from 'components/layout/todo/Header';
import CreateSection from 'components/layout/todo/CreateSection';
import ListSection from 'components/layout/todo/ListSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: 700px;
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

  return (
    <Container>
      <Header />
      <CreateSection />
      <ListSection />
    </Container>
  );
};

export default Todo;
