'use scrict'

function filterBy(array, typeOfData) {
  const filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== typeOfData) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

const example = ['hello', 'world', 23, '23', null];

console.log(filterBy(example, 'string'));