function calculatePrice(ornaments) {
  const VALUES = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let value = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const current = ornaments.charAt(i);
    const next = ornaments.charAt(i + 1);

    if (VALUES[current] < VALUES[next]) {
      value += VALUES[current] * -1;
    } else {
      value += VALUES[current];
    }

    console.log(value);
  }

  return value || undefined;
}

console.log(calculatePrice("*o"));
