from collections import Counter
def solution(want, number, discount):
    answer = 0
    want_dict = {}
    for i in range(len(want)):
        want_dict[want[i]] = number[i]

    for i in range(len(discount)-9):
        if want_dict == Counter(discount[i:i+10]):
            answer += 1
            
    return answer

# 처음 풀이
# def solution(want, number, discount):
#     answer = 0
#     want_dict = {}
    
#     for i in range(len(want)):
#         want_dict[want[i]] = number[i]

#     for i in range(len(discount) - 9):
#         tmp_dict = {}

#         for j in range(i, i + 10):
#             if discount[j] in tmp_dict:
#                 tmp_dict[discount[j]] += 1
#             else:
#                 tmp_dict[discount[j]] = 1

#         if want_dict == tmp_dict:
#             answer += 1
            
#     return answer


