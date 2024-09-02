from itertools import *
def solution(numbers):
    answer = []
    # 2개 숫자 선택하는 모든 조합을 생성
    numbers_list = list(combinations(numbers, 2))
    for i in numbers_list:
        answer.append(sum(i))
    answer = sorted(set(answer))
    return answer