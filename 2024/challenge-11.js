function decodeFilename(filename) {
  const lastDotIndex = filename.split("").findLastIndex((dot) => dot === ".");
  console.log(lastDotIndex);
  return "";
}

decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
