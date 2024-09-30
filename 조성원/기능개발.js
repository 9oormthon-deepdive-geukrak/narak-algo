// const solution = (progresses, speeds) => {
//   const answer = [];

//   while (progresses.length > 0) {
//     const days = Math.ceil((100 - progresses[0]) / speeds[0]);
//     for (let i = 0; i < progresses.length; i++) {
//       progresses[i] += speeds[i] * days;
//     }

//     let count = 0;
//     while (progresses[0] >= 100) {
//       progresses.shift();
//       speeds.shift();
//       count++;
//     }
//     answer.push(count);
//   }

//   return answer;
// };

const solution = (progresses, speeds) => {
  const answer = [0];
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let deploy = days[0];
  while (days.length > 0) {
    if (days[0] <= deploy) {
      answer[answer.length - 1]++;
    } else {
      deploy = days[0];
      answer.push(1);
    }
    days.shift();
  }

  return answer;
};
