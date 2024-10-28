const PICKS = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

const solution = (answers) => {
  let max = 0;
  let answer = [];

  for (const [index, pick] of PICKS.entries()) {
    let score = 0;

    for (let i = 0; i < answers.length; i++)
      if (answers[i] === pick[i % pick.length]) score++;

    if (max < score) {
      max = score;
      answer = [index + 1];
    } else if (max === score) answer.push(index + 1);
  }

  return answer;
};
