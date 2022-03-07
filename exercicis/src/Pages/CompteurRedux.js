import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  clear,
} from "./redux/actions/counterActions";
export default function CompteurRedux() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatch = useDispatch();
  let cssButton =
    "bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-[177px] h-[100px]";
  return (
    <div className="improvisare">
      <header className="app-header">
        <p>{count}</p>
        <button
          className={cssButton}
          onClick={() => dispatch(increaseCounter(1))}
        >
          increase 1
        </button>
        <button
          className={cssButton}
          onClick={() => dispatch(increaseCounter(5))}
        >
          increase 5
        </button>
        <button
          className={cssButton}
          onClick={() => dispatch(decreaseCounter(1))}
        >
          decrease 1
        </button>
        <button
          className={cssButton}
          onClick={() => dispatch(decreaseCounter(5))}
        >
          decrease 5
        </button>
        <button className={cssButton} onClick={() => dispatch(clear())}>
          CLEAR
        </button>
      </header>
    </div>
  );
}
