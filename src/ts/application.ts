import IntroScreen from './screens/intro/introScreen';
import GreetingScreen from './screens/greeting/greetingScreen';
import RulesScreen from './screens/rules/rulesScreen';
import GameScreen from './screens/game/gameScreen';
import ModalScreen from './screens/modal/modalScreen';
import StatsScreen from './screens/stats/statsScreen';
import LoaderScreen from './screens/loader/loaderScreen';
import ErrorScreen from './screens/error/errorScreen';
import { DEBUG, GameData } from './data/data';
import Loader from './loader';
import { GameModel } from './gameModel';

const mainContent = document.querySelector(`#main`);

const renderScreen = (screenElement: HTMLElement) => {
  if (!screenElement.matches('.modal')) {
    mainContent.innerHTML = ``;
  }
  mainContent.appendChild(screenElement);
};

export default class Application {
  static _gameData: GameData[];

  static start(): void {
    Loader.loadData();
  }

  static set gameData(data: GameData[]) {
    this._gameData = data;
  }

  static get gameData(): GameData[] {
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
    const model = new GameModel(this._gameData, playerName);
    const gameScreen = new GameScreen(model);
    renderScreen(gameScreen.root);
    gameScreen.startGame();
  }

  static async showStats(model: GameModel) {
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

  static showError(e: Error): void {
    const error: ErrorScreen = new ErrorScreen(e);
    renderScreen(error.element);
  }

}
