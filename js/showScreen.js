
// document.addEventListener('keydown', changeScreen);

// function changeScreen(e) {
//   if (e.code === 'ArrowRight') {
//     screenNum++;
//     showScreen(screenNum);
//   }
//   if (e.code === 'ArrowLeft') {
//     screenNum--;
//     showScreen(screenNum);
//   }

// }


export function showScreen(screenElement) {
  const mainContent = document.querySelector(`#main`);
  mainContent.append(screenElement);
}