/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const missing = [];

  for (const gift of expected) {
    const index = received.indexOf(gift);

    if (index === -1) {
      missing.push(gift);
    } else {
      received.splice(index, 1);
    }
  }

  const countElemnts = (array) =>
    array.reduce((acumm, current) => {
      acumm[current] = (acumm[current] || 0) + 1;
      return acumm;
    }, {});

  return {
    missing: countElemnts(missing),
    extra: countElemnts(received),
  };
}

console.log(
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"]
  )
);

// console.log(
//   fixGiftList(
//     ["bear", "bear", "car"],
//     ["bear", "car", "puzzle", "bear", "car", "car"]
//   )
// );
