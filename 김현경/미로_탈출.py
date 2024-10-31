from collections import deque

def bfs(start, end, maps):
    rows, cols = len(maps), len(maps[0])
    visited = [[False] * cols for _ in range(rows)]
    visited[start[0]][start[1]] = True
    queue = deque([(start[0], start[1], 0)]) # x, y, distance
    
    direction = [(1, 0), (-1, 0), (0, 1), (0, -1)] # 하, 상, 우, 좌
    
    while queue:
        x, y, dist = queue.popleft()
        
        if (x, y) == end:
            return dist
        
        # 이동
        for dx, dy in direction:
            nx, ny = x + dx, y + dy
            
            if 0 <= nx < rows and 0 <= ny < cols and maps[nx][ny] != 'X' and not visited[nx][ny]:
                visited[nx][ny] = True
                queue.append((nx, ny, dist + 1))
                
    return -1

def solution(maps):
    start, lever, exit = None, None, None
    
    for i in range(len(maps)):
        for j in range(len(maps[i])):
            if maps[i][j] == 'S':
                start = (i, j)
            elif maps[i][j] == 'L':
                lever = (i, j)
            elif maps[i][j] == 'E':
                exit = (i, j)

    s_to_l = bfs(start, lever, maps)
    l_to_e = bfs(lever, exit, maps)
    
    return -1 if s_to_l == -1 or l_to_e == -1 else s_to_l + l_to_e 