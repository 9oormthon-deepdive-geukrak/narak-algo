def solution(arr1, arr2):
    # arr1의 행 수 * arr2의 열 수 크기의 0으로 초기화된 2차원 배열 생성
    answer = [[0] * len(arr2[0]) for _ in range(len(arr1))] 
    
    for i in range(len(arr1)): # arr1의 행
        for j in range(len(arr2[0])): # arr2의 열
            for k in range(len(arr2)): # arr1의 i번째 행의 k번째 원소와 arr2의 k번째 행의 j번째 곱셈
                answer[i][j] += arr1[i][k] * arr2[k][j]
                
    return answer

# 다른 방법
# import numpy as np
# def solution(arr1, arr2):
#     np_arr1 = np.array(arr1)
#     np_arr2 = np.array(arr2)
#     result = np.matmul(np_arr1, np_arr2)

#     return result.tolist()