/* function solution(progresses, speeds) {
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
} */

function solution(progresses, speeds) {
  const completeTimes = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  let deployDay = completeTimes[0];
  const deployGroupCnts = [];
  let deployGroupCnt = 0;

  for (const completeTime of completeTimes) {
    if (deployDay >= completeTime) {
      deployGroupCnt++;
      continue;
    }

    deployGroupCnts.push(deployGroupCnt);
    deployGroupCnt = 1;
    deployDay = completeTime;
  }

  deployGroupCnts.push(deployGroupCnt);

  return deployGroupCnts;
}
