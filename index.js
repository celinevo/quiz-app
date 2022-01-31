import Card from './js/Card.js';
import Form from './js/Form.js';

import { navbar } from './js/navbar.js';
import { logoutButton } from './js/logoutButton.js';
import { surveyTags } from './js/surveyTags.js';

navbar();
logoutButton();
surveyTags();

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

const allFormElements = document.querySelectorAll('[data-form="form"]');

allFormElements.forEach(formElement => {
  Form(formElement);
});
