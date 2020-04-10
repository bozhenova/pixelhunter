import Application from './application';

const SERVER_URL = 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter';
const DEFAULT_NAME = 'john';
const APP_ID = 910246;

const checkStatus = response => {
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
      const response = await fetch(`${SERVER_URL}/questions`);
      const data = await checkStatus(response).json();
      Application.gameData = data;
      Application.showIntro();
    } catch (e) {
      Application.showError(e);
    }
  }

  static saveResults(model, name = DEFAULT_NAME) {
    const answers = model.state.answers;
    const lives = model.state.lives;
    const result = model.finalScore;
    debugger;
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

  static async loadResults(name = DEFAULT_NAME) {
    const response = await fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`);
    const data = await checkStatus(response);
    return data.json();
  }
}

