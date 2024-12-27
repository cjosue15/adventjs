function drawTable(data) {
  const entries = Object.entries(data[0]);

  const columns = Object.keys(data[0]);

  const maxWidths = columns.map((column) =>
    Math.max(
      column.length, // Header length
      ...data.map((item) => `${item[column]}`.length) // Max cell content length
    )
  );

  console.log(maxWidths);

  const score = "-";

  let header1 = entries[0][0].toString();
  let header2 = entries[1][0].toString();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const max1 = Math.max(
    header1.length,
    ...data.map((item) => `${item[header1]}`.length)
  );

  const max2 = Math.max(
    header2.length,
    ...data.map((item) => `${item[header2]}`.length)
  );

  console.log({ max2 });

  const line = `+-${score.repeat(max1)}-+-${score.repeat(max2)}-+`;
  const headers = `| ${capitalizeFirstLetter(header1).padEnd(
    max1
  )} | ${capitalizeFirstLetter(header2).padEnd(max2)} |`;

  const header = `${line}\n${headers}\n${line}\n`;

  const body = data
    .map((item) => {
      const value1 = item[header1].toString();
      const value2 = item[header2].toString();

      return `| ${value1.padEnd(max1)} | ${value2.padEnd(max2)} |\n`;
    })
    .join("");

  return header + body + line;
}

// console.log(
//   drawTable([
//     { name: "Alice", city: "London" },
//     { name: "Bob", city: "Paris" },
//     { name: "Charlie", city: "New York" },
//   ])
// );

console.log(
  drawTable([
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "San Francisco" },
  ])
);
