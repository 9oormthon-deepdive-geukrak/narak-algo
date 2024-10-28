const getCombination = (arr, num) => {
  const combination = (prefix = "", start = 0) => {
    if (prefix.length === num) return result.push(prefix);

    for (let i = start; i < arr.length; i++)
      combination(prefix + arr[i], i + 1);
  };

  const result = [];
  combination();
  return result;
};

function solution(orders, course) {
  const answer = [];

  for (const courseLength of course) {
    const courseMap = new Map();

    for (const order of orders) {
      if (order.length < courseLength) continue;

      const orderArr = order.split("").sort();
      const combinationArr = getCombination(orderArr, courseLength);
      for (const combination of combinationArr)
        courseMap.set(combination, (courseMap.get(combination) || 0) + 1);
    }

    const max = Math.max(...courseMap.values());

    if (max < 2) continue;

    courseMap.forEach((value, key) => {
      if (value === max) answer.push(key);
    });
  }

  return answer.sort();
}
