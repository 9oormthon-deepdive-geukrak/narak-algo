# 1의 자리 숫자가 5보다 크면 올림, 작으면 내림, 5인 경우에는 10의 자리 숫자를 기준으로 선택

def solution(storey):
    answer = 0

    while (storey > 0):
        curr_num = storey % 10 # 1의 자리 수 추출
        
        if curr_num > 5: 
            answer += 10 - curr_num
            storey += 10 - curr_num

        elif curr_num < 5:
            answer += curr_num #버튼 누른 횟수 추가 
            storey -= curr_num
        else:
            if ((storey//10) % 10 >= 5):
                answer += 10 - curr_num
                storey += 10 - curr_num
            else:
                answer += curr_num 
                storey -= curr_num
        storey //= 10 # 현재 처리한 1의 자리 숫자를 제거 하고 다음 자리 수로 이동
        
    return answer