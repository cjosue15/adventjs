function isTreesSynchronized(tree1, tree2) {
  function checkSync(node1, node2) {
    // Case when both nodes are null or undefined
    if (!node1 && !node2) return true;
    // Case when only one node is null or undefined
    if (!node1 || !node2) return false;
    // Compare values
    if (node1.value !== node2.value) return false;
    // Recursively check subtrees, but crossing left and right
    return (
      checkSync(node1.left, node2.right) && checkSync(node1.right, node2.left)
    );
  }

  const isSynchronized = checkSync(tree1, tree2);
  return [isSynchronized, tree1?.value || null];
}

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

console.log(isTreesSynchronized(tree1, tree2));
