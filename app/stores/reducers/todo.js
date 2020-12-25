import {ADD_TODO, REMOVE_TODO} from '../constants';

const initialState = {todos: []};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat([action.index]),
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.splice(action.index, 1),
      };
    default:
      return state;
  }
}
