// function solution(participant, completion) {
//   const runners = participant.slice(); // 복사본 생성

//   for (const completor of completion)
//     runners.splice(runners.indexOf(completor), 1); // 복사본 변경

//   return runners[0]; // 복사본 반환
// }

function solution(participant, completion) {
  const participant_copy = participant.slice();
  const completion_copy = completion.slice();

  participant_copy.sort();
  completion_copy.sort();

  for (let i = 0; i < completion_copy.length; i++)
    if (participant_copy[i] !== completion_copy[i]) return participant_copy[i];

  return participant_copy.at(-1);
}
