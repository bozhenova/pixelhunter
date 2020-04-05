import AbstractView from '../../../abstractView.js';
import { GAME_SETTINGS } from '../../data/data.js';

export default class StatsView extends AbstractView {

  constructor(data, result) {
    super();
    this.data = data;
    this.result = result;
  }

  get template() {

    const speedBonusTemplate = (data, setting) => `
	<tr>
			<td></td>
			<td class="result__extra">Бонус за скорость:</td>
			<td class="result__extra"><span class="stats__result stats__result--fast">${data.filter(setting).length}</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">${data.filter(setting).length * GAME_SETTINGS.fastAnswerBonus}</td>
		</tr>`;

    const lifeBonusTemplate = (data) => `
    	<tr>
			<td></td>
			<td class="result__extra">Бонус за жизни:</td>
			<td class="result__extra"><span class="stats__result stats__result--alive">${data.lives}</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">${data.lives * GAME_SETTINGS.savedLifeBonus} </td>
		</tr>
    `;

    const slowFineTemplate = (data, setting) => `
 		<tr>
			<td></td>
			<td class="result__extra">Штраф за медлительность:</td>
			<td class="result__extra"><span class="stats__result stats__result--slow">${data.filter(setting).length}</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">-${data.filter(setting).length * GAME_SETTINGS.slowAnswerFine}</td>
		</tr>
 `;

    const resultTemplate = (data) => {
      const speedBonusFilter = value => value.time > GAME_SETTINGS.maxTime && value.result;
      const slowFineFilter = value => value.time < GAME_SETTINGS.minTime && value.result;
      const correctAnswerFilter = value => value.result;

      return `<td class="result__points">× 100</td>
			<td class="result__total">${data.answers.filter(correctAnswerFilter).length * GAME_SETTINGS.correctAnswerBonus}</td>
      ${data.answers.some(speedBonusFilter) ? speedBonusTemplate(data.answers, speedBonusFilter) : ``}
      ${lifeBonusTemplate(data)}
      ${data.answers.some(slowFineFilter) ? slowFineTemplate(data.answers, slowFineFilter) : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.result}</td>
      </tr>`;
    };


    const statsBarTemplate = data =>
      `<li class="stats__result stats__result--${data.type}" ></li>`;

    return `<section class="result">
        <h2 class="result__title">${(this.result === GAME_SETTINGS.fail) ? `Вы проиграли :(` : `Победа!`}</h2>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${[...this.data.answers.map(statsBarTemplate), ...new Array(GAME_SETTINGS.maxLevel - this.data.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`)].join(``)}
            </ul>
          </td>
    ${(this.result === GAME_SETTINGS.fail) ? `<td class="result__total"></td>
 <td colspan="5" class="result__total  result__total--final">${GAME_SETTINGS.fail}</td>` : resultTemplate(this.data)}
          </table>
        </section>`;
  }


}

