def solution(board, moves):
    doll_cnt = 0 # 터트린 인형의 개수
    stack = [] # 뽑은 인형 담는 스택
    
    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                stack.append(board[j][i-1])
                board[j][i-1] = 0
                break
        if len(stack) > 1 and stack[-1] == stack[-2]:
            stack.pop()
            stack.pop()
            doll_cnt += 2
    return doll_cnt