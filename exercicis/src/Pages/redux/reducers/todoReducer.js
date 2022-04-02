// const initalState = {
//   lista: ["redux", "react", "next"],
// };
// const todoReducer = (state = initalState, action) => {
//   let copy = [...state.lista];
//   switch (action.type) {
//     case "ADD_LIST":
//       copy.push(action.payload);
//       state.lista = [...copy];
//       return state;

//     default:
//       return state;
//   }
// };
const initalState = [
  { task: "redux", done: false },
  { task: "react", done: false },
  { task: "flux", done: false },
  { task: "vue", done: true },
  { task: "angular", done: true },
];
const todoReducer = (state = initalState, action) => {
  let copy = [...state];
  switch (action.type) {
    case "ADD_LIST":
      copy.push({ task: action.payload, done: false });
      return copy;
    case "CLEAR_TASK":
      copy.splice(action.payload, 1);
      return copy;
    case "DONE_TASK":
      copy[action.payload].done = true;
      return copy;
    case "UNDO_TASK":
      copy[action.payload].done = false;
      return copy;

    case "CLEAR_LIST":
      return [];

    default:
      return state;
  }
};
export default todoReducer;
