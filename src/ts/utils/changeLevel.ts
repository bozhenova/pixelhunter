import { State } from '../data/data';

const changeLevel = (game: State, levelNumber: number, maxLevel: number) => {

  return { ...game, level: ++levelNumber };
};

export default changeLevel;