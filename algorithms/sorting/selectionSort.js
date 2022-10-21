const numbers = [1, 34, 67, 0, 34, 96, 66, 12, 99, 120]

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    let smallestNum = arr[i]
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    arr[i] = arr[min]
    arr[min] = smallestNum
  }
  return arr
}

console.log(selectionSort(numbers));