function solution(progresses, speeds) {
  const completeTime = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  let currDay = completeTime[0];
  const deployCnts = [];
  while (completeTime.length > 0) {
    let cnt = 0;

    while (currDay >= completeTime[0]) {
      completeTime.shift();
      cnt++;
    }

    deployCnts.push(cnt);
    currDay = completeTime[0];
  }

  return deployCnts;
}
