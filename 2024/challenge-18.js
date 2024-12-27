function findInAgenda(agenda, phone) {
  const items = agenda.split("\n");
  const row = items.filter((item) => item.includes(phone));

  if (row.length === 0 || row.length > 1) return null;

  const info = row.at(0);

  const regex = /<(.*?)>/;

  const [match, name] = regex.exec(info);

  const plusIndex = info.indexOf("+");

  const newValue = info.split("").toSpliced(plusIndex, 15).join("");

  const matchIndex = newValue.indexOf(match);

  const address = newValue
    .split("")
    .toSpliced(matchIndex, match.length)
    .join("");

  return { name, address: address.trim() };
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

// console.log(findInAgenda(agenda, "600-987"));
// findInAgenda(agenda, "1-800-555");
// console.log(findInAgenda(agenda, "111"));
console.log(findInAgenda(agenda, "1"));
