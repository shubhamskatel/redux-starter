import {
  increment,
  decrement,
  incrementByAmount,
  getUserPending,
  getUserFulfilled,
  getUserRejected,
} from "../actions";

// Reducer
export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getUserPending:
      return { ...state, pending: true };

    case getUserFulfilled:
      return { amount: action.payload, pending: false };

    case getUserRejected:
      return { ...state, error: action.error, pending: false };

    case increment:
      return { amount: state.amount + 1 };

    case decrement:
      return { amount: state.amount - 1 };

    case incrementByAmount:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}
