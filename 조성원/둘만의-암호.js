/**
 * alphabets 배열에서 skip 알파벳을 제외하고,
 * index만큼 밀어서 새로운 문자열을 반환
 */

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const solution = (s, skip, index) => {
  const filtered = alphabets.filter((alphabet) => !skip.includes(alphabet));

  return [...s].reduce(
    (acc, cur) =>
      acc + filtered[(filtered.indexOf(cur) + index) % filtered.length],
    ""
  );
};
