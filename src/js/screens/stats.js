import createElement from "./createElement.js";
import showScreen from "./showScreen.js";
import { clearMain } from "./main.js";
import { returnGreeting } from "./main.js";

function getStatsScreenTemplate(userAnswers, gameState) {
	return `<div><header class="header">
		<button class="back">
			<span class="visually-hidden">Вернуться к началу</span>
			<img src="img/sprite/arrow-left.svg">
			<img src="img/sprite/logo-small.svg">
		</button>
		</header>
		<section class="result">
	<h2 class="result__title">Победа!</h2>
	<table class="result__table">
		<tr>
			<td class="result__number">1.</td>
			<td colspan="2">
			<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
		</ul>
			</td>
			<td class="result__points">× 100</td>
			<td class="result__total">${gameState.correctAnswerPoints}</td>
		</tr>
		<tr>
			<td></td>
			<td class="result__extra">Бонус за скорость:</td>
			<td class="result__extra"><span class="stats__result stats__result--fast">${gameState.fastAnswersNumber}</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">${gameState.fastAnswersBonus}</td>
		</tr>
		<tr>
			<td></td>
			<td class="result__extra">Бонус за жизни:</td>
			<td class="result__extra"><span class="stats__result stats__result--alive">${gameState.lives}</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">${gameState.livesBonus} </td>
		</tr>
		<tr>
			<td></td>
			<td class="result__extra">Штраф за медлительность:</td>
			<td class="result__extra"><span class="stats__result stats__result--slow">${gameState.slowAnswersNumber}</span></td>
			<td class="result__points">× 50</td>
			<td class="result__total">-${gameState.slowAnswersBonus}</td>
		</tr>
		<tr>
			<td colspan="5" class="result__total  result__total--final">${gameState.score}</td>
		</tr>
	</table>
	</section></div>`;
}

function getFailScreenTemplate(userAnswers) {
	return `<div><header class="header">
		<button class="back">
			<span class="visually-hidden">Вернуться к началу</span>
			<img src="img/sprite/arrow-left.svg">
			<img src="img/sprite/logo-small.svg">
		</button>
		</header>
		<section class="result">
	<h2 class="result__title">Вы проиграли :\(</h2>
		<table class="result__table">
		<tr>
			<td class="result__number">1.</td>
			<td>
			<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
				</ul>
			</td>
			<td class="result__total">0</td>
			<td class="result__total  result__total--final">0</td>
		</tr>
		</table></section></div>`;
}


function showStats(screen) {
	clearMain();
	showScreen(screen);
	returnGreeting();
}

export { showStats, getFailScreenTemplate, getStatsScreenTemplate };
