const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: "Abelhadi's game",
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gameIdObject = await response.json();
  const gameId = gameIdObject.result.slice(14, 34);
  return gameId;
};

const submitScore = async (token, name, score) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
    token}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await response.json();
};

const refreshScoreList = async (token, scoresList) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
    token}/scores/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const userScorsArray = await response.json();
  const arr = await userScorsArray.result;
  for (let i = 0; i < arr.length; i += 1) {
    scoresList.innerHTML += `<li>${arr[i].username}: ${arr[i].score}</li>`;
  }
};

export {
  createGame, submitScore, refreshScoreList,
};