const announce = (hallOfFame, k) => {
  while (hallOfFame[k - 1] === undefined) k--;
  return hallOfFame[k - 1];
};

const solution = (k, score) => {
  const answer = [];
  const hallOfFame = [];

  score.forEach((s) => {
    hallOfFame.push(s);
    hallOfFame.sort((a, b) => b - a);
    answer.push(announce(hallOfFame, k));
  });

  return answer;
};
