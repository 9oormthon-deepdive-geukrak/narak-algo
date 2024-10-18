const MEMBERSHIP_VALID_DAYS = 10;

function solution(want, number, discount) {
  let startDate = 0;
  let endDate = startDate + MEMBERSHIP_VALID_DAYS;

  const wantItems = want.reduce((acc, item, idx) => acc.set(item, number[idx]), new Map());
  const currTermItems = discount
    .slice(startDate, endDate)
    .reduce((acc, item) => acc.set(item, (acc.get(item) || 0) + 1), new Map());

  let cnt = 0;

  while (endDate <= discount.length) {
    if ([...wantItems.entries()].every(([key, value]) => currTermItems.get(key) >= value)) {
      cnt++;
    }

    currTermItems.set(discount[startDate], currTermItems.get(discount[startDate]) - 1);
    startDate += 1;
    currTermItems.set(discount[endDate], (currTermItems.get(discount[endDate]) || 0) + 1);
    endDate += 1;
  }

  return cnt;
}
