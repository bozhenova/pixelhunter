import IntroScreen from './ts/screens/intro/introScreen';
import GreetingScreen from './ts/screens/greeting/greetingScreen';
import RulesScreen from './ts/screens/rules/rulesScreen';
import GameScreen from './ts/screens/game/gameScreen';
import ModalScreen from './ts/screens/modal/modalScreen';
import StatsScreen from './ts/screens/stats/statsScreen';
import LoaderScreen from './ts/screens/loader/loaderScreen';
import ErrorScreen from './ts/screens/error/errorScreen';
import { DEBUG } from './ts/data/data';
import Loader from './loader';
import GameModel from './gameModel';

const mainContent = document.querySelector(`#main`);

const renderScreen = (screenElement: HTMLElement) => {
  if (!screenElement.matches('.modal')) {
    mainContent.innerHTML = ``;
  }
  mainContent.append(screenElement);
};

type Model = { level: number, lives: number, result: number, answers: string[] };

export default class Application {
  private _gameData: object
  element: HTMLElement
  model: object

  static start(): void {
    Loader.loadData();
  }

  static set gameData(data: object) {
    this._gameData = data;
  }

  static get gameData(): object {
    return this._gameData;
  }

  static showLoader(): void {
    const loader = new LoaderScreen();
    renderScreen(loader.element);
  }

  static showIntro(): void {
    const intro = new IntroScreen();
    intro.changeScreen();
    renderScreen(intro.element);
  }

  static showGreeting(): void {
    const greeting = new GreetingScreen();
    greeting.changeScreen();
    renderScreen(greeting.element);
  }

  static showRules(): void {
    const rules = new RulesScreen();
    rules.changeScreen();
    renderScreen(rules.element);
  }

  static showGame(playerName: string): void {
    DEBUG.state = (playerName === `debug`) ? true : false;
    const model: Model = new GameModel(this.gameData, playerName);
    const gameScreen = new GameScreen(model);
    renderScreen(gameScreen.root);
    gameScreen.startGame();
  }

  static async showStats() {
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

  static showModal(): void {
    const modal = new ModalScreen();
    modal.changeScreen();
    renderScreen(modal.element);
  }

  static closeModal(): void {
    mainContent.querySelector('.modal').remove();
  }

  static showError(e: object): void {
    const error = new ErrorScreen(e);
    renderScreen(error.element);
  }

}
