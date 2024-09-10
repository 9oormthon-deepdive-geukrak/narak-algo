const ROW_RANGE = { MIN: -5, MAX: 5 };
const COL_RANGE = { MIN: -5, MAX: 5 };

const NEXT_DIRECTION = {
  U: [-1, 0],
  D: [1, 0],
  R: [0, 1],
  L: [0, -1],
};

function outOfRange(row, col) {
  return row < ROW_RANGE.MIN || row > ROW_RANGE.MAX || col < COL_RANGE.MIN || col > COL_RANGE.MAX;
}

function solution(dirs) {
  const path = new Set();

  let currPoint = [0, 0];
  let cnt = 0;
  [...dirs].forEach((dir) => {
    const [currRow, currCol] = currPoint;
    const [dRow, dCol] = NEXT_DIRECTION[dir];
    const [nextRow, nextCol] = [currRow + dRow, currCol + dCol];

    if (outOfRange(nextRow, nextCol)) return;

    currPoint = [nextRow, nextCol];

    let key;
    if (currRow < nextRow || currCol < nextCol) {
      key = `[${currRow}, ${currCol}] - [${nextRow}, ${nextCol}]`;
    } else {
      key = `[${nextRow}, ${nextCol}] - [${currRow}, ${currCol}]`;
    }
    if (path.has(key)) return;
    path.add(key);
    cnt++;
  });

  return cnt;
}
