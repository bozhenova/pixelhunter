
const resize = (frame: object, image: object) => {

  const coefficient = image.width / image.height;

  const actualWidth = ((frame.width / coefficient) < frame.height)
    ? frame.width : frame.height * coefficient;

  const actualHeight = ((frame.width / coefficient) < frame.height)
    ? frame.width / coefficient : frame.height;

  return {
    width: actualWidth,
    height: actualHeight
  };
};

export default resize;