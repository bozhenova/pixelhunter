const setTimer = (state) => {
  const second = 1;

  return {
    ...state, time: (state.time > 0)
      ? state.time - second : 0
  };
};

export default setTimer;