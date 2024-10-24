const solution = (record) => {
  const answer = [];
  const users = new Map();

  for (const string of record) {
    const data = string.split(" ");

    switch (data[0]) {
      case "Enter":
        users.set(data[1], data[2]);
        break;
      case "Change":
        users.set(data[1], data[2]);
        break;
      default:
        break;
    }
  }

  for (const string of record) {
    const data = string.split(" ");

    switch (data[0]) {
      case "Enter":
        answer.push(`${users.get(data[1])}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${users.get(data[1])}님이 나갔습니다.`);
        break;
      default:
        break;
    }
  }

  return answer;
};
