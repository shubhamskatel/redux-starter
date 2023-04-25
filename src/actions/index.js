import axios from "axios";

// export const init = "accountReducer/init";
export const increment = "accountReducer/increment";
export const decrement = "accountReducer/decrement";
export const incrementByAmount = "accountReducer/incrementByAmount";
export const getUserPending = "accountReducer/getUserPending";
export const getUserFulfilled = "accountReducer/getUserFulfilled";
export const getUserRejected = "accountReducer/getUserRejected";
export const incrementBonus = "bonusReducer/increment";

// Action creator
export function getUserFunc(id) {
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

export function getUserPendingFunction() {
  return { type: getUserPending };
}

export function getUserFulfilledFunction(value) {
  return { type: getUserFulfilled, payload: value };
}

export function getUserRejectedFunction(error) {
  return { type: getUserRejected, error: error };
}

// export function init() {
//   return { type: init };
// }

export function incrementFunc() {
  return { type: increment };
}

export function decrementFunc() {
  return { type: decrement };
}

export function incrementByAmountFunc(value) {
  return { type: incrementByAmount, payload: value };
}

export function incrementBonusFunc() {
  return { type: incrementBonus };
}
