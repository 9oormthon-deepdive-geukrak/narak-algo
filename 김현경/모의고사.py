def solution(answers):
    answer = []
    a = [1, 2, 3, 4, 5] * 2000
    b = [2, 1, 2, 3, 2, 4, 2, 5] * 1250
    c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * 1000
    
    score = [0, 0, 0]
    
    for i in range(len(answers)):
        if a[i] == answers[i]:
            score[0] += 1
        if b[i] == answers[i]:
            score[1] += 1
        if c[i] == answers[i]:
            score[2] += 1

    max_score = max(score)
    
    for i in range(3):
        if score[i] == max_score:
            answer.append(i+1)

    return answer