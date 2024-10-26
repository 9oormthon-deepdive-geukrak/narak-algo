const solution = (arr1, arr2) => {
  const ROW_SIZE = arr1.length;
  const COL_SIZE = arr2[0].length;

  const answer = Array.from({ length: ROW_SIZE }, () =>
    Array(COL_SIZE).fill(0)
  );

  arr1.forEach((row, i) => {
    for (let j = 0; j < COL_SIZE; j++) {
      answer[i][j] = row.reduce(
        (acc, cur, index) => acc + cur * arr2[index][j],
        0
      );
    }
  });

  return answer;
};
