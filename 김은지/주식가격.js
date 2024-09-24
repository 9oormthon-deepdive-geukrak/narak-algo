// function solution(prices) {
//   const afterPrices = [];
//   const terms = [];

//   for (let i = prices.length - 1; i >= 0; i--) {
//     let term = 0;
//     for (let j = afterPrices.length - 1; j >= 0; j--) {
//       term++;
//       if (prices[i] > afterPrices[j]) break;
//     }
//     terms.push(term);
//     afterPrices.push(prices[i]);
//   }

//   return terms.reverse();
// }

function solution(prices) {
  const durations = Array(prices.length).fill(0);
  const waitingPriceIdx = [];

  prices.forEach((currPrice, currentIdx) => {
    while (waitingPriceIdx.length > 0 && prices[waitingPriceIdx.at(-1)] > currPrice) {
      const prevIdx = waitingPriceIdx.pop();
      durations[prevIdx] = currentIdx - prevIdx;
    }
    waitingPriceIdx.push(currentIdx);
  });

  while (waitingPriceIdx.length > 0) {
    const idx = waitingPriceIdx.pop();
    durations[idx] = prices.length - 1 - idx;
  }

  return durations;
}
