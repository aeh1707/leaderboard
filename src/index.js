import './style.css';
import { addUserInput, populateList } from './modules/interactivity.js';

const userScoresList = JSON.parse(localStorage.getItem('userScoresList')) || [];
const submit = document.querySelector('form button');
const refresh = document.querySelector('header button');
const usernameInput = document.querySelector('#username');
const scoreInput = document.querySelector('#score');
const scoresList = document.querySelector('ul');

submit.addEventListener('click', (e) => {
  addUserInput(e, usernameInput, scoreInput, userScoresList);
  localStorage.setItem('userScoresList', JSON.stringify(userScoresList));
});

refresh.addEventListener('click', () => {
  scoresList.innerHTML = '';
  populateList(scoresList, userScoresList);
});