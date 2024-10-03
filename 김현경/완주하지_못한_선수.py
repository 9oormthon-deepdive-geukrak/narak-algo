def solution(participant, completion):
    name_counts = {}
    
    #참가자 카운팅
    for p in participant:
        if p in name_counts:
            name_counts[p] += 1
        else:
            name_counts[p] = 1

    #완주자 카운트 감소        
    for c in completion:
        if c in name_counts:
            name_counts[c] -= 1

    # 완주자 카운트가 1인 사람이 완주하지 못한 사람    
    for key, value in name_counts.items():
        if value == 1:
            return key
