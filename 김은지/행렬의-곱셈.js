function solution(arr1, arr2) {
  return arr1.map((row) => arr2[0].map((_, j) => row.reduce((sum, val, i) => sum + val * arr2[i][j], 0)));
}
