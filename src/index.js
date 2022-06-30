import _ from 'lodash';
import './style.css';

class UserScore {
  constructor(username, score) {
    this.username = username;
    this.score = score;
  }
}

let userScoresList = JSON.parse(localStorage.getItem('userScoresList')) || [];
const submit = document.querySelector('form button');
const usernameInput = document.querySelector('#username');
const scoreInput = document.querySelector('#score');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  let newUserScore = new UserScore(usernameInput.value, scoreInput.value);
  usernameInput.value = '';
  scoreInput.value = '';
  userScoresList.push(newUserScore);
  localStorage.setItem('userScoresList', JSON.stringify(userScoresList));
  console.log(userScoresList);
});