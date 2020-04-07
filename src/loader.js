import Application from './application.js';


export default class Loader {
  static async loadData(url) {
    Application.showLoader();
    try {
      const response = await fetch(url);
      const data = await response.json();
      Application.gameData = data;
      Application.showIntro();
    } catch (e) {
      Application.showError(e);
    }
  }


  static loadResults(name) { }

  static saveResults(data, name) { }



}