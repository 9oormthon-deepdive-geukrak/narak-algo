const getNotVisited = (distances) => {
    return Object.entries(distances).filter((distance) => !distance[1].visited)
}

const dijkstra = (towns) => {
    const distances = {}

    // init
    for (let i = 1; i < towns.length; i++)
        distances[i] = { distance: Infinity, visited: false };
    distances[1].distance = 0;

    // core
    while (getNotVisited(distances).length) {
        const current = getNotVisited(distances).sort((a, b) => a[1].distance - b[1].distance)[0][0]
        distances[current].visited = true;
        for (const { town, distance } of towns[current]) {
            const newDistance = distances[current].distance + distance
            if (distances[town].distance > newDistance)
                distances[town].distance = distances[current].distance + distance
        }
    }

    return distances
}

const solution = (N, road, K) => {
    const towns = Array.from({length: N + 1}, () => []);

    for (const [town1, town2, distance] of road) {
        towns[town1].push({ town: town2, distance })
        towns[town2].push({ town: town1, distance })
    }

    const result = Object.values(dijkstra(towns)).filter(({ distance }) => distance <= K)

    return result.length
}