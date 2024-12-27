function detectBombs(grid) {
  const result = grid.map((row, rowIndex) => {
    return row.map((_, cellIndex) => {
      // left
      const leftValue = row[cellIndex + 1] === true ? 1 : 0;
      // rigth
      const rigthValue = row[cellIndex - 1] === true ? 1 : 0;
      // up
      const upValue = grid[rowIndex - 1]?.[cellIndex] === true ? 1 : 0;
      // down
      const downValue = grid[rowIndex + 1]?.[cellIndex] === true ? 1 : 0;

      const leftBottomDiagonal =
        grid[rowIndex + 1]?.[cellIndex - 1] === true ? 1 : 0;
      const rigthBottomDiagonal =
        grid[rowIndex + 1]?.[cellIndex + 1] === true ? 1 : 0;

      const leftUpDiagonal =
        grid[rowIndex - 1]?.[cellIndex + 1] === true ? 1 : 0;
      const rigthUpDiagonal =
        grid[rowIndex - 1]?.[cellIndex - 1] === true ? 1 : 0;

      return (
        leftValue +
        rigthValue +
        upValue +
        downValue +
        leftBottomDiagonal +
        leftUpDiagonal +
        rigthBottomDiagonal +
        rigthUpDiagonal
      );
    });
  });

  return result;
}

console.log(
  detectBombs([
    [false, true, false],
    [true, false, true],
    [false, true, false],
  ])
);
