/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  let index = 0;
  let value = 0;
  do {
    console.log(stables);
    const rein = reindeer[index];
    const minStable = Math.min(...stables);

    value += Math.abs(minStable - rein);
    const indexToRemove = stables.indexOf(minStable);
    stables.splice(indexToRemove, 1);
    index++;
  } while (index < reindeer.length && stables.length > 0);

  return value;
}

// function minMovesToStables(reindeer, stables) {
//   let index = 0;
//   let value = 0;

//   do {
//     const rein = reindeer[index];
//     const minStable = Math.min(...stables);

//     // Add the absolute difference (correct calculation of moves)
//     value += Math.abs(minStable - rein);

//     // Remove the stable that was just used (correct splice logic)
//     const indexToRemove = stables.indexOf(minStable);
//     stables.splice(indexToRemove, 1);

//     index++;
//   } while (index < reindeer.length && stables.length > 0);

//   return value;
// }

console.log(minMovesToStables([2, 6, 9], [3, 8, 5]));
