function solution(n, a, b) {
  let answer = 0;

  let a_copy = a;
  let b_copy = b;

  while (a_copy !== b_copy) {
    a_copy = Math.ceil(a_copy / 2);
    b_copy = Math.ceil(b_copy / 2);
    answer++;
  }

  return answer;
}
