const bookmarkElement = document.querySelector('[data-js="bookmark-clicked"]');

bookmarkElement.addEventListener('click', () => {
  bookmarkElement.classList.toggle('card__bookmark--clicked');
});

const outputElement = document.querySelector('[data-js="output"]');
const surveyTextareaElement = document.querySelector(
  '[data-js="surveyTextarea"]'
);
const counter = 200;

document.body.addEventListener((input) => {
  const stringLength = surveyTextareaElement.value.length;
  outputElement.value = 200 - stringLength;
});
