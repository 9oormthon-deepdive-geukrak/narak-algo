function solution(genres, plays) {
  const genresMap = genres.reduce((map, genre, id) => {
    if (!map.has(genre)) map.set(genre, { songs: [], totalPlays: 0 });
    const currGenre = map.get(genre);
    currGenre.songs.push({ id, play: plays[id] });
    currGenre.totalPlays += plays[id];
    return map;
  }, new Map());

  return [...genresMap.values()]
    .sort((a, b) => b.totalPlays - a.totalPlays)
    .map(({ songs }) =>
      songs
        .sort((a, b) => b.play - a.play || a.id - b.id)
        .slice(0, 2)
        .map(({ id }) => id)
    )
    .flat();
}
