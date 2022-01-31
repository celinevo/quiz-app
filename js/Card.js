export default function Card(cardElement) {
  // Bookmark
  const bookmarkElement = cardElement.querySelector(
    '[data-js="bookmark-clicked"]'
  );

  bookmarkElement.addEventListener('click', () => {
    bookmarkElement.classList.toggle('card__bookmark--clicked');
  });

  // Show/Hide Answer
  const showAnswerButton = cardElement.querySelector(
    '[data-js="card__show-answer-button"]'
  );

  const textHide = 'Hide Answer';
  const textShow = 'Show Answer';

  showAnswerButton.addEventListener('click', () => {
    if (showAnswerButton.textContent === textHide) {
      showAnswerButton.textContent = textShow;
    } else {
      showAnswerButton.textContent = textHide;
    }
  });
}
