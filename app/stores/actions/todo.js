import {ADD_TODO, REMOVE_TODO} from '../constants';

export const addTodo = (todo) => ({type: ADD_TODO, todo});

export const removeTodo = (todoIndex) => ({type: REMOVE_TODO, todoIndex});
