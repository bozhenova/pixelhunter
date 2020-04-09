import IntroScreen from './js/screens/intro/introScreen.js';
import GreetingScreen from './js/screens/greeting/greetingScreen.js';
import RulesScreen from './js/screens/rules/rulesScreen.js';
import GameScreen from './js/screens/game/gameScreen.js';
import ModalScreen from './js/screens/modal/modalScreen.js';
import StatsScreen from './js/screens/stats/statsScreen.js';
import LoaderScreen from './js/screens/loader/loaderScreen.js';
import ErrorScreen from './js/screens/error/errorScreen.js';
import { DEBUG } from './js/data/data';
import Loader from './loader.js';
import GameModel from './gameModel.js';

const mainContent = document.querySelector(`#main`);

const renderScreen = (screenElement) => {
  if (!screenElement.matches('.modal')) {
    mainContent.innerHTML = ``;
  }
  mainContent.append(screenElement);
};


export default class Application {

  static start() {
    Loader.loadData();
  }

  static set gameData(data) {
    this._gameData = data;
  }

  static get gameData() {
    return this._gameData;
  }

  static showLoader() {
    const loader = new LoaderScreen();
    renderScreen(loader.element);
  }

  static showIntro() {
    const intro = new IntroScreen();
    intro.changeScreen();
    renderScreen(intro.element);
  }

  static showGreeting() {
    const greeting = new GreetingScreen();
    greeting.changeScreen();
    renderScreen(greeting.element);
  }

  static showRules() {
    const rules = new RulesScreen();
    rules.changeScreen();
    renderScreen(rules.element);
  }

  static showGame(playerName) {
    DEBUG.state = (playerName === `debug`) ? true : false;
    const model = new GameModel(this.gameData, playerName);
    const gameScreen = new GameScreen(model);
    renderScreen(gameScreen.root);
    gameScreen.startGame();
  }

  static async showStats(model) {
    try {
      await Loader.saveResults(model, model.playerName);
      const loadedResults = await Loader.loadResults(model.playerName);
      const statistics = new StatsScreen(loadedResults);
      statistics.changeScreen();
      renderScreen(statistics.element);
    } catch (e) {
      Application.showError(e);
    }
  }

  static showModal() {
    const modal = new ModalScreen();
    modal.changeScreen();
    renderScreen(modal.element);
  }

  static closeModal() {
    mainContent.querySelector('.modal').remove();
  }

  static showError(e) {
    const error = new ErrorScreen(e);
    renderScreen(error.element);
  }

}
