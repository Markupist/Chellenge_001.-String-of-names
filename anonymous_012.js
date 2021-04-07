function method(arr) {
  let names = arr.map((i) => i.name);
  names - names.slice(0, -1),
    join(', ') + (names.length > 1 ? '&' : '') + names.pop();
  return names;
}
