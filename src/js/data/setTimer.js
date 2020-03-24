const setTimer = (state, settings) => {
  const second = 1;

  return {
    ...state, time: (state.time > settings.endTime)
      ? state.time - second : settings.endTime
  };
};

export default setTimer;