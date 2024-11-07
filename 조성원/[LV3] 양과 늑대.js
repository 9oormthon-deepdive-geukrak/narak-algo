function dfs(tree, node, count, nodeQueue) {
  const countCopy = { ...count };

  if (tree.get(node).value === 0) countCopy.sheep++;
  else countCopy.wolf++;

  if (countCopy.sheep > countCopy.wolf) {
    const nextNodeQueue = nodeQueue
      .concat(tree.get(node).children)
      .filter((n) => n !== node);

    for (const nextNode of nextNodeQueue)
      countCopy.max = dfs(tree, nextNode, countCopy, nextNodeQueue);
  }

  return Math.max(countCopy.max, countCopy.sheep);
}

function solution(info, edges) {
  const tree = new Map();
  info.forEach((value, index) => tree.set(index, { value, children: [] }));
  for (const [parent, child] of edges) tree.get(parent).children.push(child);

  return dfs(tree, 0, { max: 0, sheep: 0, wolf: 0 }, []);
}
