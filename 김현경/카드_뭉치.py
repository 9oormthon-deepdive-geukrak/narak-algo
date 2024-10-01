# 처음 풀이
# def solution(cards1, cards2, goal):
#     answer = []
#     i, j = 0, 0
#     for g in range(len(goal)):
#         if i < len(cards1) and goal[g] == cards1[i]:
#             answer.append(cards1[i])
#             i += 1
#         elif j < len(cards2) and goal[g] == cards2[j]:
#             answer.append(cards2[j])
#             j += 1
    
#     return "Yes" if goal == answer else "No"

from collections import deque

def solution(cards1, cards2, goal):
    answer = []
    de_cards1 = deque(cards1)
    de_cards2 = deque(cards2)
    
    for g in goal:
        if len(de_cards1) > 0 and de_cards1[0] == g:
            c1 = de_cards1.popleft()
            answer.append(c1)
        elif len(de_cards2) > 0 and de_cards2[0] == g:
            c2 = de_cards2.popleft()
            answer.append(c2)
            
    print(answer)
    
    return "Yes" if goal == answer else "No"