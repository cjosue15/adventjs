function distributeWeight(weight) {
  let target = weight;
  let str = "";

  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const weights = [10, 5, 2, 1];

  let boxCount = {};
  let lastRoof = 0;

  for (let weight of weights) {
    const boxes = Math.floor(target / weight);
    if (boxes > 0) {
      boxCount[weight] = boxes;
    }

    target %= weight;

    if (target === 0) break;
  }

  const sorted = Object.keys(boxCount)
    .map((item) => Number(item))
    .sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const box = sorted[i];
    const type = Number(box);
    const quantity = boxCount[type];

    let index = 0;

    while (index < quantity) {
      if (type === 1 || type === 2) {
        const [roof, under] = boxRepresentations[type];

        const newRoof =
          i === 0 && index === 0
            ? roof.substring(lastRoof)
            : roof.substring(lastRoof).trimEnd();

        const boxString = `${newRoof}\n${under}`;
        str += boxString;
        lastRoof = roof.length;
      } else {
        const [roof, laterals, under] = boxRepresentations[type];

        const newRoof =
          i === 0 && index === 0
            ? roof.substring(lastRoof)
            : roof.substring(lastRoof).trimEnd();

        const boxString = `${newRoof}\n${laterals}\n${under}`;
        str += boxString;
        lastRoof = roof.length;
      }
      index++;
    }

    index = 0;
  }

  return str;
}

console.log(distributeWeight(18));
