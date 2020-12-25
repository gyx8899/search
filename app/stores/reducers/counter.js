import {INCREMENT, DECREMENT} from '../constants';

const initialState = {counter: 0};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
