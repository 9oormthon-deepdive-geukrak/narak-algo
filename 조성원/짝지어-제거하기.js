const checkPair = (arr) => {
  const stack = [];

  for (const v of arr) {
    if (stack.length === 0) {
      stack.push(v);
    } else {
      const last = stack.pop();
      if (last !== v) stack.push(last, v);
    }
  }

  return stack.length === 0 ? 1 : 0;
};

const solution = (s) => checkPair(s.split(""));
