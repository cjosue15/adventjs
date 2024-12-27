function execute(code) {
  const symbols = code.split("");

  let memory = 0;
  let bucleIndex = 0;

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];

    if (symbol === ">") {
      continue;
    }

    if (symbol === "{") {
      if (memory === 0) {
        const newSymbols = [...symbols];
        newSymbols.splice(0, i + 1);
        const closeIndex = newSymbols.indexOf("}");
        i = i + closeIndex + 1;
      } else {
        continue;
      }
    }

    if (symbol === "[") {
      if (memory === 0) {
        const newSymbols = [...symbols];
        newSymbols.splice(0, i + 1);
        const closeIndex = newSymbols.indexOf("]");
        i = i + closeIndex + 1;
      } else {
        i++;
        bucleIndex = i;

        while (memory !== 0) {
          if (symbols[i] === "+") {
            memory++;
          }

          if (symbols[i] === "-") {
            memory--;
          }

          if (symbols[i] === "]") {
            i = bucleIndex;
            continue;
          }

          i++;
        }

        i = bucleIndex - 2;
      }
    }

    if (symbol === "+") {
      memory++;
    }

    if (symbol === "-") {
      memory--;
    }
  }

  return memory;
}

// console.log(execute("+++"));
// console.log(execute("+--"));
// console.log(execute(">+++[-]"));
// console.log(execute("------[+]++"));
// console.log(execute(">>>+{++}"));
// console.log(execute("{+}{+}{+}"));
console.log(execute("+{[-]+}+"));
