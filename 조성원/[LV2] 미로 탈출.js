const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const findPosition = (maps, char) => {
  for (let i = 0; i < maps.length; i++)
    for (let j = 0; j < maps[0].length; j++)
      if (maps[i][j] === char) return [i, j];
};

const bfs = (maps, start, target) => {
  const queue = [[...start, 0]];
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (maps[x][y] === target) return dist;

    for (const [dx, dy] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < maps.length &&
        ny >= 0 &&
        ny < maps[0].length &&
        !visited[nx][ny] &&
        maps[nx][ny] !== "X"
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
};

function solution(maps) {
  const start = findPosition(maps, "S");
  const lever = findPosition(maps, "L");

  const toLever = bfs(maps, start, "L");
  if (toLever === -1) return -1;

  const toExit = bfs(maps, lever, "E");
  if (toExit === -1) return -1;

  return toLever + toExit;
}
