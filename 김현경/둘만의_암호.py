def solution(s, skip, index):
    answer = ''
    alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    for i in skip:
        if i in alpha:
            alpha.remove(i)
            
    for i in s:
        curr_index = alpha.index(i) # 현재 문자의 인덱스
        new_index = (curr_index + index) % len(alpha) # index만큼 이동한 후 인덱스 계산
        answer += alpha[new_index]
        
    return answer