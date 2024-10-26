const calculateTotalPlays = (genrePlays, genre, play) =>
  genrePlays.has(genre) ? genrePlays.get(genre).totalPlays + play : play;

const calculatePlays = (genrePlays, genre, index, play) =>
  genrePlays.has(genre)
    ? genrePlays
        .get(genre)
        .plays.concat({ id: index, plays: play })
        .sort((a, b) => b.plays - a.plays)
        .slice(0, 2)
    : [{ id: index, plays: play }];

function solution(genres, plays) {
  const genrePlays = new Map();

  genres.forEach((genre, index) => {
    genrePlays.set(genre, {
      totalPlays: calculateTotalPlays(genrePlays, genre, plays[index]),
      plays: calculatePlays(genrePlays, genre, index, plays[index]),
    });
  });

  return [...genrePlays.entries()]
    .sort((a, b) => b[1].totalPlays - a[1].totalPlays)
    .map((a) => a[1].plays)
    .reduce((acc, cur) => acc.concat(cur.map((a) => a.id)), []);
}
