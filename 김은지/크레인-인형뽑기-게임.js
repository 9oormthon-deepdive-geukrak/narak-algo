// function setPositionGroups(board) {
//   const N = board.length;
//   const positionGroups = Array.from({ length: N + 1 }, () => []);

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (board[j][i] === 0) continue;
//       positionGroups[i + 1].push(board[j][i]);
//     }
//   }

//   positionGroups.forEach((positionGroup) => positionGroup.reverse());

//   return positionGroups;
// }

// function solution(board, moves) {
//   const positionGroups = setPositionGroups(board);
//   const stack = [];
//   let bombPair = 0;
//   for (const move of moves) {
//     const currDoll = positionGroups[move].pop();
//     if (stack.length > 0 && currDoll && stack.at(-1) === currDoll) {
//       stack.pop();
//       bombPair += 1;
//       continue;
//     }
//     stack.push(currDoll);
//   }
//   return bombPair * 2;
// }

function setPositionGroups(board) {
  return board[0].map((_, colIndex) =>
    board
      .map((row) => row[colIndex])
      .filter((cell) => cell !== 0)
      .reverse()
  );
}

function solution(board, moves) {
  const positionGroups = setPositionGroups(board);
  const bucket = [];
  let bombCount = 0;
  for (const move of moves) {
    const index = move - 1;
    const currDoll = positionGroups[index].pop();
    if (bucket.length > 0 && currDoll && bucket.at(-1) === currDoll) {
      bucket.pop();
      bombCount += 1;
      continue;
    }
    bucket.push(currDoll);
  }
  return bombCount * 2;
}
