def check(s):
    stack = []
    
    for i in s:
        if i in ['(', '[', '{']:
            stack.append(i)
        else:
            if not stack: # 스택이 비었는데 닫는 괄호가 나왔을 때
                return False
            end = stack.pop()
            if i == ')' and end != '(':
                return False
            elif i == ']' and end != '[':
                return False
            elif i == '}' and end != '{':
                return False
    return len(stack) == 0


def solution(s):
    answer = 0
    n = len(s)
    
    for i in range(n):
        rotated = s[i:] + s[:i]
        if check(rotated):
            answer += 1
    return answer
    