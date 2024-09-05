const solution = (N, stages) => {
  const fail = Array(N).fill(0);
  const challenge = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    for (const stage of stages) {
      if (stage >= i + 1) challenge[i]++;
      if (stage === i + 1) fail[i]++;
    }
  }

  const answer = challenge.map((v, i) => ({ stage: i + 1, rate: fail[i] / v }));

  return answer.sort((a, b) => b.rate - a.rate).map((v) => v.stage);
};
