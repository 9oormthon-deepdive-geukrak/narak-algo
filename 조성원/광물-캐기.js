const solution = (picks, minerals) => {
  let answer = 0;

  // 남아있는 곡괭이의 총 개수를 구하는 함수
  const getTotalPicks = () => picks.reduce((acc, cur) => acc + cur, 0);

  // 광물을 5개씩 묶어서 배열로 만든다.
  const chunks = [];
  for (let i = 0; i < minerals.length; i += 5)
    chunks.push(minerals.slice(i, i + 5));

  // 각 청크의 피로도를 계산
  chunks.forEach((chunk, index) => {
    const fatigue = chunk.reduce(
      (acc, cur) => acc + (cur === "diamond" ? 25 : cur === "iron" ? 5 : 1),
      0
    );

    chunks[index] = {
      chunk,
      fatigue,
    };
  });

  // 곡괭이가 부술 수 있는 청크의 수를 기준으로 내림차순 정렬
  chunks.splice(getTotalPicks());
  chunks.sort((a, b) => b.fatigue - a.fatigue);

  // 피로도 = 광물 경도 / 곡괭이 경도
  // 내림차순으로 정렬했으므로 다이아몬드 곡괭이부터 사용해서 광물을 캔다.
  while (getTotalPicks() > 0 && chunks.length > 0) {
    let hardness = 0;

    if (picks[0] > 0) {
      picks[0]--;
      hardness = 25;
    } else if (picks[1] > 0) {
      picks[1]--;
      hardness = 5;
    } else {
      picks[2]--;
      hardness = 1;
    }

    answer += chunks[0].chunk.reduce(
      (acc, cur) =>
        acc +
        (cur === "diamond"
          ? 25 / hardness
          : cur === "iron"
          ? Math.ceil(5 / hardness)
          : 1),
      0
    );

    chunks.shift();
  }

  return answer;
};
