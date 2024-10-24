def solution(genres, plays):
    answer = []
    total = {} # 장르별 총 재생 횟수 저장
    gen = {} # 각 장르에 속한 노래 정보 저장
    
    for i in range(len(genres)):
        if genres[i] not in gen:
            gen[genres[i]] = []
            total[genres[i]] = 0
        gen[genres[i]].append((plays[i], i))
        total[genres[i]] += plays[i]

    sorted_data = sorted(total.items(), key=lambda x: -x[1])

    for data in sorted_data:
        rank = sorted(gen[data[0]], key=lambda x: (-x[0], x[1]))[:2]
        for _, cnt in rank:
            answer.append(cnt)
        
    return answer