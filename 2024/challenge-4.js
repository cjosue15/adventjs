function createXmasTree(height, ornament) {
  if (height < 1 || height > 100) return "";

  const blank = "_";
  let body = "";

  const max = 2 * height - 1;

  for (let index = 1; index <= height; index++) {
    const size = 2 * index - 1;
    const repeatBlank = (max - size) / 2;
    const under = blank.repeat(repeatBlank);

    body += `${under}${ornament.repeat(size)}${under}\n`;
  }

  const footer = `${blank.repeat((max - 1) / 2)}#${blank.repeat(
    (max - 1) / 2
  )}`;

  return `${body}${footer}\n${footer}`;
}

console.log(createXmasTree(5, "*"));
