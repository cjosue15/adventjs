function isRobotBack(moves) {
  const modifiers = ["*", "!", "?"];

  let [initialX, initialY] = [0, 0];

  let [x, y] = [0, 0];

  // [x,y]
  const MOVES = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  let index = 0;

  while (index < moves.length) {
    let mov = moves.charAt(index);

    if (modifiers.includes(mov)) {
      const previous = moves.charAt(index - 1);
      const next = moves.charAt(index + 1);

      switch (mov) {
        case "!":
          const newMov =
            next === "U" ? "D" : next === "D" ? "U" : next === "R" ? "L" : "R";

          const str = moves.split("");

          str[index + 1] = newMov;
          moves = str.join("");

          [x, y] = MOVES[newMov];
          initialX += x;
          initialY += y;

          index += 2;
          break;
        case "?":
          const value = moves.substring(0, index);
          if (value.includes(next)) {
            index += 2;
            console.log(index);
            continue;
          }
          [x, y] = MOVES[next];
          initialX += x;
          initialY += y;
          index += 2;
          break;
        default:
          [x, y] = MOVES[next];
          initialX += x;
          initialY += y;
          index++;
          break;
      }

      continue;
    }

    [x, y] = MOVES[mov];

    initialX += x;
    initialY += y;

    index++;
  }

  return initialX === 0 && initialY === 0 ? true : [initialX, initialY];
}

// console.log(isRobotBack("R")); // [1, 0]
// console.log(isRobotBack("RL")); // true
// console.log(isRobotBack("RLUD")); // true
// console.log(isRobotBack("*RU")); // [2, 1]
// console.log(isRobotBack("R*U")); // [1, 2]
// console.log(isRobotBack("LLL!R")); // [-4, 0]
// console.log(isRobotBack("R?R")); // [1, 0]
// console.log(isRobotBack("U?D")); // true
// console.log(isRobotBack("R!L")); // [2,0]
// console.log(isRobotBack("U!D")); // [0,2]
// console.log(isRobotBack("R?L")); // true
// console.log(isRobotBack("U?U")); // [0,1]
// console.log(isRobotBack("*U?U")); // [0,2]
// console.log(isRobotBack("U?D?U")); // true

console.log(isRobotBack("R?R"));
