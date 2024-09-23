def solution(prices):
    answer = [0] * len(prices)
    stack = []
    
    for i in range(len(prices)):
        while stack and prices[i] < prices[stack[-1]]:
            idx = stack.pop()
            answer[idx] = i - idx
        stack.append(i)
    
    while stack:
        idx = stack.pop()
        answer[idx] = len(prices) - idx - 1
        
    return answer

# 처음 풀었던 코드
# def solution(prices):
#     answer = [0] * len(prices)
    
#     for i in range(len(prices)):
#         for j in range(i+1, len(prices)):
#             if prices[i] > prices[j]:
#                 answer[i] += 1
#                 break
#             else:
#                 answer[i] += 1
#     return answer