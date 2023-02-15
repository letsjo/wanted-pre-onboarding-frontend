import styled from 'styled-components';

import useRedirect from 'hooks/useRedirect';
import Header from 'components/layout/todo/Header';
import CardCreate from 'components/layout/todo/CardCreate';
import ListSection from 'components/layout/todo/ListSection';

import TodoProvider from 'context/TodoProvider';

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

  return (
    <Container>
      <Header />
      <TodoProvider>
        <CardCreate />
        <ListSection />
      </TodoProvider>
    </Container>
  );
};

export default Todo;
