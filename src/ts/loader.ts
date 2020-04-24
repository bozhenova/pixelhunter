import Application from './application';
import { GameModel } from './gameModel';
import { Data } from './data/data';

const SERVER_URL: string = 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter';
const DEFAULT_NAME: string = 'john';
const APP_ID: string = '910246';

const checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status} (${response.statusText})`);
  }
};

export default class Loader {
  static async loadData() {
    Application.showLoader();
    try {
      const response: Response = await fetch(`${SERVER_URL}/questions`);
      const data = await checkStatus(response).json();
      Application._gameData = data;
      Application.showIntro();
    } catch (e) {
      Application.showError(e);
    }
  }

  static saveResults(model: GameModel, name: string = DEFAULT_NAME) {
    const answers: Data["answers"] = model.state.answers;
    const lives: Data["lives"] = model.state.lives;
    const result: Data["result"] = model.finalScore;
    const serverData = Object.assign({ name }, { answers }, { lives }, { result });
    const postSettings = {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(serverData)
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, postSettings);
  }

  static async loadResults(name: string = DEFAULT_NAME) {
    const response: Response = await fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`);
    const data = await checkStatus(response);
    return data.json();
  }
}
