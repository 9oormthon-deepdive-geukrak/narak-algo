function solution(storey) {
  const stoneCase = [];
  const stack = [[storey, 0]];

  while (stack.length > 0) {
    const [currNum, stone] = stack.pop();

    if (currNum < 10) {
      stoneCase.push(stone + Math.min(currNum, 10 - currNum + 1));
      continue;
    }

    const remainder = currNum % 10;
    const nextNum = Math.floor(currNum / 10);

    stack.push([nextNum, stone + remainder]);
    stack.push([nextNum + 1, stone + (10 - remainder)]);
  }

  return Math.min(...stoneCase);
}
