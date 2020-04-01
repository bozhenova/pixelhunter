import Router from './router.js';

Router.showIntro();



function backButtonClickHandler() {
  const mainContent = document.querySelector(`#main`);

  //FIXME: баг со всплывающей модалкой при втором нажатии на стрелку назад с экрана rules, почему-то класс меняется на greeting, сейчас стоит костыль
  if (document.querySelector(`.rules__screen`) || document.querySelector(`.greeting`)) {
    showGreeting();
  } else {
    const modalConfirmTemplate = document.querySelector(`#modal-confirm`).content.cloneNode(true);
    mainContent.append(modalConfirmTemplate);

    const okButton = document.querySelector('[data-choice="ok"]');
    const cancelButton = document.querySelector('[data-choice="cancel"]');
    const modalCloseButton = document.querySelector('.modal__close');

    function closeModal(e) {
      e.preventDefault();
      document.querySelector(`.modal`).remove();
    }

    okButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      answers.fill(`unknown`);
      document.querySelector(`.back`).removeEventListener(`click`, backButtonClickHandler);
      document.querySelector(`.modal`).remove();
      clearMain();
      showGreeting();
    });

    cancelButton.addEventListener(`click`, (e) => {
      closeModal(e);
    });

    modalCloseButton.addEventListener(`click`, (e) => {
      closeModal(e);
    });
  }
}
document.querySelector(`.back`).addEventListener(`click`, backButtonClickHandler);
}

function clearMain() {
  document.querySelector(`#main`).innerHTML = ``;
}
