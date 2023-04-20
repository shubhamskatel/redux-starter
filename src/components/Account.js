import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementFunc,
  incrementByAmountFunc,
  incrementFunc,
  getUserFunc,
} from "../actions";

function Account() {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={() => dispatch(incrementFunc())}>Increment +</button>
        <button onClick={() => dispatch(decrementFunc())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmountFunc(value))}>
          Increment By {value} +
        </button>
        <button onClick={() => dispatch(getUserFunc(1))}>Init Account</button>
      </div>
    </div>
  );
}

export default Account;
