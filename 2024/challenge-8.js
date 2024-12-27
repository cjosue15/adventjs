function drawRace(indices, length) {
  let result = [];
  const snow = "~".repeat(length);
  const blank = " ";

  for (let i = 0; i < indices.length; i++) {
    const position = indices[i];
    const index =
      Math.sign(position) === 1 ? position : length - Math.abs(position);
    const race =
      index === length ? snow : snow.split("").with(index, "r").join("");

    result = [
      ...result,
      `${blank.repeat(indices.length - 1 - i)}${race} /${i + 1}`,
    ];
  }

  const str = result.map((item) => `${item}\n`).join("");
  return str.substring(0, str.length - 1);
}

console.log(drawRace([0, 5, -3], 10));
