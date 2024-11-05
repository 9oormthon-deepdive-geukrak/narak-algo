function getTree(n, edges) {
  const tree = Array.from({ length: n }, () => []);

  edges.forEach(([src, dst]) => {
    tree[src].push(dst);
  });

  return tree;
}

function dfs(tree, info) {
  const stack = [{ node: 0, sheep: 1, wolf: 0, nextNodes: new Set(tree[0]) }];
  let maxSheep = 0;

  while (stack.length > 0) {
    const { node, sheep, wolf, nextNodes } = stack.pop();

    maxSheep = Math.max(maxSheep, sheep);

    for (const nextNode of nextNodes) {
      if (!info[nextNode] || sheep > wolf + 1) {
        const newNodes = new Set([...nextNodes, ...tree[nextNode]]);
        newNodes.delete(nextNode);
        stack.push({
          node: nextNode,
          sheep: sheep + Number(!info[nextNode]),
          wolf: wolf + info[nextNode],
          nextNodes: newNodes,
        });
      }
    }
  }

  return maxSheep;
}

function solution(info, edges) {
  const tree = getTree(info.length, edges);
  return dfs(tree, info);
}
