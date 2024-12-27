function organizeShoes(shoes) {
  const map = {};
  for (let index = 0; index < shoes.length; index++) {
    const size = shoes[index].size;
    const type = shoes[index].type;

    if (!map[size]) {
      map[size] = { I: 0, R: 0 };
    }
    map[size][type] += 1;
  }

  const result = [];

  for (const size in map) {
    const element = map[size];
    const pairs = Math.min(element.I, element.R);
    result.push(...Array(pairs).fill(Number(size)));
  }

  return result;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log(organizeShoes(shoes));
