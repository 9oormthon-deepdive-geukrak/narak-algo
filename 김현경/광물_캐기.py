def solution(picks, minerals):
    answer = 0
    # 곡괭이로 채굴 가능한 최대 광물 수
    minerals = minerals[:sum(picks) * 5]
    # 5개씩 묶어 리스트로 나눔
    new_minerals = [minerals[i:i+5] for i in range(0, len(minerals), 5)]
    
    # 광물에 대한 피로도 계산
    tireds = []
    for mineral in new_minerals:
        tired = [0, 0, 0]
        for m in mineral:
            if m == 'diamond':
                tired[0] += 1
                tired[1] += 5
                tired[2] += 25
            elif m == 'iron':
                tired[0] += 1
                tired[1] += 1
                tired[2] += 5
            else:
                tired[0] += 1
                tired[1] += 1
                tired[2] += 1
        tireds.append(tired)
        
    # 돌 곡괭이 사용했을 때의 피로도가 큰 순서대로 정렬
    # 돌 곡괭이로 채굴할 때 피로도가 많이 드는 광물부터 처리하기 위해서
    tireds = sorted(tireds, key=lambda x: -x[2]) 
    
    # 피로도가 높은 광물 그룹부터 곡괭이 사용
    # 다이아몬드 곡괭이가 남아 있으면 사용하고 아니면 넘어가고
    for tired in tireds:
        if picks[0] > 0:
            picks[0] -= 1
            answer += tired[0]
            continue
        elif picks[1] > 0:
            picks[1] -= 1
            answer += tired[1]
            continue
        elif picks[2] > 0:
            picks[2] -= 1
            answer += tired[2]
            continue
    return answer