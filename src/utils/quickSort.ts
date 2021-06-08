function swap(items: any, leftIndex: number, rightIndex: number) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items: Array<any>, left: number, right: number) {
  var pivot = items[Math.floor((right + left) / 2)], //elemento del medio
    i = left, //puntero izquierdo
    j = right; //puntero derecho
  while (i <= j) {
    while (items[i].priority > pivot.priority) { //comparación de elementos, de mayor a menor
      i++;
    }
    while (items[j].priority < pivot.priority) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //intercambio de elementos
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items: Array<any>, left: number, right: number) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

export { quickSort }
