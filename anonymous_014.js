function method(arr) {
  let tempString = arr.map((i) => i.name).join(', ');
  finalString =
    tempString.substring(0, tempString.lastIndexOf(', ')) +
    '&' +
    tempString.substring(tempString.lastIndexOf(', ') + 2);
  return finalString;
}
