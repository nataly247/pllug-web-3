import * as actionTypes from '../constants/actionTypes';

export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  text
});

// export const deleteTodo = (id) => ({
//   type: actionTypes.deleteTodo,
//   id
// });

// export const editTodo = (id, text) => ({
//   type: actionTypes.editTodo,
//   id,
//   text
// });

// export const completeTodo = (id) => ({
//   type: actionTypes.completeTodo,
//   id
// });

// export const completeAllTodo = () => ({
//   type: actionTypes.completeAllTodo
// });

// export const clearCompleted = () => ({
//   type: actionTypes.clearCompleted
// });

// export const setVisibilityFilter = (filter) => ({
//   type: actionTypes.clearCompleted,
//   filter
// });
