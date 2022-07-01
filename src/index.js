import './style.css';
import { createGame, submitScore, refreshScoreList } from './modules/interactivity.js';

const tokenID = createGame();

const submit = document.querySelector('form button');
const refresh = document.querySelector('header button');
const usernameInput = document.querySelector('#username');
const scoreInput = document.querySelector('#score');
const scoresList = document.querySelector('ul');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore(tokenID, usernameInput.value, scoreInput.value);
  usernameInput.value = '';
  scoreInput.value = '';
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  scoresList.innerHTML = '';
  refreshScoreList(tokenID, scoresList);
});