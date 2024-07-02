export default function cleanSet(set, startString) {
  const newString = [];

  if (!startString) {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newString.push(value.substring(startString.length));
    }
  });
  return newString.join('-');
}
