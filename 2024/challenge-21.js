function treeHeight(tree) {
  if (tree === null) return 0; // Base case: height of an empty tree is 0
  const leftHeight = treeHeight(tree.left); // Recursively find height of left subtree
  const rightHeight = treeHeight(tree.right); // Recursively find height of right subtree

  return 1 + Math.max(leftHeight, rightHeight);
}

const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

console.log(treeHeight(tree));
