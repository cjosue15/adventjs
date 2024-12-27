function organizeInventory(inventory) {
  if (inventory.length === 0) return {};

  const map = new Map();

  for (const toy of inventory) {
    const { category, name, quantity } = toy;
    if (!map.has(category)) {
      map.set(category, { [name]: quantity });
    } else {
      const value = map.get(category);

      value[name] = (value[name] || 0) + quantity;
    }
  }

  return Object.fromEntries(map);
}

console.log(
  organizeInventory([
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
  ])
);
