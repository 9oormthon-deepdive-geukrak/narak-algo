function solution(enroll, referral, seller, amount) {
  const tree = new Map();

  enroll.forEach((name, idx) =>
    tree.set(name, { parent: referral[idx], profit: 0 })
  );

  seller.forEach((name, idx) => {
    let profit = amount[idx] * 100;
    let current = name;

    while (profit > 0) {
      const parent = tree.get(current).parent;
      const share = Math.floor(profit * 0.1);

      tree.get(current).profit += profit - share;
      profit = share;
      current = parent;

      if (parent === "-") break;
    }
  });

  return enroll.map((name) => tree.get(name).profit);
}
