export const increaseCounter = (amount) => {
  return {
    type: "INCREASE_COUNTER",
    payload: amount,
  };
};

export const decreaseCounter = (amount) => {
  return {
    type: "DECREASE_COUNTER",
    payload: amount,
  };
};
