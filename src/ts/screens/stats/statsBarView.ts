import AbstractView from "../../../abstractView";
import { GAME_SETTINGS, State } from "../../data/data";

export default class StatsBarView extends AbstractView {
  constructor(public state: State) {
    super();
  }

  get template() {
    const resultTemplate = (answer: any) =>
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
