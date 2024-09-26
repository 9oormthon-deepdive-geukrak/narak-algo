from collections import deque

def solution(progresses, speeds):
    answer = []
    days = deque()

    for i in range(len(progresses)):
        remaining_work = 100 - progresses[i]
        need = (remaining_work + speeds[i] - 1) // speeds[i]
        days.append(need)
    
    first_deploy_day = days.popleft()
    cnt = 1
    while days:
        curr_deploy_day = days.popleft()
        if first_deploy_day >= curr_deploy_day:
            cnt += 1
        else:
            answer.append(cnt)
            first_deploy_day = curr_deploy_day
            cnt = 1
    answer.append(cnt)
            
    return answer