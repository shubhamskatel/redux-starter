import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// Name constants
// const init = "accountReducer/init";
const increment = "accountReducer/increment";
const decrement = "accountReducer/decrement";
const incrementByAmount = "accountReducer/incrementByAmount";
const getUserPending = "accountReducer/getUserPending";
const getUserFulfilled = "accountReducer/getUserFulfilled";
const getUserRejected = "accountReducer/getUserRejected";
const incrementBonus = "bonusReducer/increment";

// Store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

// Reducer
function accountReducer(state = { amount: 1 }, action) {
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

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incrementBonus:
      return { points: state.points + 1 };

    default:
      return state;
  }
}

// Action creator
function getUserFunc(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserPendingFunction());

      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);

      dispatch(getUserFulfilledFunction(data.amount));
    } catch (error) {
      dispatch(getUserRejectedFunction(error.message));
    }
  };
}

// function initFunc(value) {
//   return { type: init, payload: value };
// }

function getUserPendingFunction() {
  return { type: getUserPending };
}

function getUserFulfilledFunction(value) {
  return { type: getUserFulfilled, payload: value };
}

function getUserRejectedFunction(error) {
  return { type: getUserRejected, error: error };
}

function incrementFunc() {
  return { type: increment };
}

function decrementFunc() {
  return { type: decrement };
}

function incrementByAmountFunc(value) {
  return { type: incrementByAmount, payload: value };
}

function incrementBonusFunc() {
  return { type: incrementBonus };
}

// global state
// console.log(store.getState());

// async function getUser() {
//   const { data } = await axios.get("http://localhost:3000/accounts/1");
//   return { type: init, payload: data.amount };
// }

// getUser();

// Interval
setInterval(() => {
  store.dispatch(getUserFunc(1));
  // store.dispatch(incrementBonusFunc());
}, 2000);
