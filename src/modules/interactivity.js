class UserScore {
  constructor(username, score) {
    this.username = username;
    this.score = score;
  }
}

const addUserInput = (e, usernameInput, scoreInput, userScoresList) => {
  e.preventDefault();
  const newUserScore = new UserScore(usernameInput.value, scoreInput.value);
  usernameInput.value = '';
  scoreInput.value = '';
  userScoresList.push(newUserScore);
};

const populateList = (scoresList, userScoresList) => {
  for (let i = 0; i < userScoresList.length; i += 1) {
    scoresList.innerHTML += `<li>${userScoresList[i].username}: ${userScoresList[i].score}</li>`;
  }
};

export {
  addUserInput, populateList,
};