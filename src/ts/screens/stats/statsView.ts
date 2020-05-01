import AbstractView from "../../abstractView";
import { GAME_SETTINGS } from "../../data/data";
import { State } from '../../data/data';

export default class StatsView extends AbstractView {
  constructor(public data: State[]) {
    super();
  }

  get template() {
    const speedBonusTemplate = (data: State["answers"], setting: any) => `
	<tr>
			<td></td>
			<td class="result__extra">Бонус за скорость:</td>
			<td class="result__extra"><span class="stats__result stats__result--fast">${
      data.filter(setting).length
      }</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">${
      data.filter(setting).length * GAME_SETTINGS.fastAnswerBonus
      }</td>
		</tr>`;

    const lifeBonusTemplate = (data: State) => `
    	<tr>
			<td></td>
			<td class="result__extra">Бонус за жизни:</td>
			<td class="result__extra"><span class="stats__result stats__result--alive">${
      data.lives
      }</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">${data.lives * GAME_SETTINGS.savedLifeBonus} </td>
		</tr>
    `;

    const slowFineTemplate = (data: State["answers"], setting: any) => `
 		<tr>
			<td></td>
			<td class="result__extra">Штраф за медлительность:</td>
			<td class="result__extra"><span class="stats__result stats__result--slow">${
      data.filter(setting).length
      }</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">-${
      data.filter(setting).length * GAME_SETTINGS.slowAnswerFine
      }</td>
		</tr>
 `;

    const resultTemplate = (data: State) => {
      const speedBonusFilter = (value: State["answers"][0]) =>
        value.time > GAME_SETTINGS.maxTime && value.result;
      const slowFineFilter = (value: State["answers"][0]) =>
        value.time < GAME_SETTINGS.minTime && value.result;
      const correctAnswerFilter = (value: State["answers"][0]) => value.result;

      return `<td class="result__points">× 100</td>
			<td class="result__total">${
        data.answers.filter(correctAnswerFilter).length *
        GAME_SETTINGS.correctAnswerBonus
        }</td>
      ${
        data.answers.some(speedBonusFilter)
          ? speedBonusTemplate(data.answers, speedBonusFilter)
          : ``
        }
      ${lifeBonusTemplate(data)}
      ${
        data.answers.some(slowFineFilter)
          ? slowFineTemplate(data.answers, slowFineFilter)
          : ``
        }
      <tr>
        <td colspan="5" class="result__total  result__total--final">${
        data.result
        }</td>
      </tr>`;
    };

    const statsBarTemplate = (data: State["answers"][0]) =>
      `<li class="stats__result stats__result--${data.type}" ></li>`;
    const resultTableTemplate = (data: State, index: number) =>
      `<table class="result__table">
        <tr>
        <td class="result__number">${index + GAME_SETTINGS.indexStep}</td>
          <td colspan="2">
            <ul class="stats"> ${data.result === GAME_SETTINGS.dead ? [...data.answers.map(statsBarTemplate),
      ...new Array(GAME_SETTINGS.maxLevel - data.answers.length).fill(
        `<li class="stats__result stats__result--unknown"></li>`
      )].join(``) : [...data.answers.map(statsBarTemplate)].join(``)} 
      </ul></td>
        ${data.result === GAME_SETTINGS.dead
        ? `<td class="result__total"></td><td colspan="5" class="result__total result__total--final">${GAME_SETTINGS.fail}</td>`
        : resultTemplate(data)}</table>`;

    return `<section class="result">
        <h2 class="result__title">${
      this.data[0].result === GAME_SETTINGS.dead
        ? `Вы проиграли :(`
        : `Победа!`
      }
      </h2>
        ${this.data.map(resultTableTemplate).join(``)}
        </section>`;
  }
}
