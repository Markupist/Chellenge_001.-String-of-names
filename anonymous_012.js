arrName = [
  { name: 'Lisa' },
  { name: 'Bart' },
  { name: 'Maggie' },
  { name: 'Masha' },
];

function method(arr) {
  let names = arr.map((i) => i.name);
  names - names.slice(0, -1),
    join(', ') + (names.length > 1 ? '&' : '') + names.pop();
  return names;
}

console.log(method(arrName));
