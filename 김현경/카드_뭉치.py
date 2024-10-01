from collections import deque

def solution(cards1, cards2, goal):
    de_cards1 = deque(cards1)
    de_cards2 = deque(cards2)
    
    for g in goal:
        if len(de_cards1) > 0 and de_cards1[0] == g:
            de_cards1.popleft()
        elif len(de_cards2) > 0 and de_cards2[0] == g:
            de_cards2.popleft()
        else:
            return "No"
    
    return "Yes"