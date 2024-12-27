function moveTrain(board, mov) {
  const engine = "@";
  const blank = "·";
  const gift = "*";
  const container = "o";
  const engineIndex = board.findIndex((item) => item.includes(engine));

  const nextIndex =
    mov === "U" ? engineIndex - 1 : mov === "D" ? engineIndex + 1 : engineIndex;

  if (nextIndex < 0 || nextIndex > board.length) return "crash";

  const engineValue = board.at(engineIndex);

  const position = engineValue.split("").findIndex((item) => item === engine);

  if (mov === "L" || mov === "R") {
    const next = engineValue.charAt(position + (mov === "R" ? 1 : -1));

    if (!next || next === container) return "crash";
    if (next === blank) return "none";
    return "eat";
  }

  const step = board.at(nextIndex);
  const value = step.at(position);

  if (value === blank) return "none";
  if (value === gift) return "eat";
  return "crash";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "D"));
