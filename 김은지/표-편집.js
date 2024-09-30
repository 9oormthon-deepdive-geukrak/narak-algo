const commandFn = {
  U: ({ table, currRow, dRow }) => commandFn.move({ direction: "prev", table, currRow, dRow }),
  D: ({ table, currRow, dRow }) => commandFn.move({ direction: "next", table, currRow, dRow }),
  C: ({ table, stack, currRow }) => {
    stack.push(currRow);
    commandFn.unlinkRow({ table, currRow });
    return table[currRow].next ?? table[currRow].prev;
  },
  Z: ({ table, stack, currRow }) => {
    const backRow = stack.pop();
    commandFn.relinkRow({ table, backRow });
    return currRow;
  },

  move: ({ direction, table, currRow, dRow }) => {
    for (let i = 0; i < dRow; i++) {
      currRow = table[currRow][direction];
    }
    return currRow;
  },
  unlinkRow: ({ table, currRow }) => {
    if (table[currRow].prev >= 0) table[table[currRow].prev].next = table[currRow].next;
    if (table[currRow].next !== null) table[table[currRow].next].prev = table[currRow].prev;
  },
  relinkRow: ({ table, backRow }) => {
    if (table[backRow].prev >= 0) table[table[backRow].prev].next = backRow;
    if (table[backRow].next !== null) table[table[backRow].next].prev = backRow;
  },
};

function solution(n, k, cmd) {
  let currRow = k;
  const table = Array.from({ length: n }, (_, i) => ({
    prev: i - 1,
    next: i < n - 1 ? i + 1 : null,
  }));
  const stack = [];

  for (const rawCmd of cmd) {
    const [operator, operand] = rawCmd.split(" ");
    currRow = commandFn[operator]({
      table,
      stack,
      currRow,
      dRow: Number(operand),
    });
  }

  const result = Array(n).fill("O");
  for (const deletedRow of stack) {
    result[deletedRow] = "X";
  }

  return result.join("");
}
