function fixPackages(packages) {
  const result = [];

  while (packages.includes(")")) {}

  return result.join("");
}

console.log(fixPackages("a(cb)de"));
