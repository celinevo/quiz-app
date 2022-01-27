const bookmarkElement = document.querySelector('[data-js="bookmark-clicked"]');

bookmarkElement?.addEventListener('click', () => {
  bookmarkElement.classList.toggle('card__bookmark--clicked');
});

// New Dings

const outputElement = document.querySelector('[data-js="output"]');
const surveyTextareaElement = document.querySelector(
  '[data-js="surveyTextarea"]'
);
const counter = 200;

/*surveyTextareaElement.addEventListener((input) => {
  const stringLength = surveyTextareaElement.value.length;
  console.log(stringLength);
  outputElement.value = 200 - stringLength;
});*/

surveyTextareaElement?.addEventListener('keydown', (event) => {
  console.log('hallo');
  if (event.key === 'Backspace') {
    counter = counter - 1;
  } else {
    counter = counter + 1;
  }
  outputElement.value = counter;
});
