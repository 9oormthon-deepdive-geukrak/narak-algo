const solution = (dirs) => {
  const moveSet = new Set();
  let curPosition = [0, 0];
  let newPosition = [...curPosition];

  for (const dir of dirs) {
    switch (dir) {
      case "U":
        newPosition[1] = curPosition[1] + 1;
        break;
      case "D":
        newPosition[1] = curPosition[1] - 1;
        break;
      case "R":
        newPosition[0] = curPosition[0] + 1;
        break;
      case "L":
        newPosition[0] = curPosition[0] - 1;
        break;
    }

    // 좌표가 범위를 벗어나는 경우 처리
    if (
      newPosition[0] < -5 ||
      newPosition[0] > 5 ||
      newPosition[1] < -5 ||
      newPosition[1] > 5
    ) {
      newPosition = [...curPosition];
      continue;
    }

    // 같은 길, 다른 방향에 대한 처리 후 Set에 추가
    moveSet.add(
      [curPosition, newPosition]
        .sort()
        .map((v) => v.join(""))
        .join("")
    );

    curPosition = [...newPosition];
  }

  return moveSet.size;
};
