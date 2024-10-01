function solution(participant, completion) {
  const runners = participant.slice(); // 복사본 생성

  for (const completor of completion)
    runners.splice(runners.indexOf(completor), 1); // 복사본 변경

  return runners[0]; // 복사본 반환
}
