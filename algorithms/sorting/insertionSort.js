const numbers = [99, 44, 2, 6, 1, 5, 63, 87, 234, 4, 100, 3, 0]

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      // move number to the first position
      arr.unshift(arr.splice(i,1)[0])
    } else {
      // find where number should go
      for (let j = 1; j < i; j++){
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          // move number to the right spot
          arr.splice(j,0,arr.splice(i,1)[0])
        }
      }
    }
    
  }
  return arr
}

console.log(insertionSort(numbers));