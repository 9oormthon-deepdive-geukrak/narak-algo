def solution(k, score):
    answer = []
    tmp = [] # 명예의 전당 
    for i in score:
        tmp.append(i)
        tmp.sort(reverse=True) # 명예의 전당 내림차순 정렬
        
        if(len(tmp) > k): # 명예의 전당 길이가 k보다 크면 가장 낮은 점수 제거
            tmp.pop()
        answer.append(tmp[-1]) # 최하위 점수 기록
        
    return answer