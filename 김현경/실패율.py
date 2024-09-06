def solution(N, stages):
    fail_rate = []
    user = len(stages)
    for i in range(1, N+1):
        if user != 0:
            fail_rate.append((i, stages.count(i) / user))
            user -= stages.count(i)
        else: # 남는 유저 수가 0인 경우 처리 (ZeroDivisionError 방지)
            fail_rate.append((i, 0))

    fail_rate.sort(key=lambda x: x[1], reverse=True)
    answer = [i[0] for i in fail_rate]
    
    return answer