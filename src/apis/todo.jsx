import { userClient } from 'apis/userClient';

export const getTodoApi = async () => {
  return userClient.get('/todos');
};

export const createTodoApi = async ({ todo }) => {
  return userClient.post('/todos', { todo });
};

export const updateTodoApi = async ({ id, todo, isCompleted }) => {
  return userClient.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async ({ id }) => {
  return userClient.delete(`/todos/${id}`);
};
