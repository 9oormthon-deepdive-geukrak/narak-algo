const checkBracket = (arr) => {
  const stack = [];

  for (const v of arr) {
    if (v === "[" || v === "{" || v === "(") {
      stack.push(v);
    } else {
      if (stack.length === 0) return false;

      const last = stack.pop();

      switch (v) {
        case "]":
          if (last !== "[") return false;
          break;
        case "}":
          if (last !== "{") return false;
          break;
        case ")":
          if (last !== "(") return false;
          break;
      }
    }
  }

  return stack.length === 0;
};

const solution = (s) => {
  let answer = 0;
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    const temp = arr.shift();
    arr.push(temp);

    if (checkBracket(arr)) answer++;
  }

  return answer;
};
