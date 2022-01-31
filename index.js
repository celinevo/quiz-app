import Card from './js/Card.js';

//import { bookmarks } from './js/bookmarks.js';
//import { questionButtons } from './js/questionButtons.js';
import { surveyTextfields } from './js/surveyTextfields.js';
import { navbar } from './js/navbar.js';
import { logoutButton } from './js/logoutButton.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

//bookmarks();
//questionButtons();
surveyTextfields();
navbar();
logoutButton();
