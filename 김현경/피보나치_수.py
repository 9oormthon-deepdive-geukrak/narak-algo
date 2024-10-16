def solution(n):
    a, b = 0, 1 # a는 0번째 피보나치 수, b는 1번째 피보나치 수
    
    for _ in range(2, n + 1):
        a, b = b, (a + b) % 1234567
        
    return b

# 처음 작성한 코드
# def solution(n):
#     answer = []
    
#     for i in range(n + 1):
#         if i == 0 or i == 1:
#             answer.append(i)
#         else:
#             answer.append((answer[i - 1] + answer[i - 2]) % 1234567)
    
#     return answer[-1]