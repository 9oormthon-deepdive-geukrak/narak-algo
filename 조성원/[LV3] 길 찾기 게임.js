function buildTree(nodes, tree) {
  if (nodes.length === 0) return;

  const root = tree.get(nodes[0].id);
  const leftNodes = nodes.filter((node) => node.coords[0] < root.coords[0]);
  const rightNodes = nodes.filter((node) => node.coords[0] > root.coords[0]);

  buildTree(leftNodes, tree);
  buildTree(rightNodes, tree);

  root.left = tree.get(leftNodes[0]?.id) ?? null;
  root.right = tree.get(rightNodes[0]?.id) ?? null;

  tree.set(nodes[0].id, root);
}

function getOrders(node) {
  const result = [[], []];

  const preorder = (node) => {
    if (node === null) return;
    result[0].push(node.id);
    preorder(node.left);
    preorder(node.right);
  };

  const postorder = (node) => {
    if (node === null) return;
    postorder(node.left);
    postorder(node.right);
    result[1].push(node.id);
  };

  preorder(node);
  postorder(node);

  return result;
}

function solution(nodeinfo) {
  const nodes = nodeinfo.map((coords, id) => ({ id: id + 1, coords }));
  nodes.sort((a, b) => b.coords[1] - a.coords[1] || a.coords[0] - b.coords[0]);

  const tree = new Map(
    // Map의 키와 value에 id가 중복된다... 순회해서 답을 구할 때 id가 필요한데, 자료구조 선정을 잘못한 것 같다.
    nodes.map(({ id, coords }) => [id, { id, coords, left: [], right: [] }])
  );
  buildTree(nodes, tree);

  return getOrders(tree.get(nodes[0].id));
}
