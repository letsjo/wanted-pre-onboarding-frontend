import { userClient } from 'apis/userClient';

export const getTodoApi = () => {
  return userClient.get('/todos');
};

export const createTodoApi = ({ todo }) => {
  return userClient.post('/todos', { todo });
};

export const updateTodoApi = ({ id, todo, isCompleted }) => {
  return userClient.put(`/todos/${id}`, { todo, isCompleted });
};

export const isCompletedApi = ({ id, isCompleted }) => {
  return userClient.patch(`/todos/${id}`, { isCompleted });
};

export const deleteTodoApi = ({ id }) => {
  return userClient.delete(`/todos/${id}`);
};
