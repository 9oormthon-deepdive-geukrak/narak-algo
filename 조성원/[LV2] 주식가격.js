// function solution(prices) {
//   const answer = [];
//
//   for (let i = 0; i < prices.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < prices.length; j++) {
//       count++;
//       if (prices[i] > prices[j]) break;
//     }
//     answer.push(count);
//   }
//
//   return answer;
// }

// function solution(prices) {
//   const answer = [];
//   const new_prices = [...prices].reverse();
//
//   while (new_prices.length) {
//     const price = new_prices.pop();
//     const new_prices_copy = [...new_prices];
//
//     let count = 0;
//     while (new_prices_copy.length) {
//       const next_price = new_prices_copy.pop();
//       count++;
//       if (price > next_price) break;
//     }
//
//     answer.push(count);
//   }
//
//   return answer;
// }

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return answer;
}
