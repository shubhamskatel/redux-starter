import { useDispatch, useSelector } from "react-redux";
import { incrementBonusFunc } from "../actions";

function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={() => dispatch(incrementBonusFunc())}>
          Increment +
        </button>
      </div>
    </div>
  );
}

export default Bonus;
