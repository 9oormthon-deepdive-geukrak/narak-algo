def solution(dirs):
    visited = set()
    dicts = {'U': (0, 1), 'D': (0, -1), 'L': (-1, 0), 'R': (1, 0)}
    x, y = 0, 0 # 초기 좌표 (0, 0) 
    
    for i in dirs:
        ix, iy = dicts[i][0] + x, dicts[i][1] + y
        
        # 범위를 벗어나지 않는 경우
        if -5 <= ix <= 5 and -5 <= iy <= 5:
            visited.add(((x, y), (ix, iy)))
            visited.add(((ix, iy), (x, y)))
            x, y = ix, iy

    return len(visited) // 2 # 양방향 경로 모두 저장했기 때문에 2로 나눠줌