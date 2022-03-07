export const addList = (tarea) => {
  return {
    type: "ADD_LIST",
    payload: tarea,
  };
};
export const clearList = () => {
  return {
    type: "CLEAR_LIST",
  };
};

export const clearTask = (indice) => {
  return {
    type: "CLEAR_TASK",
    payload: indice,
  };
};

export const doneTask = (indice) => {
  return {
    type: "DONE_TASK",
    payload: indice,
  };
};

export const undoTask = (indice) => {
  return {
    type: "UNDO_TASK",
    payload: indice,
  };
};
