function inBox(box) {
  const ASTERISK = "*";

  const isInEdge =
    box.at(0).includes(ASTERISK) || box.at(-1).includes(ASTERISK);

  if (isInEdge) return false;

  const newBox = box.toSliced(1, -1);

  const index = newBox.findIndex((element) => element.includes(ASTERISK));

  if (index === -1) return false;

  const char = box.at(index);

  if (char.at(0) === ASTERISK || char.at(-1) === ASTERISK) {
    return false;
  }

  return true;
}
