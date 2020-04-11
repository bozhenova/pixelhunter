const setTimer = (state: object, settings: object) => {
  const second = 1;

  return {
    ...state, time: (state.time > settings.endTime)
      ? state.time - second : settings.endTime
  };
};

export default setTimer;