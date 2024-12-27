function createFrame(names) {
  const space = " ";
  const asterisk = "*";
  const longestName = Math.max(...names.map((name) => name.length));
  const line = asterisk.repeat(longestName + 4);
  const framedNames = names
    .map((name) => {
      const padding = space.repeat(longestName - name.length);
      return `${asterisk} ${name}${padding} ${asterisk}`;
    })
    .join("\n");

  return `${line}\n${framedNames}\n${line}`;
}

const value = createFrame(["midu", "madeval", "educalvolpz"]);
console.log(value);
