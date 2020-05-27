import { Sizes, GameData } from '../data/data';

export const resizeImage = (frame: Sizes, image: Sizes) => {
  let multiplier = 1;

  if (image.width > frame.width) {
    multiplier = frame.width / image.width;
  }

  if (image.height * multiplier > frame.height) {
    multiplier = frame.height / image.height;
  }

  return {
    width: Math.round(image.width * multiplier),
    height: Math.round(image.height * multiplier)
  };
};

export function preloadImages(questionsList: GameData[]) {

  const images = questionsList.reduce((result, current) => result.concat(current.answers.map((answer) => answer.image)), []);

  return Promise.all(images.map((image) => new Promise((resolve) => {
    const img = new Image();
    img.addEventListener(`load`, () => {
      image.size = resizeImage({
        width: image.width,
        height: image.height
      }, {
        width: img.width,
        height: img.height
      });

      resolve();
    });
    img.src = image.url;
  })));
}
