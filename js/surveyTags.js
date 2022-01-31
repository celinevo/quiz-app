export function surveyTags() {
  const outputElement = document.querySelector('[data-js="output-tags"]');
  const surveyTagsElement = document.querySelector('[data-js="surveyTags"]');
  const counter = 100;

  surveyTagsElement?.addEventListener('input', () => {
    const length = surveyTagsElement.value.length;
    outputElement.value = counter - length;
  });
}
