function removeSnow(s) {
  let stack = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(removeSnow("zxxzoz"));
