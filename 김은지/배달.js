function getGraph(N, road) {
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [src, dst, weight] of road) {
    graph[src].push({ dst, weight });
    graph[dst].push({ dst: src, weight });
  }
  return graph;
}

function bfs(N, graph) {
  const distances = Array(N + 1).fill(Infinity);
  const visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
  const queue = [1];
  distances[1] = 0;

  while (queue.length > 0) {
    const src = queue.shift();
    for (const { dst, weight } of graph[src]) {
      distances[dst] = Math.min(distances[dst], distances[src] + weight);

      if (visited[src][dst] || dst === 1) continue;
      queue.push(dst);
      visited[src][dst] = true;
    }
  }

  return distances;
}

function dijkstra(N, graph) {
  const distances = Array(N + 1).fill(Infinity);
  const visited = Array(N + 1).fill(false);
  const pq = [1];
  distances[1] = 0;
  visited[1] = true;

  while (pq.length > 0) {
    pq.sort((a, b) => distances[b] - distances[a]);
    const src = pq.pop();
    for (const { dst, weight } of graph[src]) {
      distances[dst] = Math.min(distances[dst], distances[src] + weight);

      if (visited[dst]) continue;
      pq.push(dst);
      visited[dst] = true;
    }
  }

  return distances;
}

function bellmanFord(N, graph) {
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0;

  for (let i = 1; i < N; i++) {
    for (let src = 1; src <= N; src++) {
      for (const { dst, weight } of graph[src]) {
        if (distances[src] === Infinity) continue;
        distances[dst] = Math.min(distances[dst], distances[src] + weight);
      }
    }
  }

  return distances;
}

function solution(N, road, K) {
  const graph = getGraph(N, road);
  // const distances = bfs(N, graph);
  const distances = dijkstra(N, graph);
  // const distances = bellmanFord(N, graph);

  return distances.filter((distance) => distance <= K).length;
}
