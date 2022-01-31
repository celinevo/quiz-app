export default function Form(formElement) {
  const outputElement = formElement.querySelector('[data-js="output"]');
  const surveyTextareaElement = formElement.querySelector(
    '[data-js="surveyTextarea"]'
  );
  const counter = 200;

  surveyTextareaElement.addEventListener('input', () => {
    const length = surveyTextareaElement.value.length;
    outputElement.value = counter - length;
  });
}
