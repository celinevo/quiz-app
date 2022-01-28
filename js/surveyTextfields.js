export function surveyTextfields() {
  const outputElement = document.querySelector('[data-js="output"]');
  const surveyTextareaElement = document.querySelector(
    '[data-js="surveyTextarea"]'
  );
  const counter = 200;

  surveyTextareaElement?.addEventListener('input', () => {
    const length = surveyTextareaElement.value.length;
    outputElement.value = counter - length;
  });
}
