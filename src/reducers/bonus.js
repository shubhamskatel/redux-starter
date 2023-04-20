import { incrementBonus } from "../actions";

export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incrementBonus:
      return { points: state.points + 1 };

    default:
      return state;
  }
}
