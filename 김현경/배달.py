import heapq

def solution(N, road, K):
    answer = 0
    graph = [[] for _ in range(N + 1)]

    for a, b, c in road:
        graph[a].append((b, c))
        graph[b].append((a, c))
    
    distance = [float('inf')] * (N + 1)
    distance[1] = 0
    queue = [(0, 1)]
    
    while queue:
        curr_dist, curr_town = heapq.heappop(queue)
        if distance[curr_town] < curr_dist:
            continue
        for next_town, move_time in graph[curr_town]:
            new_dist = curr_dist + move_time
            
            if new_dist < distance[next_town]:
                distance[next_town] = new_dist
                heapq.heappush(queue, (new_dist, next_town))
    
    answer = sum(1 for d in distance if d <= K)
    return answer