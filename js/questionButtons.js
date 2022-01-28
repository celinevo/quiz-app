export function questionButtons() {
  const showAnswerButton = document.querySelector(
    '[data-js="card__show-answer-button"]'
  );

  const textHide = 'Hide Answer';
  const textShow = 'Show Answer';

  showAnswerButton?.addEventListener('click', () => {
    if (showAnswerButton.textContent === textHide) {
      showAnswerButton.textContent = textShow;
    } else {
      showAnswerButton.textContent = textHide;
    }
  });
}
