import createElement from "./createElement.js";
import showScreen from "./showScreen.js";
import { answers, QUESTIONS, GAME_SETTINGS } from "../data/data.js";
import { returnGreeting } from "./main.js";
import { showGameOneScreen, getGameOneScreenTemplate } from "./game-1";
import countScore from "../data/countScore.js";
import { getFailScreenTemplate, showStats, getStatsScreenTemplate } from "./stats.js";
import { showHeader, getHeaderTemplate } from "./header.js";

function getGameThreeScreenTemplate(userAnswers, gameState, questions) {
	return `<section class="game">
	<p class="game__task">${questions[gameState[`question`] - 1][`question`]}</p>
	<form class="game__content  game__content--triple">
		<div class="game__option">
			<img src=${questions[gameState[`question`] - 1][`imageSources`][0]}  alt="Option 1" width="304" height="455">
		</div>
		<div class="game__option  game__option--selected">
			<img src=${questions[gameState[`question`] - 1][`imageSources`][1]}  alt="Option 2" width="304" height="455">
		</div>
		<div class="game__option">
			<img src=${questions[gameState[`question`] - 1][`imageSources`][2]}  alt="Option 3" width="304" height="455">
		</div>
	</form>
	<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
		</ul>
	</section>`;
}


function showGameThreeScreen(screen, currentGameState) {
	showScreen(screen);
	returnGreeting();

	const TOTAL_QUESTIONS_NUMBER = 10;
	const MINIMUM_LIVES_NUMBER = 0;
	const gameOptions = screen.querySelectorAll(`.game__option`);

	gameOptions.forEach((gameOption, index) => {
		gameOption.addEventListener(`click`, () => {
			const currentQuestion = currentGameState[`question`];
			if (QUESTIONS[currentQuestion - 1][`rightAnswers`][0] === index) {
				answers[currentQuestion - 1] = `correct`;
			} else {
				answers[currentQuestion - 1] = `wrong`;
				currentGameState[`lives`]--;
			}
			if (currentGameState[`lives`] < MINIMUM_LIVES_NUMBER) {
				const failScreenElement = createElement(getFailScreenTemplate(answers));
				showStats(failScreenElement);
			} else if (currentGameState[`question`] === TOTAL_QUESTIONS_NUMBER) {
				const finalStats = countScore(answers, currentGameState[`lives`], GAME_SETTINGS);
				const statsScreenElement = createElement(getStatsScreenTemplate(answers, finalStats));
				showStats(statsScreenElement);
			} else {
				currentGameState[`question`]++;
				const currentQuestionElement = createElement(getGameOneScreenTemplate(answers, currentGameState, QUESTIONS));
				const currentQuestionHeaderElement = createElement(getHeaderTemplate(currentGameState));
				showHeader(currentQuestionHeaderElement);
				showGameOneScreen(currentQuestionElement, currentGameState);
			}
		});
	});
}


export { getGameThreeScreenTemplate, showGameThreeScreen };