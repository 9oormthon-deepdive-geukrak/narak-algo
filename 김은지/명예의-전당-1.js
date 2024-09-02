function solution(k, score) {
  const result = [];
  score.reduce((acc, curr) => {
    acc.push(curr);
    acc.sort((a, b) => b - a);
    acc.splice(k);
    result.push(acc.at(-1));
    return acc;
  }, []);
  return result;
}
