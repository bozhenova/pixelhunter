import IntroScreen from './js/screens/intro/introScreen';
import GreetingScreen from './js/screens/greeting/greetingScreen';
import RulesScreen from './js/screens/rules/rulesScreen';
import GameScreen from './js/screens/game/gameScreen';
import ModalScreen from './js/screens/modal/modalScreen';
import StatsScreen from './js/screens/stats/statsScreen';
import LoaderScreen from './js/screens/loader/loaderScreen';
import ErrorScreen from './js/screens/error/errorScreen';
import { DEBUG } from './js/data/data';
import Loader from './loader';
import GameModel from './gameModel';

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
