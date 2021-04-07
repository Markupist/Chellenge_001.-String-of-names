arrName = [
  { name: 'Lisa' },
  { name: 'Bart' },
  { name: 'Maggie' },
  { name: 'Masha' },
];

function method(arr) {
  let names = arr.map((i) => i.name);
  names.length > 1
    ? (names = names.slice(0, -1).join(', ') + '&' + names.slice(-1))
    : (names = names.join(''));
  return names;
}

console.log(method(arrName));
