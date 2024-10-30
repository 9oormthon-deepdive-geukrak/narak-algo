function solution(enroll, referral, seller, amount) {
  // 판매원 별 판매 이익 구하기
  const profits = new Map(enroll.map((name, idx) => [name, 0]));

  // 추천인 연결하기
  const recommender = {};
  enroll.forEach((name, idx) => {
    recommender[name] = referral[idx];
  });

  // 배분하기
  seller.forEach((name, idx) => {
    let profit = amount[idx] * 100;

    do {
      let distribution = Math.floor(profit / 10);
      let remain = profit - distribution;
      profits.set(name, profits.get(name) + remain);

      name = recommender[name];
      profit = distribution;
    } while (profit > 0 && name !== "-");
  });

  return [...profits.values()];
}

// 시간 초과
// function solution(enroll, referral, seller, amount) {
//     // 판매원 별 판매 이익 구하기
//     const profits = new Map(enroll.map((name, idx) => [name, 0]));

//     // 추천인 연결하기
//     const recommender = {};
//     enroll.forEach((name, idx) => {
//         recommender[name] = referral[idx];
//     });

//     // 배분하기
//     seller.forEach((name, idx) => {
//         let profit = amount[idx] * 100;

//         do {
//             let distribution = Math.floor(profit / 10);
//             let remain = profit - distribution;
//             profits.set(name, profits.get(name) + remain);

//             name = recommender[name];
//             profit = distribution;
//         } while (name !== '-');
//     });

//     return [...profits.values()];
// }
