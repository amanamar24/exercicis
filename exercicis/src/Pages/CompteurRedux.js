import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/actions/counterActions";
export default function CompteurRedux() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="improvisare">
      <header className="app-header">
        <p>{count}</p>
        <button onClick={() => dispatch(increaseCounter(1))}>
          increase Counter
        </button>
        <button onClick={() => dispatch(increaseCounter(5))}>
          increase Counter +5
        </button>
        <button onClick={() => dispatch(decreaseCounter(1))}>
          decrease Counter{" "}
        </button>
        <button onClick={() => dispatch(decreaseCounter(5))}>
          decrease Counter-5
        </button>
      </header>
    </div>
  );
}
