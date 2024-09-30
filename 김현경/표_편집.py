# 처음 작성한 코드 (정확성 다 맞지만 효율성 다 시간 초과)

# def solution(n, k, cmd):
#     answer = ''
#     table = [i for i in range(n)]
#     tmp = table.copy() # tmp == table을 하면 참조를 가지게 돼서 tmp변경하면 table도 변경됨
    
#     deleted = []
    
#     for i in range(len(cmd)):
#         c = cmd[i].split()
#         if c[0] == 'D':
#             k += int(c[1])
#         elif c[0] == 'U':
#             k -= int(c[1])
#         elif c[0] == 'C':
#             deleted.append((k, tmp[k])) # 인덱스, 삭제할 값 저장
#             tmp.pop(k)
#             if k == len(tmp):
#                 k -= 1
#         elif c[0] == 'Z':
#             restored_index, restored_value = deleted.pop() # 복구할 인덱스, 값 가져오기
#             tmp.insert(restored_index, restored_value) # 복구할 인덱스에 값 넣기
#             if k >= restored_index:
#                 k += 1

#     for i in table:
#         if i in tmp:
#             answer+='O'
#         else:
#             answer+='X'
    
#     return answer

class Node:
    def __init__(self, index):
        self.index = index  # 현재 노드의 인덱스
        self.prev = None  # 이전 노드를 가리킬 포인터
        self.next = None  # 다음 노드를 가리킬 포인터

def solution(n, k, cmd):
    nodes = [Node(i) for i in range(n)]
    
    # 노드의 연결
    for i in range(1, n):
        nodes[i-1].next = nodes[i]
        nodes[i].prev = nodes[i-1]
        
    # 현재 선택된 노드
    curr = nodes[k]
    deleted = []
    
    for c in cmd:
        move = c.split()
        if move[0] == 'U':
            steps = int(move[1])
            for _ in range(steps):
                curr = curr.prev
        elif move[0] == 'D':
            steps = int(move[1])
            for _ in range(steps):
                curr = curr.next
        elif move[0] == 'C':
            deleted.append(curr)
            if curr.prev:
                curr.prev.next = curr.next
            if curr.next:
                curr.next.prev = curr.prev
            curr = curr.next if curr.next else curr.prev
        elif move[0] == 'Z':
            restore = deleted.pop()
            
            if restore.prev:
                restore.prev.next = restore
            if restore.next:
                restore.next.prev = restore
    
    answer = ['O'] * n
    for node in deleted:
        answer[node.index] = 'X'
        
    return ''.join(answer)
