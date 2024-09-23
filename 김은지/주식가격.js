function solution(prices) {
  const afterPrices = [];
  const terms = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    let term = 0;
    for (let j = afterPrices.length - 1; j >= 0; j--) {
      term++;
      if (prices[i] > afterPrices[j]) break;
    }
    terms.push(term);
    afterPrices.push(prices[i]);
  }

  return terms.reverse();
}
