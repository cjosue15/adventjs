function compile(instructions) {
  let index = 0;

  const map = new Map();

  while (index < instructions.length) {
    const instruction = instructions[index];
    const command = instruction.substring(0, 3);

    if (command === "MOV") {
      const [_, value, register] = instruction.split(" ");

      if (isNaN(Number(value))) {
        // change register
        const oldValue = map.get(value) || 0;
        map.set(register, oldValue);
      } else {
        // set new register
        map.set(register, Number(value));
      }
    } else if (command === "INC") {
      const [_, register] = instruction.split(" ");
      const value = map.get(register);
      map.set(register, (value || 0) + 1);
    } else if (command === "DEC") {
      const register = instruction.split(" ")[1];
      const value = map.get(register);
      map.set(register, (value || 0) - 1);
    } else {
      // jumps
      const register = instruction.split(" ")[1];
      const value = instruction.split(" ")[2];

      if ((map.get(register) || 0) === 0) {
        index = Number(value);
        continue;
      }
    }
    index++;
  }

  return map.get("A");
}

// const instructions = ["MOV 0 A", "INC A"];

const instructions = [
  "MOV -1 C", // copies -1 to register 'C',
  "INC C", // increments the value of register 'C'
  "JMP C 1", // jumps to the instruction at index 1 if 'C' is 0
  "MOV C A", // copies register 'C' to register 'A',
  "INC A", // increments the value of register 'A'
];

// const instructions = ["INC A", "INC A", "DEC A", "MOV A B"];

// const instructions = ["MOV 5 B", "DEC B", "MOV B A", "INC A"];

// const instructions = [
//   "INC C", // increments the value of register 'C'
//   "DEC B", // jumps to the instruction at index 1 if 'C' is 0
//   "MOV C Y", // copies register 'C' to register 'A',
//   "INC y", // increments the value of register 'A'
// ];

// const instructions = ["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"];

// const instructions = [
//   "MOV 3 C",
//   "DEC C",
//   "DEC C",
//   "DEC C",
//   "JMP C 3",
//   "MOV C A",
// ];

console.log(compile(instructions));
