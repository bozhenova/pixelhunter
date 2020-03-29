import createElement from "./createElement.js";
import showScreen from "./showScreen.js";
import { showGameThreeScreen, getGameThreeScreenTemplate } from "./game-3";
import { answers, QUESTIONS, GAME_SETTINGS } from "../data/data.js";
import { returnGreeting } from "./main.js";
import countScore from "../data/countScore.js";
import { getFailScreenTemplate, showStats, getStatsScreenTemplate } from "./stats.js";
import { showHeader, getHeaderTemplate } from "./header.js";

function getGameTwoScreenTemplate(userAnswers, gameState, questions) {
	return `<section class="game">
	<p class="game__task">${questions[gameState[`question`] - 1][`question`]}</p>
	<form class="game__content  game__content--wide">
		<div class="game__option">
			<img src=${questions[gameState[`question`] - 1][`imageSources`][0]}  alt="Option 1" width="705" height="455">
			<label class="game__answer  game__answer--photo">
				<input class="visually-hidden" name="question1" type="radio" value="photo">
				<span>Фото</span>
			</label>
			<label class="game__answer  game__answer--paint">
				<input class="visually-hidden" name="question1" type="radio" value="paint">
				<span>Рисунок</span>
			</label>
		</div>
	</form>
	<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
		</ul>
	</section>`;
}

function showGameTwoScreen(screen, currentGameState) {
	showScreen(screen);
	returnGreeting();

	const TOTAL_QUESTIONS_NUMBER = 10;
	const MINIMUM_LIVES_NUMBER = 0;
	let isFirstChecked = false;
	let isSecondChecked = false;
	let isFirstTrue = false;
	let isSecondTrue = false;
	const gameOption = screen.querySelector(`.game__option`);

	const radioButtons = gameOption.querySelectorAll(`input`);

	radioButtons.forEach((radioButton, index) => {
		radioButton.addEventListener(`change`, () => {
			const currentQuestion = currentGameState[`question`];

			if (radioButton.checked) {
				if (QUESTIONS[currentQuestion - 1][`rightAnswers`][0] === index) {
					answers[currentQuestion - 1] = `correct`;
				} else {
					answers[currentQuestion - 1] = `wrong`;
					currentGameState[`lives`]--;
				}
			}
			if (currentGameState[`lives`] < MINIMUM_LIVES_NUMBER) {
				const failScreenElement = createElement(getFailScreenTemplate(answers));
				showStats(failScreenElement);
			} else if (currentGameState[`question`] === TOTAL_QUESTIONS_NUMBER) {
				const finalStats = countScore(answers, currentGameState[`lives`], GAME_SETTINGS);
				const statsScreenElement = createElement(getStatsScreenTemplate(answers, finalStats));
				showStats(statsScreenElement);
				returnGreeting();
			} else {
				currentGameState[`question`]++;
				const currentQuestionElement = createElement(getGameThreeScreenTemplate(answers, currentGameState, QUESTIONS));
				const currentQuestionHeaderElement = createElement(getHeaderTemplate(currentGameState));
				showHeader(currentQuestionHeaderElement);
				showGameThreeScreen(currentQuestionElement, currentGameState);
			}
		});
	});
}


export { getGameTwoScreenTemplate, showGameTwoScreen };