function solution(board, moves) {
  let answer = 0;

  const basket = [];
  const cols = board.reverse().reduce(
    (acc, row) => {
      row.forEach((doll, i) => {
        if (doll) acc[i].push(doll);
      });
      return acc;
    },
    Array.from({ length: board.length }, () => [])
  );

  for (const move of moves) {
    const doll = cols[move - 1].pop();
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  }

  return answer;
}
