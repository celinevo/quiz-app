// Bookmark

const bookmarkElement = document.querySelector('[data-js="bookmark-clicked"]');

bookmarkElement?.addEventListener('click', () => {
  bookmarkElement.classList.toggle('card__bookmark--clicked');
});

// Hide / Show Answer

// Survey Counter Question

const outputElement = document.querySelector('[data-js="output"]');
const surveyTextareaElement = document.querySelector(
  '[data-js="surveyTextarea"]'
);
const counter = 200;

surveyTextareaElement?.addEventListener('input', () => {
  const length = surveyTextareaElement.value.length;
  outputElement.value = counter - length;
});
