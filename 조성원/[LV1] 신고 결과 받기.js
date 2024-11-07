function solution(id_list, report, k) {
  const reportMap = new Map(id_list.map((id) => [id, new Set()]));
  const countMap = new Map();

  for (const r of report) {
    const [from, to] = r.split(" ");
    reportMap.get(from).add(to);
  }

  for (const reports of reportMap.values())
    for (const to of reports) countMap.set(to, (countMap.get(to) || 0) + 1);

  const suspendedUsers = new Set(
    [...countMap.entries()].filter(([, v]) => v >= k).map(([id]) => id)
  );

  return id_list.map((id) => {
    let count = 0;
    for (const to of reportMap.get(id)) if (suspendedUsers.has(to)) count++;
    return count;
  });
}
