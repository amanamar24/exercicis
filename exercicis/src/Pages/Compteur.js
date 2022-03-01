import { useReducer } from "react";
export default function Compteur() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    // let newState;
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
    // return newState;
  }

  function Counter() {
    const [state, dispatch1] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch1({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch1({ type: "increment" })}>+</button>
      </>
    );
  }
  return Counter();
}
