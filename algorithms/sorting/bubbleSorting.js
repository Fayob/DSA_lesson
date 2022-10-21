const numbers = [1, 34, 67, 0, 34, 96, 66, 12, 99, 120]

const bubbleSearch = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
      let temp = array[j]
      array[j] = array[j + 1]
      array[j + 1] = temp
      }
    }
    
  }
  return array
}

console.log(bubbleSearch(numbers)); 