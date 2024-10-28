const isMatch = (wantMap, discountMap) => {
  for (const [item, qty] of wantMap)
    if (discountMap.get(item) !== qty) return false;

  return true;
};

function solution(want, number, discount) {
  const wantMap = new Map();
  const discountMap = new Map();
  let answer = 0;

  // 초기화
  want.forEach((item, index) => wantMap.set(item, number[index]));

  for (let i = 0; i < 10; i++)
    discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);

  if (isMatch(wantMap, discountMap)) answer++;

  // 슬라이딩 윈도우
  for (let i = 10; i < discount.length; i++) {
    const prevItem = discount[i - 10];
    const newItem = discount[i];

    discountMap.set(prevItem, discountMap.get(prevItem) - 1);
    discountMap.set(newItem, (discountMap.get(newItem) || 0) + 1);

    if (discountMap.get(prevItem) === 0) discountMap.delete(prevItem);
    if (isMatch(wantMap, discountMap)) answer++;
  }

  return answer;
}

// function solution(want, number, discount) {
//   let answer = 0;
//   const shoppingCart = want
//     .reduce(
//       (acc, item, index) => [...acc, ...new Array(number[index]).fill(item)],
//       []
//     )
//     .sort();

//   for (let i = 0; i < discount.length; i++) {
//     const membership = discount.slice(i, i + 10).sort();

//     if (JSON.stringify(shoppingCart) === JSON.stringify(membership)) answer++;
//   }

//   return answer;
// }
