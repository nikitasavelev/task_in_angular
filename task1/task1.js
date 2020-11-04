// Task Есть неотсортированный список A натуральных чисел произвольной длины.
// Дополнительно определяется два дополнительных списка натуральных чисел - B и C.
// Необходимо отобрать из списка A все уникальные значения, которые имеются в списке B и отсутствуют в списке С.

let array_A = [1, 2, 2, 3, 4, 5, 6, 7, 4344, 3333, 3, 4, 5, 6, 7, 8];
let array_B = [1, 2, 23, 4344, 6575, 6879, 70978, 823, 33, 9, 8, 3333];
let array_C = [6, 1, 3, 6, 444, 3333, 6575, 7089];

function sortingLists(listA, listB, listC) {
  let uniqueListA = [];
  let resultList = [];

  uniqueListA = listA.filter(
    (element, index) => listA.indexOf(element) === index
  );
  uniqueListA.forEach((element) => {
    if (listB.includes(element) && !listC.includes(element)) {
      resultList.push(element);
    }
  });
  return resultList;
}

console.log(sortingLists(array_A, array_B, array_C));
