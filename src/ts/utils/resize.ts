
type Sizes = { width: number, height: number };

const resize = (frame: Sizes, image: Sizes) => {

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