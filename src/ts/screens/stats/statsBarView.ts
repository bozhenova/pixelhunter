import AbstractView from "../../../abstractView";
import { GAME_SETTINGS } from "../../data/data";

export default class StatsBarView extends AbstractView {
  constructor(public state: object) {
    super();
  }

  get template() {
    const resultTemplate = (answer: object) =>
      `<li class="stats__result stats__result--${answer.type}"></li>`;

    return `<ul class="stats">
    ${[
        ...this.state.answers.map(resultTemplate),
        ...new Array(GAME_SETTINGS.maxLevel - this.state.answers.length).fill(
          `<li class="stats__result stats__result--unknown"></li>`
        ),
      ].join(``)}
  </ul>`;
  }
}
