function solution(n, k, cmd) {
  const list = Array.from({ length: n }, (_, i) => ({
    prev: i - 1,
    next: i + 1,
    deleted: false,
  }));
  list[0].prev = null;
  list[n - 1].next = null;

  const stack = [];
  let current = k;

  for (const command of cmd) {
    const [action, value] = command.split(" ");
    let pos = current;
    let amount = Number(value);

    switch (action) {
      case "U": {
        while (amount > 0 && list[pos].prev !== null) {
          pos = list[pos].prev;
          amount--;
        }
        current = pos;
        break;
      }
      case "D": {
        while (amount > 0 && list[pos].next !== null) {
          pos = list[pos].next;
          amount--;
        }
        current = pos;
        break;
      }
      case "C": {
        list[pos].deleted = true;
        stack.push(pos);

        const prev = list[pos].prev;
        const next = list[pos].next;

        if (prev !== null) list[prev].next = next;
        if (next !== null) list[next].prev = prev;

        current = next !== null ? next : prev;
        break;
      }
      case "Z": {
        const pos = stack.pop();
        list[pos].deleted = false;

        const prev = list[pos].prev;
        const next = list[pos].next;

        if (prev !== null) list[prev].next = pos;
        if (next !== null) list[next].prev = pos;
        break;
      }
    }
  }

  return list.map((row) => (row.deleted ? "X" : "O")).join("");
}
