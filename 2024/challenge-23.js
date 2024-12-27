function findMissingNumbers(nums) {
  const set = new Set(nums);
  const max = Math.max(...set);
  const missing = [];

  for (let i = 1; i <= max; i++) {
    const element = i;
    if (!set.has(element)) {
      missing.push(element);
    }
  }

  return missing;
}

console.log(findMissingNumbers([4, 8, 7, 2]));
