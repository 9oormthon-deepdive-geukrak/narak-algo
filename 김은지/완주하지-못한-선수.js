function solution(participant, completion) {
  const map = new Map();

  for (const person of participant) {
    map.set(person, (map.get(person) || 0) + 1);
  }

  for (const person of completion) {
    map.set(person, map.get(person) - 1);
    if (map.get(person) === 0) map.delete(person);
  }

  return map.keys().next().value;
}
