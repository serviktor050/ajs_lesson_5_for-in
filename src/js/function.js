import hero from './object.js';
import filter from './filter.js';

export default function orderByProps(object, exampleFilter) {
  const currentObject = object;

  const filteredArray = [];

  if (exampleFilter) {
    exampleFilter.forEach((element) => {
      filteredArray.push({
        key: element,
        value: currentObject[element],
      });
      delete currentObject[element];
    });
  }

  const arrayWithoutFilter = [];

  for (const item in currentObject) {
    arrayWithoutFilter.push({
      key: item,
      value: currentObject[item],
    });
  }

  arrayWithoutFilter.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
  });

  const sortArray = filteredArray.concat(arrayWithoutFilter);
  return sortArray;
}

orderByProps(hero, filter);
