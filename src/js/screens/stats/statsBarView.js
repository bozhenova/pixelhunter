import AbstractView from '../../../abstractView.js';
import { GAME_SETTINGS } from '../../data/data.js';

export default class StatsBarView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const resultTemplate = answer => `<li class="stats__result stats__result--${answer.type}"></li>`;

    return `<ul class="stats">
    ${[...this.state.answers.map(resultTemplate), ...new Array(GAME_SETTINGS.maxLevel - this.state.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`)].join(``)}
  </ul>`;
  }

}